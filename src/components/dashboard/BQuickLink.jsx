import { useState, useEffect } from "react";
import makeup from "/brush.svg";
import clipper from "/clipper.svg";
import nail from "/nail.svg";
import hair from "/hair.svg";
import doublearrow from "/doublearrow.svg";
import { Link } from "react-router-dom";
import notifications from "/notifications.svg";
import favorites from "/favorites.svg";
import menu from "/hamburger-menu.svg";
import dashboard from "/dashboard.svg";
import profile from "/profile.svg";
import booking from "/booking.svg";
import chat from "/chat.svg";
import favorite from "/favorite.svg";

// Simulated backend data
const services = [
  { id: 1, icon: makeup, name: "Makeup" },
  { id: 2, icon: clipper, name: "Haircut" },
  { id: 3, icon: nail, name: "Nail Technician" },
  { id: 4, icon: hair, name: "Hair stylist" },
];

const BQuickLink = () => {
  const [showNav, setShowNav] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isSmallViewport ? (
    <>
      <h2 className="font-bold text-2xl text-primaryColor">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 text-black">
        <div className="shadow-md p-4">
          <div className="flex gap-4">
            <h4>Total Balance</h4>
            <p>eye</p>
          </div>
          <div className="flex justify-between items-center">
            <b className="mt-4">$45,789</b>
            <p className="text-xs bg-green-700 p-1">My Wallet</p>
          </div>
        </div>
        <div className="flex justify-between items-center shadow-md p-4">
          <img
            src="/timelessrecommended.png"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p>Good Morning!</p>
            <b>Becca Baruch</b>
          </div>
          <img src="/salon-verified.svg" alt="" />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default BQuickLink;
