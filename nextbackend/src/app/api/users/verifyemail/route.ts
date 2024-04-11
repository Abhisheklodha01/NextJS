import { connectDB } from "@/db/dbConnect";
import User from "@/models/user.models";
import { NextResponse, NextRequest } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    if (!token) {
      return NextResponse.json(
        {
          message: "Token is required please register first",
          success: false,
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid token details",
          success: false,
        },
        { status: 400 }
      );
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    const updatedUser = await user.save();
    return NextResponse.json(
      {
        message: "Email verified successfully",
        success: true,
        updatedUser
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
