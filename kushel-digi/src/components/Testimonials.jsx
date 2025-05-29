import React from "react";

const testimonials = [
  {
    name: "Anu Koteshwara",
    company: "Slide 365",
    logo: "/images/clients/3.png",
    feedback:
      "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse side offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
  },
  {
    name: "Shikhar Mithal",
    company: "Mithal Industries",
    logo: "/images/clients/11.png",
    feedback:
      "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse side offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
  },
  {
    name: "Matt Reeder",
    company: "Slide 365",
    logo: "/images/clients/2.png",
    feedback:
      "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse side offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#031D51] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Hear from our <span className="text-yellow-400">Satisfies</span>{" "}
          Clients
        </h2>
        <p className="text-gray-300 mb-10">
          We have Worked With Amazing Business
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-md p-6 relative pt-16"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-16 h-16 object-contain rounded-full bg-white p-2 shadow-md border border-[#0B56E4]"
                />
              </div>
              <p className="text-sm text-gray-700 mb-4">
                {testimonial.feedback}
              </p>
              <div className="divider divider-start"></div>
              <h4 className="font-semibold text-gray-900 text-start">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500 text-start">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
