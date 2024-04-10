"use client";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const Task = ({ task, _id }) => {
  const { user } = useContext(UserContext);

  return (
    <div
      className={` bg-gray-800 shadow-lg mt-3 rounded-md  ${
        task.status == "completed" ? "bg-green-600" : "bg-orange-500"
      }`}
    >
      <div className="p-4 ">
        <h1 className="text-2xl font-medium text-white ">
          {task.title}
        </h1>
        <p className="  text-gray-300 ">
          <span className=" text-white ">{task.content}</span>
        </p>
        <div className="flex justify-between mt-3">
          <p className="  text-gray-300 ">
            Status: <span className=" text-white ">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
