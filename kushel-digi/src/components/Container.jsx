import React from "react";
import Ellipse from "../assets/Ellipse 67.png";
import side from "../assets/side Shape.png";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";
import Black from "../assets/Black.png";

const Container = () => {
  return (
    <div className="bg-[#E9F5F6] bg-opacity-20 grid grid-cols-1 lg:grid-cols-5 items-center px-4 md:px-12">
      {/* Left Column - Image */}
      <div className="hidden lg:flex justify-start col-span-1">
        <img src={side} alt="side" className="-mt-[80%] -ms-[10%]" />
      </div>

      {/* Center Column - Text Content */}
      <div className="col-span-3">
        <section className="py-12 text-center relative">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E0F120F] rounded-full text-sm font-medium mx-auto mb-4">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Plan it. Design it. Build it. Get found. Make them buy.</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-4xl mx-auto">
            Revolutionize Your E-Commerce With Expert Consulting And Redesigned
            Websites That Will{" "}
            <span className="text-blue-600 font-bold">Grow Your Business</span>
          </h1>

          {/* Paragraphs */}
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            Is Your Website Working Hard For You? A Good Website Or E-Commerce
            Site Is Only As Good As Its Conversion Rate. No Matter What Your
            Business Is, Your Website Should Be Selling For You. Whether Driving
            Customers Through A Checkout Process Or Getting Them To Fill Out A
            Lead Form, It’s All About Converting Browsers Into Buyers.
          </p>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
            The Days Of Simple Brochure Sites Are Gone. It Is Time To Increase
            Conversion Rates And Generate More Leads. Kushel Digi Solutions Will
            Work With You To Ensure That Your Site Is Doing The Work It Should
            Be Doing. We Provide Website Design And Programming, Search Engine
            Optimization And Conversion Optimization Services To Companies Of
            Any Size And Any Type.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-2 border border-blue-400 text-blue-800 rounded-full hover:bg-blue-100 transition">
              <Link to={'/contact'} className="flex">CONTACT US <span><img src={Vector} alt="" className="m-1"/></span></Link>
            </button>
            <button className="px-6 py-2 border border-gray-400 text-gray-800 rounded-full hover:bg-gray-100 transition">
              <Link to={'/portfolio'} className="flex">OUR PORTFOLIO <span><img src={Black} alt="" className="m-1"/></span></Link>
            </button>
          </div>
        </section>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:flex justify-end col-span-1 -mt-[70%] -me-[8%]">
        <img src={Ellipse} alt="ellipse" />
      </div>
    </div>
  );
};

export default Container;
