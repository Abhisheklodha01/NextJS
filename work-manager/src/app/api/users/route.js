import {NextResponse} from 'next/server'

export function GET(request) {
    const users = [
        {
            name: "abhishek Lodha",
            phone: "990009",
            email: "amdnf"
        },
        {
            name: "abhishek",
            phone: "990009",
            email: "amdnf"
        },
        {
            name: "abhishek L",
            phone: "990009",
            email: "amdnf"
        },
    ]

    return NextResponse.json(users)
}

export function POST(request) {

}

export function DELETE(request) {

}

export function PUT(request) {

}