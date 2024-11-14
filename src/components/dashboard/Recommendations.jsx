import React from "react";
import learnandearn from "/learnandearn.png";
import becomeafreelancer from "/becomeafreelancer.png";

// Simulated backend data
const recommendationData = [
  {
    id: 1,
    image: learnandearn,
    title: "Learn and earn",
    description:
      "Become a stunning beauty professional and render your service to potential clients",
  },
  {
    id: 2,
    image: becomeafreelancer,
    title: "Become a freelancer",
    description:
      "Become a stunning beauty professional and render your service to potential clients",
  },
  {
    id: 3,
    image: learnandearn,
    title: "Learn and earn",
    description:
      "Become a stunning beauty professional and render your service to potential clients",
  },
  {
    id: 4,
    image: becomeafreelancer,
    title: "Become a freelancer",
    description:
      "Become a stunning beauty professional and render your service to potential clients",
  },
];

const Recommendations = () => {
  return (
    <div>
      <h3 className="font-bold text-lg py-2">Recommendations</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendationData.map((recommendation) => (
          <div key={recommendation.id}>
            <img src={recommendation.image} alt="" className="w-full" />
            <h4 className="font-semibold">{recommendation.title}</h4>
            <p className="text-xs">{recommendation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
