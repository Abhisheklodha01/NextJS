import { SendNextApiError } from '@/db/errorMessage'
import { Task } from '@/db/models/task.model'
import { User } from '@/db/models/user.model'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'


export async function POST(request) {
    const { title, content, userId, status } = await request.json()

    try {
        const authtoken = request.cookies.get("userToken")?.value
        const data = jwt.verify(authtoken, process.env.JWT_SECRET)

        if (!(title || content || userId)) {
            return SendNextApiError(false, "all fields are required", 400)
        }

        const task = await Task.create({
            title,
            content,
            status,
            userId: data._id
        })
        return NextResponse.json({
            success: true,
            message: "Task added successfully",
            task
        })
    } catch (error) {
        return SendNextApiError(
            false,
            "error while adding a task",
            501
        )
    }
}


export async function GET(request) {
    let tasks = []
    try {
        tasks = await Task.find()
        return NextResponse.json({
            message: "tasks Fetched successfully",
            tasks
        }, { status: 200 })
    } catch (error) {
        console.log(error);
        return SendNextApiError(
            false,
            "error while fetching tasks",
            501
        )
    }
}