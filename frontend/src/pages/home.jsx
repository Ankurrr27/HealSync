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
        <div className="md:w-1/3 flex justify-center mt-12 md:mt-0">
          <div className="w-full max-w-4xl h-[35rem] bg-[#ffffff] rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/doc3.svg"
              alt="Doctor illustration"
              className="w-120 h-120 object-fit mb-0 pb-0"
            />
          </div>
        </div>
      </section>

      {/* New Section */}
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                <span>Your Personal</span>{" "}
                <span className="text-blue-600">Health Toolkit</span>
              </h3>
              <p className="mt-4 text-xl text-gray-600">
                Four powerful features to help you take control of your
                well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/consultai" // Changed 'href' to 'to'
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-blue-500 transform hover:-translate-y-2"
              >
                <div className="text-blue-500 mb-4 p-4 bg-blue-100 rounded-full">
                  {/* SVG Icon (or Image) */}
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>

                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Talk to Heal Singh : Your AI Guide
                </h4>
                <p className="text-gray-600 text-base">
                  Get instant, personalized health tips and answers to your
                  questions 24/7.
                </p>
              </Link>

              <Link
  to="/profile" // Changed 'href' to 'to' for React Router
  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-teal-500 transform hover:-translate-y-2"
>
  <div className="text-teal-500 mb-4 p-4 bg-teal-100 rounded-full">
    {/* SVG Icon for Health Records */}
    <svg
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      ></path>
    </svg>
  </div>

  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
    Secure Health Record Vault
  </h4>
  <p className="text-gray-600 text-base">
    Keep all your medical history, test results, and prescriptions
    in one safe place.
  </p>
</Link>

             
<Link
  to="/posture"
  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-purple-500 transform hover:-translate-y-2"
>
  <div className="text-purple-500 mb-4 p-4 bg-purple-100 rounded-full">
    <svg
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
  </div>

  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
    Posture Correction Tool
  </h4>
  <p className="text-gray-600 text-base">
    Use your camera to get real-time feedback and fix your sitting
    or standing posture.
  </p>
</Link>

              <a
                href="/consult-doctor"
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-8 border-amber-500 transform hover:-translate-y-2"
              >
                <div className="text-amber-500 mb-4 p-4 bg-amber-100 rounded-full">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>

                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Telehealth Doctor Consults
                </h4>
                <p className="text-gray-600 text-base">
                  Connect instantly with licensed healthcare professionals for
                  video or chat appointments.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
