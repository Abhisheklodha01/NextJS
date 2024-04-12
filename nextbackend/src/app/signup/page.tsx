"use client";
import Link from "next/link";
import React, { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "@/helper/Loading";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await axios
        .post("/api/users/signup", user)
        .then((response) => response.data);
      toast.success(result.message, {
        position:"top-center"
      });
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="grid grid-cols-12 bg-sky-800">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center items-center mb-2"></div>
          <div className="bg-gray-700 pt-4 pl-10 pr-10 pb-6 rounded-2xl">
            <div>{loading && <Loading />}</div>
            <h1 className="text-2xl text-center">Register Here</h1>
            <form onSubmit={onSignup}>
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 mt-2"
                  htmlFor="user_name"
                >
                  userName
                </label>
                <input
                  type="text"
                  id="user_name"
                  placeholder="Enter Your Name"
                  className="rounded-lg w-full p-2.5 focus:outline-none bg-gray-500"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      username: e.target.value,
                    });
                  }}
                  value={user.username}
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
                    setUser({
                      ...user,
                      email: e.target.value,
                    });
                  }}
                  value={user.email}
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
                    setUser({
                      ...user,
                      password: e.target.value,
                    });
                  }}
                  value={user.password}
                />
              </div>
              <div className="flex justify-center items-center mt-4 mb-2">
                <button
                  className="py-2 px-6 border-1
                 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  {buttonDisabled ? "Fill form" : "Sign UP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
