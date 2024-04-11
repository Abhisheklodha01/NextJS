import { SendNextApiError } from '@/db/errorMessage'
import { User } from '@/db/models/user.model'
import { NextResponse } from 'next/server'


// get single user
export async function GET(request, { params }) {
  const { userid } = params
  try {
    const user = await User.findById(userid).select("-password")
    return NextResponse.json({
      success: true,
      user,
      message:"User Details fetched successfully"
    })

  } catch (error) {
    return SendNextApiError(
      false,
      "error while fetching a user",
      501
  )
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
    return SendNextApiError(
      false,
      "error while deleting a user",
      501
  )
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
    return SendNextApiError(
      false,
      "error while updating a user",
      501
  )
  }
}


