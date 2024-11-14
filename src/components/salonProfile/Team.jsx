import React from "react";

const Team = ({ salonData }) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-bold text-black py-4">Team</h3>
        <p>See all</p>
      </div>
      <div className="flex justify-between mb-10">
        {salonData.teams.map((team, index) => (
          <div key={index} className="text-center">
            <img
              src={team.img}
              alt=""
              className="w-[20rem] h-[20rem] rounded-full"
            />
            <div className="p-1 w-fit mx-auto -mt-4 flex gap-2 bg-gray-100 z-10 font-bold">
              {team.rating} <img src="/star.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
