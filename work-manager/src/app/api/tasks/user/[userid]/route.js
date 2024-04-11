import { SendNextApiError } from '@/db/errorMessage'
import { Task } from '@/db/models/task.model'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
    const { userid } = params
    let tasks = []

    try {
        tasks = await Task.find({ userId: userid })
        return NextResponse.json({
            sucess: true,
            message: "Tasks Fetched Successfully",
            tasks
        })
    } catch (error) {
        return SendNextApiError(
            false,
            "something went wrong",
            501
        )
    }
}
