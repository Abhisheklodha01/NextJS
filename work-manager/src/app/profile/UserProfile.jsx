"use client";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import HomeImage from "../../assets/home.svg";

function UserProfilePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="flex justify-center items-center flex-col text-gray-300">
      <h1 className=" mt-2 text-2xl font-bold">{user?.name}</h1>
      <h3 className=" mt-2 text-xl font-semibold">{user?.email}</h3>
      <h1 className=" mt-2 text-xl font-semibold">{user?._id}</h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image src={HomeImage} alt="homeImage" />
      </div>
    </div>
  );
}

export default UserProfilePage;
