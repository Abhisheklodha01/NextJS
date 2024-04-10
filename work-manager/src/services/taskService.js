import { HttpAxios } from "@/helper/axios"

export async function AddTasks(task) {
    const result = await HttpAxios.post("/api/tasks", task)
        .then((response) => response.data)
    return result
}

export async function GetTasks(userId) {
    const result = await HttpAxios.get(`/api/tasks/user/${userId}`)
        .then((response) => response.data)
    return result
}