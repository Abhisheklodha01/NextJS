import { Work } from '@/db/models/work.model'
import { NextResponse } from 'next/server'


export async function POST(request) {

    const { title, description } = await request.json()

    try {

        if (!(title || description)) {
            return NextResponse.json({
                success: false,
                message: "all fields are required"
            }, { status: 400 })
        }

        const work = await Work.create({
            title,
            description
        })

        return NextResponse.json({
            success: true,
            message: "Work addedd successfully",
            work
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "work creation failed"
        })
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
        return NextResponse.json({
            success: false,
            message: "error while fetching work"
        }, { status: 500 })
    }
}



