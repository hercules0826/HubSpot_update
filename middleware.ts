import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const session = req.auth;

  const isAuthPage = nextUrl.pathname.startsWith("/login");
  const isAdminPage = nextUrl.pathname.startsWith("/admin");

  // ✅ Pages that require onboarding, not login
  const onboardingRequired = [
    "/care-discovery",
    "/community",
    "/results",
  ];
  const isOnboardingPage = onboardingRequired.some((p) =>
    nextUrl.pathname.startsWith(p)
  );

  // ✅ Check onboarding cookie (server-friendly)
  const onboarded = req.cookies.get("onboarded")?.value === "true";

  // -------------------------------------------------------------
  // ✅ 1. Onboarding gates for visitors (non-admin users)
  // -------------------------------------------------------------
  if (isOnboardingPage && !onboarded) {
    return NextResponse.redirect(
      new URL("/onboarding", req.url)
    );
  }

  // -------------------------------------------------------------
  // ✅ 2. Authentication gates for admin/staff pages only
  // -------------------------------------------------------------
  if (isAdminPage) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // -------------------------------------------------------------
  // ✅ 3. If logged in, prevent going to /login again
  // -------------------------------------------------------------
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

// ✅ Middleware routes that should be checked
export const config = {
  matcher: [
    "/admin/:path*",
    "/care-discovery/:path*",
    "/community/:path*",
    "/results/:path*",
    "/login",
    "/onboarding",
  ],
};
