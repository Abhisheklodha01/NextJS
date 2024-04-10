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


export async function CurrentUser() {
    const result = await HttpAxios.get("/api/users/currentuser")
        .then((response) => response.data)
    return result
}

export async function LoggedoutUser() {
    const result = await HttpAxios.post("/api/users/logout")
        .then((response) => response.data)
    return result
}

