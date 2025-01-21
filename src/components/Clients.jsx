import { useState } from "react";
import {
  Circle,
  Triangle,
  Square,
  Github,
  Facebook,
  Box,
  Layout,
  Diamond,
  Trello,
  Slack,
  Figma,
  Gitlab,
  Chrome,
  Codepen,
  Codesandbox,
  Framer,
} from "lucide-react";

export default function ClientsSection() {
  const [showMore, setShowMore] = useState(false);

  const mainLogos = [
    // Top row
    {
      Icon: Circle,
      color: "text-blue-500",
      position: "top-[20%] left-[10%] sm:top-[20%] sm:left-[10%]",
    },
    {
      Icon: Github,
      color: "text-gray-700",
      position: "top-[15%] left-[40%] sm:top-[15%] sm:left-[25%]",
    },
    {
      Icon: Facebook,
      color: "text-blue-600",
      position: "top-[20%] left-[70%] sm:top-[20%] sm:left-[40%]",
    },
    {
      Icon: Box,
      color: "text-orange-500",
      position: "top-[35%] left-[25%] sm:top-[15%] sm:left-[55%]",
    },
    {
      Icon: Layout,
      color: "text-teal-500",
      position: "top-[35%] left-[55%] sm:top-[20%] sm:left-[70%]",
    },
    {
      Icon: Square,
      color: "text-purple-500",
      position: "top-[35%] left-[85%] sm:top-[15%] sm:left-[85%]",
    },

    // Middle row
    {
      Icon: Triangle,
      color: "text-green-500",
      position: "top-[50%] left-[15%] sm:top-[45%] sm:left-[15%]",
    },
    {
      Icon: Diamond,
      color: "text-pink-500",
      position: "top-[50%] left-[45%] sm:top-[50%] sm:left-[35%]",
    },
    {
      Icon: Layout,
      color: "text-teal-500",
      position: "top-[50%] left-[75%] sm:top-[45%] sm:left-[50%]",
    },
    {
      Icon: Github,
      color: "text-gray-700",
      position: "top-[65%] left-[30%] sm:top-[50%] sm:left-[65%]",
    },
    {
      Icon: Facebook,
      color: "text-blue-600",
      position: "top-[65%] left-[60%] sm:top-[45%] sm:left-[85%]",
    },

    // Bottom row
    {
      Icon: Box,
      color: "text-orange-500",
      position: "top-[80%] left-[20%] sm:top-[75%] sm:left-[10%]",
    },
    {
      Icon: Diamond,
      color: "text-pink-500",
      position: "top-[80%] left-[50%] sm:top-[80%] sm:left-[25%]",
    },
    {
      Icon: Triangle,
      color: "text-green-500",
      position: "top-[80%] left-[80%] sm:top-[75%] sm:left-[40%]",
    },
    {
      Icon: Square,
      color: "text-purple-500",
      position: "top-[95%] left-[35%] sm:top-[80%] sm:left-[55%]",
    },
    {
      Icon: Circle,
      color: "text-blue-500",
      position: "top-[95%] left-[65%] sm:top-[75%] sm:left-[70%]",
    },
    {
      Icon: Layout,
      color: "text-teal-500",
      position: "hidden sm:block sm:top-[80%] sm:left-[85%]",
    },
  ];

  const additionalLogos = [
    // Similar responsive positioning for additional logos
    {
      Icon: Trello,
      color: "text-blue-400",
      position: "top-[20%] left-[15%] sm:top-[20%] sm:left-[15%]",
    },
    {
      Icon: Slack,
      color: "text-purple-600",
      position: "top-[15%] left-[45%] sm:top-[15%] sm:left-[30%]",
    },
    {
      Icon: Figma,
      color: "text-black",
      position: "top-[20%] left-[75%] sm:top-[20%] sm:left-[45%]",
    },
    {
      Icon: Gitlab,
      color: "text-orange-600",
      position: "top-[35%] left-[30%] sm:top-[15%] sm:left-[60%]",
    },
    {
      Icon: Chrome,
      color: "text-blue-500",
      position: "top-[35%] left-[60%] sm:top-[20%] sm:left-[75%]",
    },

    // Middle section
    {
      Icon: Codepen,
      color: "text-gray-800",
      position: "top-[50%] left-[20%] sm:top-[45%] sm:left-[20%]",
    },
    {
      Icon: Codesandbox,
      color: "text-blue-700",
      position: "top-[50%] left-[50%] sm:top-[50%] sm:left-[40%]",
    },
    {
      Icon: Framer,
      color: "text-black",
      position: "top-[50%] left-[80%] sm:top-[45%] sm:left-[60%]",
    },
    {
      Icon: Trello,
      color: "text-blue-400",
      position: "top-[65%] left-[35%] sm:top-[50%] sm:left-[80%]",
    },

    // Bottom section
    {
      Icon: Slack,
      color: "text-purple-600",
      position: "top-[80%] left-[25%] sm:top-[75%] sm:left-[20%]",
    },
    {
      Icon: Figma,
      color: "text-black",
      position: "top-[80%] left-[55%] sm:top-[80%] sm:left-[40%]",
    },
    {
      Icon: Gitlab,
      color: "text-orange-600",
      position: "top-[80%] left-[85%] sm:top-[75%] sm:left-[60%]",
    },
    {
      Icon: Chrome,
      color: "text-blue-500",
      position: "top-[95%] left-[40%] sm:top-[80%] sm:left-[80%]",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>

        <div className="relative h-[600px] sm:h-[500px] overflow-hidden">
          {/* Main Logos */}
          <div
            className={`absolute w-full transition-transform duration-700 ease-in-out ${
              showMore ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="relative h-[600px] sm:h-[500px]">
              {mainLogos.map(({ Icon, color, position }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-300 hover:scale-110`}
                >
                  <div className="bg-white rounded-full shadow-xl p-4 sm:p-6 w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center border border-gray-100">
                    <Icon className={`w-8 h-8 sm:w-12 sm:h-12 ${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Logos */}
          <div
            className={`absolute w-full transition-transform duration-700 ease-in-out ${
              showMore ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-[600px] sm:h-[500px]">
              {additionalLogos.map(({ Icon, color, position }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} transition-all duration-300 hover:scale-110`}
                >
                  <div className="bg-white rounded-full shadow-xl p-4 sm:p-6 w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center border border-gray-100">
                    <Icon className={`w-8 h-8 sm:w-12 sm:h-12 ${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors font-medium text-sm sm:text-base"
          >
            {showMore ? (
              <>
                Show less
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </>
            ) : (
              <>
                Show more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
