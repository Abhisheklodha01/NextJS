"use client";
import Loading from "@/helper/Loading";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios
        .post("/api/users/login", user)
        .then((res) => res.data);
      toast.success(response.message, {
        position: "top-center",
      });
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className=" min-h-screen grid grid-cols-12 bg-sky-800">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="bg-gray-700 pt-4 pl-10 pr-10 pb-6 rounded-2xl mt-28">
            <div className="">{loading && <Loading />}</div>
            <h1 className="text-2xl text-center">Login Here</h1>
            <form action="#" onSubmit={onLogin}>
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
                  {buttonDisabled ? "Fill Form" : " Login"}
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
