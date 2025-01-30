import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  console.log(`Middleware ran for: ${path}`);
<<<<<<< HEAD

  // List of protected routes
=======
>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
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
        console.log("Token is valid, redirecting away from auth page");

        // Redirect logged-in users trying to access auth pages to a default route
        url.pathname = "/profile"; // Default route for logged-in users
        return NextResponse.redirect(url);
      } catch (error) {
        // If the token is invalid or expired, allow access to auth pages
        console.log("Invalid or expired token, allowing access to auth page");
<<<<<<< HEAD
=======

>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
      }
    }
  }

  // Check for protected routes
  if (protectedRoutes.includes(path)) {
    if (!refreshToken) {
      console.log("No refresh token found, redirecting to login");

      // Redirect to the login page with the 'from' query parameter and a message
<<<<<<< HEAD
=======

>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
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
      console.log("Token is valid:", payload);

      if (!payload.verified) {
<<<<<<< HEAD
=======

>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
        console.log("User is not verified, redirecting to profile");

        // Redirect users who are not verified
        url.pathname = "/verify-email"; // Redirect to profile or another page
<<<<<<< HEAD
=======

>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
        return NextResponse.redirect(url);
      }

      if (
        (path === "/usersManager" || path === "/job-applications") &&
        payload.userType !== "admin"
      ) {
        console.log("User does not have admin privileges, redirecting to profile");

        // Redirect non-admin users trying to access admin routes
        url.pathname = "/unauthorized"; // Redirect to a page indicating no access
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.log("Invalid or expired token:", error.message);

      // Redirect to login if token is invalid or expired
<<<<<<< HEAD
=======

>>>>>>> e4494060c75e11c83c3e246c29dc506f115f1dc9
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