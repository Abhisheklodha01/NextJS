"use client";
import UserContext from "@/context/userContext";
import { DeleteTask } from "@/services/taskService";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

const Task = ({ task, _id, deleteYourTask }) => {
  const { user } = useContext(UserContext);

  const deleteTaskfromdatabase = (taskId) => {
    deleteYourTask(taskId);
  };
  return (
    <div
      className={` bg-gray-800 shadow-lg mt-3 rounded-md  ${
        task.status == "completed" ? "bg-green-600" : "bg-orange-500"
      }`}
    >
      <div className="p-4 ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium text-white">{task.title}</h1>
          <span
            onClick={() => {
              deleteTaskfromdatabase(task._id);
            }}
            className="shadow-lg bg-gray-600 rounded-full
          flex justify-center items-center cursor-pointer w-9 h-9 hover:bg-cyan-600 "
          >
            <RxCross1 />
          </span>
        </div>
        <p className="  text-gray-300 ">
          <span className=" text-white ">{task.content}</span>
        </p>
        <div className="flex justify-between mt-3">
          <p className="  text-gray-300 ">
            Status: <span className=" text-white ">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
