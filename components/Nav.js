import React, { useState } from "react";
import Link from "next/link";

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleClose(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <nav className="fixed h-16 w-full bg-white shadow border-b shadow-lg z-10">
      <div className="relative w-full h-16">
        <div className="absolute left-4 top-4 text-2xl font-semibold text-gray-900 transform hover:text-gray-800 transition duration-500 ease-in-out hover:-translate-y-1">
          <Link href="#home">Nico Jarvinen</Link>
        </div>

        {isOpen ? (
          <div
            onClick={handleClose}
            className="hidden absolute cursor-pointer right-4 top-1/2 transform -translate-x-4 -translate-y-1/2 z-10"
          >
            <div className="w-7 h-1 bg-white m-1"></div>
            <div className="w-7 h-1 bg-white m-1"></div>
            <div className="w-7 h-1 bg-white m-1"></div>
          </div>
        ) : (
          <div
            onClick={handleOpen}
            className="absolute block md:hidden cursor-pointer right-4 top-1/2 transform -translate-x-4 -translate-y-1/2 z-10"
          >
            <div className="w-7 h-1 bg-black m-1"></div>
            <div className="w-7 h-1 bg-black m-1"></div>
            <div className="w-7 h-1 bg-black m-1"></div>
          </div>
        )}
        {isOpen ? (
          <div className="flex flex-col justify-around items-left text-white right-0 fixed h-screen w-1/2 bg-blue-600">
            <div
              onClick={handleClose}
              className="absolute cursor-pointer right-4 top-8 transform -translate-x-4 -translate-y-1/2 z-10"
            >
              <div className="w-7 h-1 bg-white m-1"></div>
              <div className="w-7 h-1 bg-white m-1"></div>
              <div className="w-7 h-1 bg-white m-1"></div>
            </div>
            <div className="text-2xl ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
              <Link href="#home">Home</Link>
            </div>
            <div className="text-2xl ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
              <Link href="#about">About</Link>
            </div>
            <div className="text-2xl ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
              <Link href="#work">Projects</Link>
            </div>
            <div className="text-2xl ml-8 transform hover:text-gray-800 transition ease-in-out duration-500 hover:scale-110">
              <Link href="#contact">Contact Me</Link>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex md:flex-row items-center justify-end py-4 ml-auto pr-4 ">
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
        )}
      </div>
    </nav>
  );
}
