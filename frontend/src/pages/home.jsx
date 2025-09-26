import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center bg-[#e3f4ff] px-8 py-12 min-h-screen">
        {/* Left Side: Heading, Tagline, Features */}
        <div className="md:w-1/2 flex flex-col gap-6 px-10 md:px-20 text-center md:text-left">
          {/* Logo / Heading */}
           <div className="w-2/3 text-sm font-semibold text-black bg-white px-4 py-2 rounded-full shadow-md mt-0 mb-5">
          World's first AI health companion that too fully customizable !
        </div>
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-black">Your digital health</span>
            <span className="text-blue-600"> Companion</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            HealSync helps you track your medical history, get reminders, and
            receive tailored health tips—right when you need them.
          </p>

          {/* Features List */}
          <ul className="flex flex-col gap-3 text-gray-800 list-none p-0 mx-auto md:mx-0">
            <li className="before:content-['✔'] before:text-blue-600 before:mr-2">
              Secure & Encrypted Health Data
            </li>
            <li className="before:content-['✔'] before:text-blue-600 before:mr-2">
              Fast & Seamless Sync Across Devices
            </li>
            <li className="before:content-['✔'] before:text-blue-600 before:mr-2">
              Easy-to-Use Dashboard
            </li>
          </ul>

          {/* Call-to-Action Button */}
          {/* Removed the empty <a href="consultai.jsx"></a> tag */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 w-max mx-auto md:mx-0">
            <Link to="/consultai" className="focus:outline-none">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Consult AI Companion
              </button>
            </Link>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl border border-blue-600 shadow-lg transition-all duration-300 hover:scale-105">
              How it works ?
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-start gap-4 text-left">
            <p className="text-sm font-semibold">100% secure</p>
            <p className="text-sm font-semibold">200+ doctors registered</p>
            <p className="text-sm font-semibold">5000+ satisfied patients</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="w-full max-w-4xl h-[35rem] bg-[#ffffff] rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/doc3.svg"
              alt="Doctor illustration"
              className="w-110 h-110 object-fit mb-0 pb-0"
            />
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="h-screen w-full flex items-center justify-center bg-white p-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-blue-600 mb-4">
            Innovate Your Health Journey
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover how our cutting-edge solutions are redefining personal
            healthcare, giving you the tools to live a healthier and more
            informed life.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
