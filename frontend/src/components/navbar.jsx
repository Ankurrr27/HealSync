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
            <Link
              to="/" // Directing to the homepage
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group mr-10 "
            >
              {/* Home Icon (Heroicons Solid style) */}
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l.293-.293a1 1 0 011.414 0l.293.293V17a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>

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
          <Link
            to="/profile"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Profile
          </Link>
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
