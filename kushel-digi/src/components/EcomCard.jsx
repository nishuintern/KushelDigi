import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import progess from "../assets/progressbar.png";
import laptop from "../assets/laptop.png";
import laptop2 from "../assets/laptop.png";

const caseStudies = [
  {
    title: "2ndamendmentguns",
    tag: "Store Design & Development",
    stats: [
      { value: "80%", label: "Increase in Sales" },
      { value: "120%", label: "Increase in Conversion Rate" },
      { value: "140%", label: "Increase in Order Value" },
    ],
    image: laptop,
  },
  {
    title: "Fashionista",
    tag: "Platform Migration",
    stats: [
      { value: "60%", label: "Increase in Sales" },
      { value: "90%", label: "Increase in Conversion Rate" },
      { value: "110%", label: "Increase in Order Value" },
    ],
    image: laptop2,
  },
  // Add more case studies as needed
];

const EcomCard = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const { title, tag, stats, image } = caseStudies[current];

  return (
    <section className="bg-[#E9F5F6] py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Building The Best Of E-Commerce
        </h2>
        <p className="text-gray-500 mt-2">
          See what we've achieved for brands like yours
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-90 rounded-xl p-6 md:p-10 shadow-md max-w-6xl mx-auto relative backdrop-blur-sm">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="bg-gray-200 text-blue-600 px-3 py-1 rounded-full text-sm inline-block font-medium">
            {tag}
          </span>

          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium">
            VIEW CASE STUDY →
          </button>
        </div>
        <div className="divider divider-horizontal"></div>

        {/* Right Image */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <img
            src={image}
            alt="case study preview"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
          onClick={handleNext}
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      {/* Pagination */}
      <div className="text-center mt-8 space-x-4">
        <span className="text-sm text-gray-400">
          <img
            src={progess}
            alt="progress"
            className="justify-self-center my-2"
          />
        </span>
        <button className="cursor-pointer px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium">
          VIEW ALL WORK →
        </button>
      </div>
    </section>
  );
};

export default EcomCard;