import React from "react";
import selfcare from "/selfcare.png";
import lashesandbrows from "/lashesandbrows.png";
import makeup from "/makeup.png";
import arrow from "/arrow.svg";

// Simulated backend data
const beautyTipsData = [
  { id: 1, image: selfcare, title: "Self-Care" },
  { id: 2, image: lashesandbrows, title: "Lashes and Brows" },
  { id: 3, image: makeup, title: "Make-Up" },
  { id: 4, image: makeup, title: "More" },
];

const BeautyTips = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h3 className="font-bold text-lg">Beauty tips with Flaury</h3>
        <p>Get updated on the latest beauty trends</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {beautyTipsData.map((tip) => (
          <div key={tip.id}>
            <img src={tip.image} alt="" className="w-full" />
            <div className="flex justify-between my-2">
              <h4 className="font-semibold">{tip.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyTips;
