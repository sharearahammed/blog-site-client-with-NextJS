import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { ROLES } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  // Check if the user is authenticated and determine their role
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === ROLES.admin;
  }
  // Redirect unauthenticated users to the login page
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Redirect users based on their roles
  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  // Redirect non-admin users trying to access admin routes
  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  console.log(data);
  console.log(pathname);

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/admin-dashboard",
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
  ],
};
