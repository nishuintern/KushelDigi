import React from "react";
import {
  FaMobileAlt,
  FaHandshake,
  FaGraduationCap,
  FaBullseye,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt className="text-2xl text-blue-600 mb-3" />,
    title: "Responsive Web Design",
    description:
      "All of our sites are built with a mobile first approach. We make sure your site will be viewable by all.",
  },
  {
    icon: <FaHandshake className="text-2xl text-blue-600 mb-3" />,
    title: "Consultive Approach",
    description:
      "We work with our clients to truly understand their business and their sales goals to build a solution perfect for them.",
  },
  {
    icon: <FaGraduationCap className="text-2xl text-blue-600 mb-3" />,
    title: "Expert Advice",
    description:
      "With more than 20 years in web development and e-commerce consulting there is nothing we have not seen.",
  },
  {
    icon: <FaBullseye className="text-2xl text-blue-600 mb-3" />,
    title: "Built For Conversion",
    description:
      "Our focus is driving more sales and leads. We build your site to optimize these conversions.",
  },
  {
    icon: <FaChartLine className="text-2xl text-blue-600 mb-3" />,
    title: "Marketing Strategies",
    description:
      "We will help you develop the perfect strategy to get more clients, and will setup all the tools you need.",
  },
  {
    icon: <FaTrophy className="text-2xl text-blue-600 mb-3" />,
    title: "Competitive Analysis",
    description:
      "We look at what the leaders in your industry are doing so that you are sure to compete with the best.",
  },
];

const Discover = () => {
  return (
    <section className="py-16 bg-[#FFFFFF] bg-opacity-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Discover why{" "}
          <span className="text-blue-600">Kushel Digi Solutions</span> Stands
          Out
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover why <strong>kushel Digi Solutions</strong> stands out with
          innovative strategies and personalized service
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start">
              {feature.icon}
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
