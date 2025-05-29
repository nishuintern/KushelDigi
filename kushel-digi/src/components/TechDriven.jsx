import React from "react";
import shopify from "../assets/shopify.png";
import magento from "../assets/magento.png";
import bigcommerce from "../assets/bigcommerce.png";
import woocommerce from "../assets/woocommerce.png";
import Tech from "../assets/Tech.png";


const technologies = [
  {
    logo: shopify,
    title: "",
    desc: "Over 4.4 million businesses are thriving on Shopify. Let’s put your business right at the top with our powerful Shopify stores and mobile Apps.",
  },
  {
    logo: magento,
    title: "",
    desc: "Big brands are thriving with Magento stores — are you missing out? We can build a feature-rich Magento 2 store for you to lead and scale online.",
  },
  {
    logo: bigcommerce,
    title: "",
    desc: "Sell smarter, not harder with BigCommerce! We build easy-to-use stores that grab more attention and crush the competition.",
  },
  {
    logo: woocommerce,
    title: "",
    desc: "Over 4.4 million businesses are thriving on Shopify. Let’s put your business right at the top with our powerful Shopify stores and mobile Apps.",
  },
  {
    logo: null,
    title: "Custom Commerce",
    desc: "Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
  },
  {
    logo: null,
    title: "Headless",
    desc: "Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
  },
];

const TechDriven = () => {
  return (
    <section className="bg-[#E7E7E7] bg-opacity-20 py-16 px-4">
      <div className="text-center mb-10">
        <p className="text-sm text-black-500 font-medium">
          <img src={Tech} alt="tech"  className="justify-self-center h-10"/>
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mt-2">
          Building Tech-Driven Ecommerce Stores
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="border border-gray-200 hover:shadow-lg transition rounded-lg p-6 bg-white"
          >
            {tech.logo && (
              <img
                src={tech.logo}
                alt={tech.title}
                className=" h-10 mb-4 object-contain"
              />
            )}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {tech.title}
            </h3>
            <p className="text-sm text-gray-600">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechDriven;
