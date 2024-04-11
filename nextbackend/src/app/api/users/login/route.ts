import { connectDB } from "@/db/dbConnect";
import User from "@/models/user.models";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { email, password } = reqbody;
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "User does not exists please register",
        },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "LoggedIn successfully",
      success: true,
    });

    response.cookies.set("userToken", token, {
        httpOnly: true
    });
    return response;

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
