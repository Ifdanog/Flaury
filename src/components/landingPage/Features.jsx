import React from "react";
import handshakefill from "/handshake-fill.svg";
import money from "/money.svg";
import globe from "/globe.svg";
import customersupport from "/customersupport.svg";

const Features = () => {
  const featuresData = [
    {
      icon: handshakefill,
      text: "You get access to a wide range of professional service providers.",
    },
    {
      icon: money,
      text: "Access affordable services at your comfort within your budget.",
    },
    {
      icon: globe,
      text: "Get linked to services providers around you or preferred location",
    },
    {
      icon: customersupport,
      text: "You get access to 24/7 customer support service to answer your questions.",
    },
  ];

  return (
    <section className="mt-20 px-4 md:px-20 py-10 text-center bg-secondaryColor">
      <h3 className="text-primaryColor text-2xl font-bold py-4">At FLAURY,</h3>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {featuresData.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-4 my-4"
          >
            <img src={feature.icon} alt="" />
            <p className="text-primaryColor text-sm">{feature.text}</p>
          </div>
        ))}
        <div className="col-span-1 md:col-span-1 md:col-start-2 flex flex-col justify-center items-center mx-4 my-4">
          <img src={featuresData[3].icon} alt="" />
          <p className="text-primaryColor text-sm">{featuresData[3].text}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
