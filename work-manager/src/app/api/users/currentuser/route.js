import { SendNextApiError } from '@/db/errorMessage'
import { User } from '@/db/models/user.model'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function GET(request) {
    try {
        const authtoken = request.cookies.get("userToken")?.value
        const data = jwt.verify(authtoken, process.env.JWT_SECRET)
        const user = await User.findById(data._id).select("-password")

        return NextResponse.json(user, { message: "user details fetched successfully" })
    } catch (error) {
        return SendNextApiError(false, "Error in loading current user Information", 500)
    }

}