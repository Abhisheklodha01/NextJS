"use client";
import UserContext from "@/context/userContext";
import { GetTasks } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";

function ShowTasks() {
  const context = useContext(UserContext);

  const [tasks, setTasks] = useState([]);

  async function GetUserTasks(userId) {
    try {
      const userTask = await GetTasks(userId);
      console.log(userTask);
      setTasks([...userTask.tasks]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      GetUserTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <div className=" min-h-screen grid grid-cols-12  bg-gray-900">
      <div className="col-span-6 col-start-4">
        <h1 className="text-center text-2xl mt-5 mb-5">Your Tasks: {tasks.length}</h1>

        {tasks.map((task) => (
          <Task task= {task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default ShowTasks;
