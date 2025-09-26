import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-b-lg px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-black">Heal</span>
            <span className="text-blue-600">Sync</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex justify-center items-center space-x-8 lg:space-x-12 hidden md:flex">
          <a href="#" className="flex items-center space-x-2 text-gray-600 ">
            {/* Sun Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-10 hover:text-blue-600 transition-colors duration-200"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM18.894 17.834a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591ZM12 21.75a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 1.5 0V21a.75.75 0 0 1-.75.75ZM5.66 18.894a.75.75 0 0 0-1.06-1.06l-1.59 1.591a.75.75 0 1 0 1.06 1.06l1.591-1.59ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12ZM5.66 5.106a.75.75 0 0 0-1.06 1.06l1.591 1.59a.75.75 0 1 0 1.06-1.061l-1.59-1.59Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hover:text-blue-600 transition-colors duration-200 ">
              Features
            </span>
          </a>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hidden md:inline-block"
          >
            Login
          </a>
          <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
