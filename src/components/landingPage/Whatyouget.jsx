import React from "react";
import hairTreatment from "/Ellipse 22.png";
import manicure from "/Ellipse 21.png";
import massge from "/Ellipse 20.png";
import skinRetouch from "/Ellipse 19.png";
import hairMakeover from "/Ellipse 18.png";
import NSkincare from "/Ellipse 22 (1).png";
import PConsultation from "/Ellipse 21 (1).png";
import HBarbing from "/Ellipse 20 (1).png";
import HColouring from "/Ellipse 18 (1).png";
import Consultation from "/Ellipse 19 (1).png";

const Whatyouget = () => {
  // Simulated data from backend
  const itemsData = [
    { image: hairTreatment, text: "Hair Treatment" },
    { image: manicure, text: "Manicure" },
    { image: massge, text: "Massage" },
    { image: skinRetouch, text: "Skin Retouch" },
    { image: hairMakeover, text: "Hair Make-over" },
    { image: NSkincare, text: "Natural Skincare" },
    { image: PConsultation, text: "Product Consultation" },
    { image: HBarbing, text: "Hair Barbing" },
    { image: HColouring, text: "Hair Colouring" },
    { image: Consultation, text: "Consultations" },
  ];

  return (
    <section className="mt-10 px-4 md:px-20 py-10 text-center">
      <h4 className="text-primaryColor text-2xl">
        Have Beauty Needs?, Get It Here
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 gap-4">
        {itemsData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" className="w-4/5 mx-auto" />
            <p className="text-primaryColor pt-4">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whatyouget;
