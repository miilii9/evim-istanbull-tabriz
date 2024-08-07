import { NextResponse } from "next/server";
import * as jose from "jose";

const verifyJwt = (token) => {
  const secretKey = new TextEncoder().encode(process.env.SECRET);
  const verified = jose.jwtVerify(token, secretKey);
  if (!verified) return false;
  return true;
};

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const isAuth = !!token;
  const verified = verifyJwt(token);

  if (req.nextUrl.pathname.startsWith("/login") && isAuth) {
    // return NextResponse.redirect(
    //   ("https://evimistanbull-tab.ir/admin", req.url)
    return NextResponse.redirect(("/admin", req.url));
  }

  if (!token || !verified) {
    return NextResponse.redirect("https://evimistanbull-tab.ir/login", req.url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
