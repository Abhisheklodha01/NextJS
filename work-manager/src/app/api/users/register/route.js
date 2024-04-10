import { SendNextApiError } from "@/db/errorMessage"
import { User } from "@/db/models/user.model"
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

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
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
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
        console.log(error);
        return SendNextApiError(
            false,
            "error while registering a user",
            501
        )
    }
}