import { User } from '@/db/models/user.model'
import { NextResponse } from 'next/server'


// get single user
export async function GET(request, { params }) {
  const { userid } = params
  try {
    const user = await User.findById(userid)
    return NextResponse.json({
      success: true,
      user
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
    })
  }
}

// delete user
export async function DELETE(request, { params }) {
  const { userid } = params
  try {
    await User.deleteOne({ _id: userid })
    return NextResponse.json({
      success: true,
      message: "User deleted successfully"
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error while deleting the user"
    })
  }
}


// update user
export async function PUT(request, { params }) {
  const { userid } = params
  const { name, password, about, profileURL } = await request.json()
  try {

    const user = await User.findById(userid);

    user.name = name
    user.password = password
    user.about = about
    user.profileURL = profileURL

    const updatedUser = await user.save()

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
      updatedUser
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "error while updating the user"
    })
  }
}


