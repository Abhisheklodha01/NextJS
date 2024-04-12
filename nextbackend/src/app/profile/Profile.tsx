"use client";
import {useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDatails = async () => {
    try {
      const res = await axios.post("/api/users/aboutme");
      setData(res.data.user._id);
    } catch (error: any) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile page</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "no user data"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button 
      onClick={logout}
      className="py-2 px-6 bg-blue-600 text-white rounded-lg mb-2 mt-2"
      >
        logout
      </button>

      <button 
      onClick={getUserDatails}
      className="py-2 px-6 bg-green-600 text-white rounded-lg"
      >
        GetDetails
      </button>
    </div>
  );
}
