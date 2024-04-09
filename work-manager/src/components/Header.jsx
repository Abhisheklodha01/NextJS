"use client";
import React from "react";
import Link from 'next/link'

function Header() {
  return (
    <nav className="bg-gray-700 h-16 py-2 px-3 flex justify-between items-center text-gray-300">
      <div className="">
        <h1>
          <Link
          href="/"
          className="font-bold text-2xl ml-2"
          >Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5 font-bold text-xl">
          <li className="hover:scale-110 hover:text-purple-600">
            <Link
            href="/">Home</Link>
          </li>
          <li
           className="hover:scale-105 hover:text-purple-600">
            <Link href="/showtasks">Show Tasks</Link>
          </li>
          <li
            className="hover:scale-105 hover:text-purple-600" >
            <Link href="/addtask">Add Task</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5 text-white">
          <li>
            <Link
            className="py-3 px-4 border-1  rounded-lg
            bg-gradient-to-r from-cyan-600 to-blue-600
            "
            href="/register">Sign Up</Link>
          </li>
          <li>
            <Link
            className="py-3 px-5 border-1  rounded-lg mr-5
            bg-gradient-to-r from-sky-600 to-violet-700
            "
            href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
