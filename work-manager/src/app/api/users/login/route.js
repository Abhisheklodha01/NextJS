import { SendNextApiError } from "@/db/errorMessage"
import { User } from "@/db/models/user.model"
import {compare} from 'bcryptjs'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'


export async function POST(request) {
    const { email, password } = await request.json()

    try {
        const user = await User.findOne({email})
        if (!user) {
            return SendNextApiError(
                false,
                "User not found please register",
                401
            )
        }
        const isMatch = await compare(password, user.password)
        if (isMatch == false) {
            return SendNextApiError(
                false,
                "Incorrect password",
                404
            )
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

        const response = NextResponse.json({
            user,
            success: true,
            message: "LoggedIn Successfully",
            
        })
        response.cookies.set("userToken", token, {
            expiresIn: "1d" 
        })
        return response
    } catch (error) {
        console.log(error);
        return SendNextApiError(false, "something went wrong", 500)
    }
}
