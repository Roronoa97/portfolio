import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { decrypt } from "./app/lib/session"

export async function proxy(request: NextRequest) {
  const session = request.cookies.get("session")?.value
  const payload = await decrypt(session)

  const { pathname } = request.nextUrl
  const isAuthenticated = Boolean(payload)

  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (pathname.startsWith("/login") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
}
