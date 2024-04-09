import { HttpAxios } from "@/helper/axios"

export async function AddTasks(task) {
    const result = await HttpAxios.post("/api/tasks", task)
        .then((response) => response.data)
    return result
}