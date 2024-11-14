import React from "react";

const WhereComponent = () => {
  return (
    <div className="flex h-screen justify-between text-black">
      <div className="flex">
        <img src="" alt="" />
        <div>
          <h3 className="text-sm font-semibold">Current location</h3>
          <p className="text-xs">Location access denied</p>
        </div>
      </div>
      <button className="border border-[#00000020] px-6 py-2 h-10 rounded-sm text-sm">
        Enable
      </button>
    </div>
  );
};

export default WhereComponent;
