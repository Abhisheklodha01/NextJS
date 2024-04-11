import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const GetDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("userToken")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);

    const id = decodedToken.id;
    return id

  } catch (error: any) {
    throw new Error(error.message);
  }
};
