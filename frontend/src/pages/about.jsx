import React, { useState, useEffect } from "react";

// Helper component for Social Media Icons (kept the same)
const SocialIcon = ({ icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
  >
    {icon}
  </a>
);

// New Feature Chat component (kept the same)
const FeatureChat = () => {
  const messages = [
    {
      role: "ai",
      text: "Hi there! I can help you understand your health better.",
    },
    { role: "user", text: "What can you do?" },
    {
      role: "ai",
      text: "I can provide instant and insightful health information.",
    },
    { role: "user", text: "Tell me more." },
    {
      role: "ai",
      text: "I can help with symptom checking, suggest diet plans, and offer personalized wellness advice.",
    },
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);

  // This effect ensures messages appear one after the other.
  useEffect(() => {
    let timer;
    const addMessage = (index) => {
      if (index < messages.length) {
        setVisibleMessages((prev) => [...prev, messages[index]]);
        // Use a shorter delay for a slightly faster demo
        timer = setTimeout(() => addMessage(index + 1), 1200); 
      }
    };
    // Clear the previous messages and start the animation over when the component mounts
    setVisibleMessages([]);
    addMessage(0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 h-124 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          Chat with HealSync AI
        </h3>
        <span className="text-xs text-green-500 font-semibold">Online</span>
      </div>
      <div className="flex flex-col space-y-4 overflow-y-auto flex-grow h-96"> {/* Added a fixed height class */}
        {visibleMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[80%] transition-opacity duration-500 ease-in-out transform ${
              msg.role === "ai"
                ? "bg-blue-100 self-start text-blue-800 rounded-bl-none"
                : "bg-gray-200 self-end text-gray-800 rounded-br-none"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// New Records section (kept the same)
const RecordsSection = () => {
  const records = [
    { title: "Diabetic Screening Report", value: "Dr. BP Singh - 10/02/2025", icon: "🩸" },
    { title: "Yearly Wellness CheckUp", value: "Dr. Ankita Birla - 09/25/2025", icon: "🩺" },
    { title: "Physical Therapy Notes", value: "Dr. Shivam G. - 09/20/2025", icon: "🏋️" },
    { title: "Prescription Refill", value: "Dr. Shahwar Ali - 09/15/2025", icon: "💊" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 h-124 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Your Health Records</h3>
        <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">
          View All →
        </span>
      </div>
      <div className="flex flex-col space-y-4 flex-grow">
        {records.map((record, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 rounded-xl bg-gray-100 transition-colors duration-200 hover:bg-gray-200 cursor-pointer"
          >
            <div className="text-2xl flex-shrink-0">{record.icon}</div>
            <div className="flex-grow">
              <h4 className="font-semibold text-gray-800">{record.title}</h4>
              <p className="text-sm text-gray-600">{record.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// NEW: How It Works Section
// NEW: How It Works Section - Revised for Symmetrical Height
const HowItWorksSection = () => {
    const steps = [
        {
            number: 1,
            title: "Ask Aura Anything",
            description: "Type your health-related question, symptom, or wellness goal into the chat.",
            icon: "💬",
        },
        {
            number: 2,
            title: "Receive Instant Insight",
            description: "Aura AI analyzes your query and provides a clear, evidence-based response immediately.",
            icon: "💡",
        },
        {
            number: 3,
            title: "Sync & Track Progress",
            description: "Log insights and advice directly into your secure health record vault for future reference.",
            icon: "💾",
        },
        
    ];

    return (
        <div className="max-w-6xl w-full my-20 ml-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 text-center">
                <span className="text-black">How HealSync </span>
                <span className="text-blue-600">Works in 3 Steps</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"> 
                {/* Added items-stretch to ensure grid children fill height */}
                {steps.map((step) => (
                    <div
                        key={step.number}
                        // Added h-full to make the card fill the grid cell height
                        className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg border-b-4 border-blue-500/50 hover:shadow-2xl transition-all duration-300 h-full" 
                    >
                        <div className="text-5xl font-extrabold text-blue-600 mb-4 bg-blue-50 p-3 rounded-full h-20 w-20 flex items-center justify-center border-2 border-blue-200">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Step {step.number}: {step.title}
                        </h3>
                        {/* Added flex-grow to description to push it down if space is available */}
                        <p className="text-gray-600 text-base flex-grow">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// About Component (main component)
const About = () => {
  // Array of team members (kept the same)
  const teamMembers = [
    {
      name: "Prachi",
      role: "Team Lead & Full Stack Developer",
      bio: "Prachi leads the team and technical development, ensuring the platform is robust, scalable, and secure for all users.",
      icon: "👩🏻‍💻",
      image: "Prachi.jpg",
      social: {
        github: "https://github.com/Prachi-Gupta2808",
        linkedin: "https://www.linkedin.com/in/prachi-gupta-74122a324",
        instagram: "https://www.instagram.com/prachigupta_2808/?hl=en",
        email: "mailto:prachi2808@gmail.com",
      },
    },
    {
      name: "Divyanshi",
      role: "Artificial Intelligence & Machine Learning",
      bio: "Divyanshi is responsible for the AI models, continuously improving their accuracy and relevance to provide the best possible health insights.",
      icon: "🔬",
      image: "Divy.jpg",
      social: {
        github: "https://github.com/divyanshu",
        linkedin: "https://linkedin.com/in/divyanshu",
        instagram: "https://www.instagram.com/saffron.skies555/?hl=en",
        email: "mailto:divyanshu@example.com",
      },
    },
    {
      name: "Ankur",
      role: "Founder & Frontend Developer UI/UX",
      bio: "Ankur's passion for digital health fuels the core mission of HealSync AI, driving the vision for a more accessible and personalized health experience.",
      icon: "👨🏻‍💻",
      image: "Ankur.jpg",
      social: {
        github: "https://github.com/Ankurrr27",
        linkedin: "https://www.linkedin.com/in/ankur-singh-b1331b333",
        instagram: "https://www.instagram.com/a_nkurrr/?hl=en",
        email: "mailto:ankurp22singh@gmail.com",
      },
    },
    {
      name: "Chirag",
      role: "Front End developer & Designer",
      bio: "Chirag crafts the user interface and experience, making sure the platform is intuitive and delightful to navigate for everyone.",
      icon: "🎨",
      image: "Chirag.jpg",
      social: {
        github: "https://github.com/Chiragsinghh",
        linkedin: "https://www.linkedin.com/in/chirag-singh-51a775324/",
        instagram: "https://www.instagram.com/chiragsiinghh/?hl=en",
        email: "mailto:chiragcse05@gmail.com",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 md:p-10 bg-gray-50">
      <div className="max-w-7xl w-full">
        {/* Welcome Section - HERO */}
        <div className="flex flex-col items-center justify-center min-h-160 px-4 pt-10 pb-16">
          <img src="doc2.svg" alt="Digital Health Illustration" className="h-56 w-auto mb-8 mx-auto" />
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-black">About</span>
              <span className="text-blue-600"> HealSync AI</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Discover the future of personal wellness with your AI health
              companion. Chat with our intelligent system to get instant insights,
              advice, and information tailored to your needs.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 mt-13 ">
          <span className="text-black">Key </span>
          <span className="text-blue-600">Features</span>
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-8 max-w-6xl w-full mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <FeatureChat />
          </div>
          <div className="w-full md:w-1/2">
            <RecordsSection />
          </div>
        </div>

        {/* ======================================================= */}
        {/* NEW: HOW IT WORKS SECTION INSERTED HERE */}
        {/* ======================================================= */}
        <HowItWorksSection />
        {/* ======================================================= */}


        {/* Our Team Section */}
        <div className="max-w-6xl w-full my-10 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
            <span className="text-black">Our</span>
            <span className="text-blue-600"> Visionaries</span>
          </h2>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full border-4 border-blue-400 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 text-center leading-relaxed flex-grow">
                  {member.bio}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center items-center space-x-4 mt-4">
                  {member.social.github && (
                    <SocialIcon
                      link={member.social.github}
                      label="GitHub profile"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 1.25.232 1.625-.561 1.625-1.244 0-.612-.024-2.227-.038-4.363-3.325.722-4.026-1.603-4.026-1.603-.543-1.382-1.325-1.751-1.325-1.751-1.083-.743.082-.729.082-.729 1.198.085 1.831 1.229 1.831 1.229 1.062 1.831 2.809 1.303 3.493.996.108-.775.417-1.303.762-1.604-2.665-.304-5.464-1.332-5.464-5.93 0-1.31.468-2.381 1.236-3.224-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.229 1.01-.281 2.079-.422 3.149-.426 1.07.004 2.14.145 3.15.426 2.291-1.552 3.298-1.229 3.298-1.229.653 1.652.242 2.873.118 3.176.77.842 1.235 1.913 1.235 3.224 0 4.61-2.802 5.624-5.475 5.922.427.369.813 1.103.813 2.222 0 1.606-.015 2.898-.015 3.287 0 .688.37 1.487 1.64.23 4.767-1.589 8.196-6.086 8.196-11.385c0-6.627-5.373-12-12-12z" />
                        </svg>
                      }
                    />
                  )}
                  {member.social.linkedin && (
                    <SocialIcon
                      link={member.social.linkedin}
                      label="LinkedIn profile"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      }
                    />
                  )}
                  {member.social.instagram && (
                    <SocialIcon
                      link={member.social.instagram}
                      label="Instagram profile"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.63.958 5.313 1.637.692.686 1.401 2.062 1.543 5.314.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-.958 4.63-1.638 5.313-.686.692-2.062 1.401-5.314 1.543-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.63-.958-5.313-1.638-.692-.686-1.401-2.062-1.543-5.314-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.148-3.252.958-4.63 1.638-5.313.686-.692 2.062-1.401 5.314-1.543 1.267-.058 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.62-6.98 6.98-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.948c.2 4.358 2.62 6.78 6.98 6.98 1.28.058 1.688.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.948-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.442.645-1.442 1.442s.646 1.442 1.442 1.442 1.442-.645 1.442-1.442-.646-1.442-1.442-1.442z" />
                        </svg>
                      }
                    />
                  )}
                  {member.social.email && (
                    <SocialIcon
                      link={member.social.email}
                      label="Email"
                      icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-6.623 5.671v-13.626l6.623 7.955zm11.233 1.954l3.784-3.834v10.198l-3.784-6.364zm-1.847 4.417l-13.624-8.883-2.355 2.716 16.035 10.37zm-.171.189l-10.224-6.611-2.256 2.585 12.48 8.026 2.052-2.822z" />
                        </svg>
                      }
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;