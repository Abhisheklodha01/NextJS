"use client";
import React, { useState } from "react";
import Image from "next/image";
import RegisterSvg from "../../assets/register.svg";
import { HttpAxios } from "@/helper/axios";
import { toast } from "react-toastify";
import Loading from "@/helper/Loading";
import SignUP from "@/services/userService";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png",
  });

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
  };

  const handleSubmitForRegister = async (e) => {
    e.preventDefault();
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required", {
        position: "top-center",
      });
      return;
    }
    if (data.email.trim() === "" || data.email == null) {
      toast.warning("Email is required", {
        position: "top-center",
      });
      return;
    }
    if (data.about.trim() === "" || data.about == null) {
      toast.warning("About is required", {
        position: "top-center",
      });
      return;
    }
    if (data.password.trim() === "" || data.password == null) {
      toast.warning("Password is required", {
        position: "top-center",
      });
      return;
    }
    try {
      setLoading(true);
      const result = await SignUP(data);
      toast.success(result.message, {
        position: "top-center",
      });
      setLoading(false);
      router.push("/login")
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "",
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 bg-sky-800">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center items-center mb-2">
            <Image
              src={RegisterSvg}
              alt="login banner"
              style={{
                width: "40%",
              }}
            />
          </div>
          <div className="bg-gray-700 pt-4 pl-10 pr-10 pb-6 rounded-2xl">
            <div>{loading && <Loading />}</div>
            <h1 className="text-2xl text-center">Register Here</h1>
            <form action="#" onSubmit={handleSubmitForRegister}>
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 mt-2"
                  htmlFor="user_name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  placeholder="Enter Your Name"
                  className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
                  onChange={(e) => {
                    setData({
                      ...data,
                      name: e.target.value,
                    });
                  }}
                  value={data.name}
                />
              </div>
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 mt-2"
                  htmlFor="user_name"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  placeholder="Enter Your Email"
                  className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
                  onChange={(e) => {
                    setData({
                      ...data,
                      email: e.target.value,
                    });
                  }}
                  value={data.email}
                />
              </div>
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 mt-2"
                  htmlFor="user_name"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="user_password"
                  placeholder="Enter Your Password"
                  className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
                  onChange={(e) => {
                    setData({
                      ...data,
                      password: e.target.value,
                    });
                  }}
                  value={data.password}
                />
              </div>
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 mt-2"
                  htmlFor="user_name"
                >
                  About
                </label>
                <textarea
                  type="text"
                  id="user_about"
                  placeholder="Tell me something about you"
                  className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
                  onChange={(e) => {
                    setData({
                      ...data,
                      about: e.target.value,
                    });
                  }}
                  value={data.about}
                />
              </div>
              <div className="flex justify-center items-center mt-4 mb-2">
                <button
                  className="py-2 px-6 border-1
                 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  Sign UP
                </button>
                <button
                onClick={resetForm}
                  className=" ml-3 py-2 px-6 border-1
                 rounded-lg bg-gradient-to-r from-sky-700 to-violet-500"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
