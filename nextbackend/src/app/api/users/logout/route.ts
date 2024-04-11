import { connectDB } from "@/db/dbConnect";
import User from "@/models/user.models";
import { NextResponse, NextRequest } from "next/server";

connectDB()

export async function GET(request: NextRequest) {
  try {

   const response = NextResponse.json({
        message: "Logout successfully",
        success: true,
      });

    response.cookies.set("userToken", "", {
        httpOnly: true,
        expires: new Date(0)
    })

    return response

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
