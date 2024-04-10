"use client";
import Image from "next/image";
import loginSvg from "../../assets/login.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { AddTasks } from "@/services/taskService";
import Loading from "@/helper/Loading";

function AddTask() {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
  });

  const resetForm = () => {
      setTask({
        title: "",
        title: "",
        content: "",
        status: "none",
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await AddTasks(task);
      toast.success(result.message, {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="p-5 col-span-6 col-start-4 ">
        <div className="my-8 flex justify-center items-center">
          <Image
            src={loginSvg}
            alt="login banner"
            style={{
              width: "50%",
            }}
          />
        </div>
        <h1 className="text-2xl text-center font-medium">Add your task here</h1>
        <div>{loading && <Loading />}</div>
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              name="task_title"
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
              value={task.title}
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
            />
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Content
            </label>
            <textarea
              type="text"
              id="task_content"
              name="task_content"
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
              value={task.content}
            />
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2 mt-2"
            >
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
              onChange={(e) => {
                setTask({
                  ...task,
                  status: e.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ----Select Status----
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="py-2 px-6 border-1 rounded-lg bg-gradient-to-r from-sky-700 to-violet-700">
              Add Todo
            </button>
            <button 
            onClick={resetForm}
            className=" ml-3 py-2 px-6 border-1 rounded-lg bg-gradient-to-r from-sky-700 to-cyan-500">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
