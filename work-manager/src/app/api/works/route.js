import { SendNextApiError } from '@/db/errorMessage'
import { Work } from '@/db/models/work.model'
import { NextResponse } from 'next/server'


export async function POST(request) {

    const { title, description, userId } = await request.json()

    try {

        if (!(title || description || userId)) {
            return SendNextApiError(
                false,
                "all fields are required",
                401
            )
        }

        const work = await Work.create({
            title,
            description,
            userId
        })

        return NextResponse.json({
            success: true,
            message: "Work addedd successfully",
            work
        }, { status: 201 })
    } catch (error) {
        return SendNextApiError(
            false,
            "error while creating a work",
            501
        )
    }
}


export async function GET(request) {
    let works = []
    try {
        works = await Work.find()

        return NextResponse.json({
            success: true,
            message: "Work fetched successfully",
            works
        }, { status: 200 })
    } catch (error) {
        return SendNextApiError(
            false,
            "error while fetching a user",
            501
        )
    }
}



