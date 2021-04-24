import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="block w-full bg-white py-4 px-8 bg-white-700 text-black flex justify-between items-center border-b shadow fixed z-10000">
      <div className="text-2xl font-semibold text-gray-900 transform hover:text-gray-800 transition duration-500 ease-in-out hover:-translate-y-1">
        <Link href="#home">Nico Jarvinen</Link>
      </div>
      <div className="items-center hidden md:flex lg:flex xl:flex 2xl:flex">
        <div className="ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
          <Link href="#home">Home</Link>
        </div>
        <div className="ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
          <Link href="#about">About</Link>
        </div>
        <div className="ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
          <Link href="#work">Projects</Link>
        </div>
        <div className="ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
          <Link href="#contact">Contact Me</Link>
        </div>
      </div>
      <div className="tham tham-e-squeeze tham-w-8 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>
    </div>
  );
}
