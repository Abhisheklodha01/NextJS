
import { NextResponse } from 'next/server'


export function middleware(request) {

    const authtoken = request.cookies.get("userToken")?.value

    if (request.nextUrl.pathname === '/api/users/login' ||
        request.nextUrl.pathname === '/api/users/register') {
        return
    }

    const isAuthenticate =
        request.nextUrl.pathname === "/login"
        || request.nextUrl.pathname === "/register"

    if (isAuthenticate) {
        if (authtoken) {
            return NextResponse.redirect(new URL("/profile", request.url))
        }
    }
    else {
        if (!authtoken) {

            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({
                    message: "Access Denied",
                    success: false
                },
                    {
                        status: 401
                    })
            }

            return NextResponse.redirect(new URL("/login", request.url))
        }
        else {

        }
    }
}


export const config = {
    matcher: [
        '/addtask',
        '/showtasks',
        '/login',
        '/register',
        '/logout',
        '/profile/:path*',
        '/api/:path*',
    ],
}