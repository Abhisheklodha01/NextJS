import { connectDB } from "@/db/dbConnect";
import User from "@/models/user.models";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";
import { Turret_Road } from "next/font/google";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { username, email, password } = reqbody;

    console.log(reqbody);

    const ExistedUser = await User.findOne({ email });

    if (ExistedUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });
    console.log(user);

    // send verification email

    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: user._id,
    });

    return NextResponse.json({
        message: "User registerd successfully",
        success: true,
        user
    })
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
