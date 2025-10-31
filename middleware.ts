import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth;

  const isAuthPage = nextUrl.pathname.startsWith("/login");
  const isAdminPage = nextUrl.pathname.startsWith("/admin");

  // ✅ Not logged in → must log in
  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ Logged in → prevent going back to /login
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ Staff can't access admin
  if (isAdminPage && session?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/care-discovery/:path*",
    "/community/:path*",
    "/results/:path*",
    "/login",
  ],
};
