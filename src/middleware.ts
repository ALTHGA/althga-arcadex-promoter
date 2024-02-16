import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("@authptr-token")?.value;

  const authURL = new URL("/signin", req.url);
  const dashURL = new URL("/dashboard", req.url);

  if (!token) {
    if (req.nextUrl.pathname === "/signin") {
      return NextResponse.next();
    }
    return NextResponse.redirect(authURL);
  }

  if (req.nextUrl.pathname === "/signin") {
    return NextResponse.redirect(dashURL);
  }
}
export const config = {
  matcher: ["/dashboard", "/signin"],
};
