import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // Import jwtVerify from 'jose'

export async function middleware(req) {
  // const url = req.nextUrl.clone();
  // const path = url.pathname;

  // console.log(`Middleware ran for: ${path}`);

  // // List of protected routes
  // const protectedRoutes = [
  //   "/profile",
  //   "/hireTechie",
  //   "/usersManager",
  //   "/job-applications",
  // ];

  // // List of auth pages (login and signup) that logged-in users should not access
  // const authPages = ["/login", "/signup"];

  // // Get the refresh token from cookies
  // const refreshToken = req.cookies.get("jwt")?.value;

  // // Check if the user is trying to access auth pages while already logged in
  // if (authPages.includes(path)) {
  //   if (refreshToken) {
  //     try {
  //       // Use 'jose' to verify the JWT token
  //       await jwtVerify(
  //         refreshToken,
  //         new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET) // Secret for JWT verification
  //       );
  //       console.log("Token is valid, redirecting away from auth page");

  //       // Redirect logged-in users trying to access auth pages to a default route
  //       url.pathname = "/profile"; // Default route for logged-in users
  //       return NextResponse.redirect(url);
  //     } catch (error) {
  //       // If the token is invalid or expired, allow access to auth pages
  //       console.log("Invalid or expired token, allowing access to auth page");
  //     }
  //   }
  // }

  // // Check for protected routes
  // if (protectedRoutes.includes(path)) {
  //   if (!refreshToken) {
  //     console.log("No refresh token found, redirecting to login");

  //     // Redirect to the login page with the 'from' query parameter and a message
  //     url.pathname = "/login";
  //     url.searchParams.set("from", path); // Pass the intended path
  //     url.searchParams.set("message", "You need to log in to access this page"); // Custom message
  //     return NextResponse.redirect(url);
  //   }

  //   try {
  //     // Use 'jose' to verify the JWT token
  //     const { payload } = await jwtVerify(
  //       refreshToken,
  //       new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET) // Secret for JWT verification
  //     );
  //     console.log("Token is valid:", payload);

  //     // Check if the user is verified
  //     if (!payload.verified) {
  //       console.log("User is not verified, redirecting to profile");

  //       // Redirect users who are not verified
  //       url.pathname = "/verify-email"; // Redirect to profile or another page
  //       return NextResponse.redirect(url);
  //     }

  //     // Check if the user is trying to access restricted admin pages
  //     if (
  //       (path === "/usersManager" || path === "/job-applications") &&
  //       payload.userType !== "admin"
  //     ) {
  //       console.log("User does not have admin privileges, redirecting to profile");

  //       // Redirect non-admin users trying to access admin routes
  //       url.pathname = "/unauthorized"; // Redirect to a page indicating no access
  //       return NextResponse.redirect(url);
  //     }
  //   } catch (error) {
  //     console.log("Invalid or expired token:", error.message);

  //     // Redirect to login if token is invalid or expired
  //     url.pathname = "/login";
  //     url.searchParams.set("from", path);
  //     url.searchParams.set("message", "Your session has expired. Please log in again.");
  //     return NextResponse.redirect(url);
  //   }
  // }

  // Allow access to other routes
  return NextResponse.next();
}

// Middleware configuration to apply it to specific routes only
export const config = {
  matcher: [
    "/profile",
    "/hireTechie",
    "/usersManager",
    "/job-applications",
    "/login",
    "/signup",
  ], // Protected and auth routes
};
