"use client";
import UserContext from "@/context/userContext";
import { DeleteTask, GetTasks } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";
import Loading from "@/helper/Loading";

function ShowTasks() {
  const [loading, setLoading] = useState(false);
  const context = useContext(UserContext);

  const [tasks, setTasks] = useState([]);

  async function GetUserTasks(userId) {
    try {
      setLoading(true);
      const userTask = await GetTasks(userId);
      setTasks([...userTask.tasks]);
      toast.success(userTask.message, {
        position: "top-center",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Error while fetching tasks please try again", {
        position: "top-center",
      });
    }
  }

  async function deleteYourTask(taskId) {
    try {
      const result = await DeleteTask(taskId);
      const newTasks = tasks.filter(item => item._id != taskId)
      setTasks(newTasks)
      toast.success(result.message, {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("unable to delete please try again", {
        position: "top-center",
      });
    }
  }

  useEffect(() => {
    if (context.user) {
      GetUserTasks(context.user?._id);
    }
  }, [context?.user]);

  return (
    <div className=" min-h-screen grid grid-cols-12  bg-gray-900">
      <div className="col-span-6 col-start-4">
        <div className="mt-10">{loading && <Loading />}</div>
        <h1 className="text-center text-2xl mt-5 mb-5">
          Your Tasks: {tasks.length}
        </h1>

        {tasks.map((task) => (
          <Task task={task} key={task._id} deleteYourTask={deleteYourTask} />
        ))}
      </div>
    </div>
  );
}

export default ShowTasks;
