import { NextRequest, NextResponse} from 'next/server'

export function DELETE(NextRequest, {params}) {
    console.log(params);
    const userid = params.userid
    console.log(userid);
      return NextResponse.json({
        message: "Testing delete"
      })
}