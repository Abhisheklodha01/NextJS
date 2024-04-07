import { connectDB } from '@/db/db'
import { User } from '@/db/models/user.model'
import { NextResponse } from 'next/server'


connectDB()


// get all users
export async function GET(request) {
    let users = []
    try {
        users = await User.find()
        return NextResponse.json({
            success: true,
            users
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "error while fatching the users"
        })
    }

}

// creating a user
export async function POST(request) {
    try {
        const { name, email, password, about, profileURL } = await request.json()
        if (!(email || name || password)) {
            return NextResponse.json({
                message: "all fields are required",
                success: false
            },
                {
                    status: 400
                })
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
                message: "User created  successfully",
                user
            },
            {
                status: 201
            })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "failed to create user"
        },
            {
                status: 500
            })
    }
}
