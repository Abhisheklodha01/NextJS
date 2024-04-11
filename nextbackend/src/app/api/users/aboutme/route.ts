import { connectDB } from "@/db/dbConnect";
import User from "@/models/user.models";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { GetDataFromToken } from "@/helper/getDatafromToken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const userId = await GetDataFromToken(request);
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid token",
          success: false,
        },
        { status: 400 }
      );
    }
    return NextResponse.json({
      message: "User Found",
      success: true,
      user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
