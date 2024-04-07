import { SendNextApiError } from '@/db/errorMessage'
import { Task } from '@/db/models/task.model'
import { NextResponse } from 'next/server'

export async function GET(request, {params}) {
     const {taskid} = params

     try {
        const task = await Task.findById(taskid)
        return NextResponse.json({
            sucess: true,
            message: "Tasks Fetched Successfully",
            task
        })
     } catch (error) {
        return SendNextApiError(
            false,
            "something went wrong",
            501
        )
     }
}

export async function PUT(request, {params}) {
    const {taskid} = params
    const {title, content, status} = await request.json()

    try {
        let task = await Task.findById(taskid)
        task.title = title
        task.content = content
        task.status = status

        const updatedTask = await task.save()

        return NextResponse.json({
            sucess: true,
            message: "Task Updated successfully",
            updatedTask
        })
    } catch (error) {
        return SendNextApiError(
            false,
            "Error while updating a task",
            503
        )
    }
}

export async function DELETE(request, {params}) {
    const {taskid} = params

    try {
        await Task.deleteOne({_id: taskid})

        return NextResponse.json({
            sucess: true,
            message: "Task deleted successfully",
        })
    } catch (error) {
        return SendNextApiError(
            false,
            "Error while deleting a task",
            503
        )
    }
}

