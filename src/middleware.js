import { NextResponse } from "next/server";

export default async function middleware(request) {
  const token = request.cookies.get("next-auth.session-token");

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/timecheck",
};
