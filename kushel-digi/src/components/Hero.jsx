import React from "react";
import HeroBg from "../assets/HeroBg.png";
import Group from "../assets/Group.png";

const Hero = () => {
  return (
    <div>
      <div
        className="hero flex flex-col items-center justify-center text-center px-4 py-2"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#146f78",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60 absolute inset-0"></div> */}

        {/* Rating & Review */}
        <div className="relative z-10 flex items-center gap-2 mb-4">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${i + 1} star`}
                defaultChecked
              />
            ))}
          </div>
          <p className="text-white text-sm">4.8 (80+ Reviews)</p>
        </div>

        {/* Hero Text */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Crafting exceptional
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            ecommerce{" "}
            <span className="bg-yellow-400 border border-white px-2 text-black">
              experiences
            </span>
          </h1>
          <p className="text-white mt-4  mx-auto">
            Partner with our real people agency for Shopify and BigCommerce
            solutions.
          </p>
        </div>

        {/* Image */}
        <div className="relative z-10 mt-4">
          <img src={Group} alt="group" className="max-w-xs md:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
