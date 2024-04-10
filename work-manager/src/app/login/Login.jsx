"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assets/login.svg";
import { toast } from "react-toastify";
import Loading from "@/helper/Loading";
import { UserLogin } from "@/services/userService";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const resetForm = () => {
    setData({
      email: "",
      password: "",
    });
  };

  const handleSubmitForRegister = async (e) => {
    e.preventDefault();
    if (data.email.trim() === "" || data.email == null) {
      toast.warning("Email is required", {
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
      const result = await UserLogin(data);
      toast.success(result.message, {
        position: "top-center",
      });
      setLoading(false);
      router.push("/profile")
      setData({
        email: "",
        password: "",
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
              src={loginSvg}
              alt="login banner"
              style={{
                width: "40%",
              }}
            />
          </div>
          <div className="bg-gray-700 pt-4 pl-10 pr-10 pb-6 rounded-2xl">
            <div>{loading && <Loading />}</div>
            <h1 className="text-2xl text-center">Login Here</h1>
            <form action="#" onSubmit={handleSubmitForRegister}>
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
              <div className="flex justify-center items-center mt-4 mb-2">
                <button
                  className="py-2 px-6 border-1
                 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  Login
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

export default Login;
