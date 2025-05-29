import React from "react";

const clients = [
  { name: "Auxible India", img: "/images/clients/1.png" },
  { name: "Madfish", img: "/images/clients/2.png" },
  { name: "Slides365", img: "/images/clients/3.png" },
  { name: "Codepxl", img: "/images/clients/4.png" },
  { name: "Hindware", img: "/images/clients/5.png" },
  { name: "Deloitte", img: "/images/clients/6.png" },
  { name: "Usha Fasteners", img: "/images/clients/7.png" },
  { name: "Cronus", img: "/images/clients/8.png" },
  { name: "Havells", img: "/images/clients/9.png" },
  { name: "Instacertify", img: "/images/clients/10.png" },
];

const FeaturedClients = () => {
  return (
    <section className="bg-[#F5F3EF]  py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Featured Clients</h2>
        <p className="text-gray-600 mb-10">
          We have Worked With Amazing Business
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-4 rounded-md shadow-sm w-full flex items-center justify-center h-24 transition hover:scale-105"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;
