"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../(Components)/base";
import Image from "next/image";
import logo from "../../../public/book.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const router = useRouter();
//@ts-ignore
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, role }),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      const data = await res.json();
      console.log("Signup successful:", data);
      router.push("/login");
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[100vh]">
      {/* Left half - Image */}
      <div className="flex-shrink-0 md:w-[45%] md:h-full flex justify-center items-center h-1/3">
        <div className="relative w-full h-[80%] max-h-[500px]">
        <Image
          src={logo}
          alt="Signup Image"
          layout="fill"
          objectFit="contain"
          className="md:rounded-l-md"
        />
        </div>
      </div>

      {/* Right half - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-6 lg:pr-20">
        <div className="text-2xl font-bold mb-2 text-center lg:text-left">Welcome!</div>
        <p className="text-xl text-gray-700 text-center lg:text-left">Join Us and Explore More</p>

        <div className="p-8 py-10 shadow-md rounded-md w-full lg:w-[60%] mt-6">
          <h2 className="text-2xl font-bold mb-10 text-center">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
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
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-600 text-sm font-medium mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none w-full lg:w-[40%]"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already have an account?</p>
            <a href="/login" className="text-red-600 hover:underline">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
