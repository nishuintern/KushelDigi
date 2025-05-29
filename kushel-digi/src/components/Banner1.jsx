import React from "react";
import Layer3 from "../assets/Layer3.png";
import Layer2 from "../assets/Layer2.png";

const Banner1 = () => {
  return (
    <section className="bg-[#031D51] text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern aligned bottom-right using flex */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-start items-start">
        <img
          src={Layer3}
          alt="pattern"
          className="w-auto h-auto max-w-[200px] md:max-w-[300px] object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {/* Left column (optional) */}
        <div className="hidden md:block" />

        {/* Center column - main content */}
        <div className="col-span-1 md:col-span-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Ready to <span className="text-yellow-400">Partner</span> with You
            for Success
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help turn your entrepreneurial dreams into reality,
            quickly and efficiently. Share your needs with us and let's get
            started!
          </p>
          <button className="bg-white text-[#001845] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center mx-auto">
            LET'S GET STARTED
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

        {/* Right column (optional) */}
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-end items-end">
        <img
          src={Layer2}
          alt="pattern"
          className="w-auto h-auto max-w-[200px] md:max-w-[300px] object-contain"
        />
      </div>
    </section>
  );
};

export default Banner1;
