import React from "react";
import {
  FaCogs,
  FaStore,
  FaExchangeAlt,
  FaTools,
  FaPlug,
  FaMobileAlt,
} from "react-icons/fa";
import OurServices from "../assets/OurServices.png";
import Mask from "../assets/Mask.png";
import design from "../assets/design.png";

const services = [
  {
    id: 1,
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Digital Transformation",
    features: [
      "Ecommerce Audit & Strategy",
      "Scalability Roadmap",
      "Ecommerce Platform Selection",
      "Streamlined Tech Stack",
    ],
  },
  {
    id: 2,
    icon: <FaStore className="text-white text-2xl" />,
    title: "Store Design & Development",
    features: [
      "Ecommerce Store UI/UX",
      "Theme-Based Development",
      "Custom Shopify Development",
      "Custom BigCommerce Development",
    ],
  },
  {
    id: 3,
    icon: <FaExchangeAlt className="text-white text-2xl" />,
    title: "Platform Migration",
    features: [
      "Magento to Shopify",
      "Shopify to BigCommerce",
      "BigCommerce to Shopify",
      "Shopify to Magento",
    ],
  },
  {
    id: 4,
    icon: <FaTools className="text-white text-2xl" />,
    title: "Custom Tech Stack Development",
    features: [
      "Checkout Customisation",
      "Custom Tech Stack",
      "Operations Automation",
      "Cloud Migration",
    ],
  },
  {
    id: 5,
    icon: <FaPlug className="text-white text-2xl" />,
    title: "Third Party Integration",
    features: [
      "Payment Gateways",
      "Shipping Solutions",
      "Customer Support Tools",
    ],
  },
  {
    id: 6,
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: "App Development",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross Platform App Development",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-[#E7E7E7] bg-opacity-20 py-16">
      <div className="text-center mb-12">
        <img
          src={OurServices}
          alt="our Services"
          className="justify-self-center h-10"
        />
        <p className="mt-4 max-w-3xl mx-auto text-gray-900">
          We build exceptional <strong>ecommerce</strong> stores for ambitious
          mid-market brands and enterprises that{" "}
          <strong>accelerate conversions</strong>. We are widely regarded as the
          best commerce transformation company.
        </p>
      </div>
      {/* <img
        src={design}
        alt="design"
        className="rotate-[-199deg] ml-[-2%] h-50"
      /> */}

      <div className="flex">
        <div>
          <img src={design} alt="" className="rotate-[-198deg] ms-[-28%] w-20"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {services.map(({ id, icon, title, features }) => (
            <div
              key={id}
              className="bg-gradient-to-br from-[#515766] to-[#55507F] text-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-800 p-2 rounded">{icon}</div>
                <span className="text-xl font-bold opacity-50">
                  {String(id).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-white/90">
                {features.map((item, index) => (
                  <li key={index} className="list-none flex">
                    <span>
                      <img
                        src={Mask}
                        alt="rectangle"
                        className="w-5 h-5 mx-1 py-1"
                      />
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition cursor-pointer">
          START YOUR PROJECT →
        </button>
      </div>
    </section>
  );
};

export default Services;
