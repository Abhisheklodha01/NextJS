import { HttpAxios } from "@/helper/axios";

export default async function SignUP(data) {
    const result = await HttpAxios.post("/api/users/register", data)
        .then((response) => response.data)
    return result
}

export async function UserLogin(data) {
    const result = await HttpAxios.post("/api/users/login", data)
        .then((response) => response.data)
    return result
}