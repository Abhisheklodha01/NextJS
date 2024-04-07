import { NextResponse } from 'next/server'

export const SendNextApiError = (success, message, status = 200) => {
    return NextResponse.json({
        success: success,
        message: message,
    },
        { status: status })
}