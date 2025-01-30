import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  console.log(`Middleware triggered for path: ${path}`);

  const protectedRoutes = [
    "/profile",
    "/hireTechie",
    "/usersManager",
    "/job-applications",
  ];

  const authPages = ["/login", "/signup"];

  // Get the referer header to check where the user is coming from
  const referer = req.headers.get("referer");
  const isComingFromLogin = referer && new URL(referer).pathname === "/login";

  console.log(`Referer: ${referer}, Is coming from login: ${isComingFromLogin}`);

  // Skip validation if the user is coming from the login page
  if (isComingFromLogin && protectedRoutes.includes(path)) {
    console.log(`User is coming from login, skipping validation for ${path}`);
    return NextResponse.next();
  }

  // Get the refresh token from cookies
  const refreshToken = req.cookies.get("jwt")?.value;
  console.log(`Refresh token in middleware: ${refreshToken}`);

  // Check if the user is trying to access auth pages while already logged in
  if (authPages.includes(path)) {
    if (refreshToken) {
      try {
        await jwtVerify(
          refreshToken,
          new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
        );
        console.log(`User already logged in, redirecting from ${path} to /profile`);
        url.pathname = "/profile";
        return NextResponse.redirect(url);
      } catch (error) {
        console.log(`Token verification failed: ${error.message}`);
      }
    }
  }

  // Check for protected routes
  if (protectedRoutes.includes(path)) {
    if (!refreshToken) {
      console.log(`No refresh token found, redirecting to login`);
      url.pathname = "/login";
      url.searchParams.set("from", path);
      url.searchParams.set("message", "You need to log in to access this page");
      return NextResponse.redirect(url);
    }

    try {
      const { payload } = await jwtVerify(
        refreshToken,
        new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
      );

      if (!payload.verified) {
        console.log(`User not verified, redirecting to verify-email`);
        url.pathname = "/verify-email";
        return NextResponse.redirect(url);
      }

      if (
        (path === "/usersManager" || path === "/job-applications") &&
        payload.userType !== "admin"
      ) {
        console.log(`Non-admin user trying to access admin route, redirecting to unauthorized`);
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.log(`Token verification failed: ${error.message}, redirecting to login`);
      url.pathname = "/login";
      url.searchParams.set("from", path);
      url.searchParams.set("message", "Your session has expired. Please log in again.");
      return NextResponse.redirect(url);
    }
  }

  console.log(`Allowing access to ${path}`);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/hireTechie",
    "/usersManager",
    "/job-applications",
    "/login",
    "/signup",
  ],
};