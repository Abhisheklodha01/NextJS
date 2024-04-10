import { SendNextApiError } from '@/db/errorMessage';
import { NextResponse } from 'next/server'

export async function POST(request) {

    try {
        const response = NextResponse.json({
            success: true,
            message: "Logged out successfully"
        })

        response.cookies.set("userToken", "", {
            expiresIn: new Date(0)
        })

        return response
    } catch (error) {
        return SendNextApiError(
            false,
            "Unable to logged out please try again",
            500
        )
    }
}