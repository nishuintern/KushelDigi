import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const processPhases = [
  {
    title: "Discovery Phase",
    content: `A discovery phase is necessary to align business goals with an engineering team, avoid costly mistakes, and plan a smooth start of actual product development.

Our experienced business analysts and software architects map user journeys, conduct technical analyses, and define requirements and project scope for precise cost estimation. After the discovery phase, you'll receive a team composition plan, vision and scope document, technical and cost proposals with estimates, UX/UI prototype, and project plan based on your business objectives.`,
  },
  {
    title: "Strategy Phase",
    content: "Content for the Strategy Phase goes here.",
  },
  {
    title: "Design Phase",
    content: "Content for the Design Phase goes here.",
  },
  {
    title: "Development Phase",
    content: "Content for the Development Phase goes here.",
  },
  {
    title: "Quality Assurance Phase",
    content: "Content for the QA Phase goes here.",
  },
  {
    title: "Launch & Post-Launch Support Phase",
    content: "Content for the Launch Phase goes here.",
  },
];

const OurProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#E7E7E7] bg-opacity-20">
      <h1 className="text-center text-3xl font-semibold pt-4">Our Process</h1>
      <section className="py-16 px-4">
        <div className=" max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div>
            <ul className="space-y-4">
              {processPhases.map((phase, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-sm sm:text-base px-4 py-2 border-b-1 ${
                    activeIndex === index
                      ? "border-blue-500 text-blue-600 font-semibold bg-blue-50"
                      : "border-transparent hover:text-blue-500"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {phase.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="md:col-span-2 px-4">
            {/* <h2 className="text-2xl font-semibold mb-4">Our Process</h2> */}
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <FaSearch className="text-lg" />
              <h3 className="text-lg font-semibold">
                {processPhases[activeIndex].title}
              </h3>
            </div>
            <p className="text-gray-600 whitespace-pre-line mb-6">
              {processPhases[activeIndex].content}
            </p>
            <button className="bg-white cursor-pointer border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition flex items-center">
              LET’S CONNECT
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;
