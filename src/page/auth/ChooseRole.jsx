import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const businessRole = () => {
    setRole("business");
    navigate("/business-signup");
  };

  const customerRole = () => {
    setRole("customer");
    navigate("/signup");
  };

  return (
    <div className="text-center">
      <h3 className="mt-24 text-primaryColor text-xl font-bold">
        Welcome to Flaury
      </h3>
      <p className="text-xs">Enjoy simplified bookings for your convenience.</p>
      <h4 className="mt-4 text-primaryColor text-3xl font-bold">Are you?</h4>
      <div className="mt-20 w-1/3 md:w-[60%] mx-auto block md:flex justify-center gap-40 md:items-center">
        <div
          className="border-2 border-primaryColor rounded-md w-full md:w-1/3 cursor-pointer"
          onClick={businessRole}
        >
          <img src="/roleb.jpeg" alt="Business Role" />
          <h3 className="text-xl font-bold text-primaryColor mt-6 mb-2">
            Beautician
          </h3>
          <p className="text-xs mb-6">Beauty stylist or salon owner</p>
        </div>
        <h2 className="font-bold">OR</h2>
        <div
          className="border-2 border-primaryColor rounded-md w-full md:w-1/3 cursor-pointer"
          onClick={customerRole}
        >
          <img src="/rolec.jpeg" alt="Customer Role" />
          <h3 className="text-xl font-bold text-primaryColor mt-6 mb-2">
            Customer
          </h3>
          <p className="text-xs mb-6">Looking to hire a service</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
