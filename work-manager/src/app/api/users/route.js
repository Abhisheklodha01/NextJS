import { SendNextApiError } from '@/db/errorMessage'
import { User } from '@/db/models/user.model'
import { NextResponse } from 'next/server'


// get all users
export async function GET(request) {
    let users = []
    try {
        users = await User.find().select("-password")
        return NextResponse.json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        return SendNextApiError(
            false,
            "error while fetching a user",
            501
        )
    }

}

