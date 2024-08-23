"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BASE_URL } from "../(Components)/base";
import { useDispatch } from "react-redux";
import { resetBooks } from "../(Components)/GlobalRedux/Features/BookSlice";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();

  //@ts-ignore
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      dispatch(resetBooks());
      localStorage.setItem("token", data.token);

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-[100vh]">
      {/* Left half - Image */}
      <div className="flex-shrink-0 w-[45%] h-full flex justify-center items-center">
        <div className="relative w-full h-[80%] max-h-[500px]">
          <Image
            src="https://bookscape.com/_next/static/media/non-logged-bookshelf.a5668ea3.svg"
            alt="Login Image"
            layout="fill"
            objectFit="contain"
            className="rounded-l-md"
          />
        </div>
      </div>

      {/* Right half - Form */}
      <div className="flex-shrink-0 w-[50%] flex flex-col justify-center items-center bg-white pl-10 pr-10">
        <div className="text-2xl font-bold mb-2">Welcome!</div>
        <p className=" text-xl text-gray-700">
          Unleash a World of Books Right Here
        </p>

        <div className="p-8 py-10 shadow-md rounded-md w-[60%] mt-6">
          <h2 className="text-2xl font-bold mb-10 text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none w-[40%]"
              >
                LOGIN
              </button>
            </div>
          </form>

          {/* Not Registered? Sign Up */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Not registered?{" "}
              <Link href="/signup" className="text-red-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
