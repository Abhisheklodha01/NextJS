import { SendNextApiError} from '@/db/errorMessage'
import { Task } from '@/db/models/task.model'
import { NextResponse } from 'next/server'


export async function POST(request) {
    const { title, content, userId } = await request.json()

    try {

        if (!(title || content || userId)) {
            return SendNextApiError(false, "all fields are required", 400)
        }

        const task = await Task.create({
            title,
            content,
            userId
        })

        return NextResponse.json({
            success: true,
            message: "Task created successfully",
            task
        })
    } catch (error) {
        return SendNextApiError(
            false,
            "error while creating a task",
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
        return SendNextApiError(
            false,
            "error while fetching tasks",
            501
        )
    }
}