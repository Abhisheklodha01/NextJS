import { HttpAxios } from "@/helper/axios";

export default async function SignUP(data) {
    const result = await HttpAxios.post("/api/users", data)
        .then((response) => response.data)
    return result
}

export default async function UserLogin(data) {
    const result = await HttpAxios.post("")
}