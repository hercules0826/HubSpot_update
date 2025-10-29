import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const session = await auth();

  // protect all /admin routes
  const url = new URL(req.url);
  if (url.pathname.startsWith("/admin") && !session?.user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// optional: limit middleware scope
export const config = {
  matcher: ["/admin/:path*"],
};
