import React, { useRef } from "react";
import arrowLeft from "/arrowLeft.svg";
import arrowRight from "/arrowRight.svg";

const servicesData = [
  {
    id: 1,
    image: "/service1.png",
    title: "Skin Retouch",
    description: "Get your skin done in top notch styles...",
  },
  {
    id: 2,
    image: "service2.png",
    title: "Make-Over",
    description: "Experience Make-overs in a whole new level",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "Hair Treatment",
    description: "Give your hair a whole new dazzling feel",
  },
  {
    id: 4,
    image: "/service4.png",
    title: "Spa",
    description: "Melt away stress, reveal the readiance in you.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-4 md:px-20">
      {/* <div className="w-4/5 md:w-1/3 mx-auto flex justify-between items-center py-4">
        <h3 className="text-lightPrimaryColor text-sm">Trusted By:</h3>
        <ul className="flex gap-4">
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            Wave
          </button>
          <button className="border border-lightPrimaryColor text-xs px-4 py-1 rounded-lg text-lightPrimaryColor">
            HOE
          </button>
        </ul>
      </div> */}
      <div className="mt-10 relative">
        <div className="w-[100%] mx-auto overflow-scroll md:overflow-hidden">
          <div className="w-[150%] md:w-full grid grid-cols-4 gap-4">
            {servicesData.map((service) => (
              <div key={service.id} className="w-full">
                <img
                  src={service.image}
                  alt=""
                  className="bg-secondaryColor w-full"
                />
                <h4 className="text-primaryColor text-xl font-bold py-2">
                  {service.title}
                </h4>
                <p className="text-primaryColor text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
