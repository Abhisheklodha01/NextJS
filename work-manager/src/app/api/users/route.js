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

// creating a user
export async function POST(request) {
    try {
        const { name, email, password, about, profileURL } = await request.json()
        if (!(email || name || password)) {
            return SendNextApiError(
                false,
                "all fields are required",
                401
            )
        }

        const existedUser = await User.findOne({ email })
        if (existedUser) {
            return NextResponse.json({
                success: false,
                message: "User already exists please login"
            }, { status: 400 })
        }

        const user = await User.create({
            name,
            email,
            password,
            about,
            profileURL: profileURL || "not provided"
        })


        return NextResponse.json(
            {
                success: true,
                message: "SignUp successfully",
                user
            },
            {
                status: 201
            })
    } catch (error) {
        return SendNextApiError(
            false,
            "error while creating a user",
            501
        )
    }
}
