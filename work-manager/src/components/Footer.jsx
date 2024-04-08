"use client";
import React from "react";

function Footer() {
  return (
    <footer className="h-40 bg-blue-950">
      <div className="flex justify-between p-5">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-xl font-bold mb-2">
            Thank You for visiting Work Manager
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam</p>
        </div>
        <div className="text-center mr-24">
          <h1 className="text-xl font-bold">Important Links</h1>
          <ul className="mt-2">
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li className="mt-2 mb-2">
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
