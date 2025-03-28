import React, { useState } from "react";
import img3 from "../../../src/assets/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="bg-black border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          <a href="#" className="text-2xl font-semibold text-white">
            Ahmed
          </a>

          <button
            onClick={toggleNavbar}
            type="button"
            className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div
            className={`absolute top-[52px] left-0 w-full bg-black text-white transition-all duration-300 
              ${isOpen ? "block" : "hidden"} md:relative md:flex md:top-0 md:w-auto md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li><a href="#Home" className="block py-2 px-4 hover:text-blue-500 font-bold">Home</a></li>
              <li><a href="#Services" className="block py-2 px-4 hover:text-blue-500 font-bold">Services</a></li>
              <li><a href="#Skills" className="block py-2 px-4 hover:text-blue-500 font-bold">Skills</a></li>
              <li><a href="#Port" className="block py-2 px-4 hover:text-blue-500 font-bold">Projects</a></li>
              <li><a href="#Contact" className="block py-2 px-4 hover:text-blue-500 font-bold">Contact</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <img src={img3} className="h-8" alt="Logo" />
          </div>
        </div>
      </nav>
    </div>
  );
}
