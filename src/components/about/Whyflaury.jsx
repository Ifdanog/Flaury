import React from "react";
import img1 from "/about-img3.png";
import img2 from "/about-img4.png";
import img3 from "/about-img5.png";

const Whyflaury = () => {
  const whyflauryData = [
    {
      icon: img1,
      text: "Enjoy daily tips on enhance your beauty career and lifestyle",
    },
    {
      icon: img2,
      text: "Experience a lifestyle of convenience as we connect you to beauticians nearest to you",
    },
    {
      icon: img3,
      text: "Seamless booking system with our secured payment integration.",
    },
  ];

  return (
    <section className="px-4 md:px-20 py-10 text-center bg-[#F8F4D973]">
      <h3 className="text-primaryColor text-5xl font-bold py-4">Why Flaury?</h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 justify-center">
        {whyflauryData.map((whyflaury, index) => (
          <div key={index} className="flex flex-col items-center mx-4 my-4">
            <img src={whyflaury.icon} alt="" />
            <p className="text-black text-sm w-3/4 font-medium mt-6">
              {whyflaury.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whyflaury;
