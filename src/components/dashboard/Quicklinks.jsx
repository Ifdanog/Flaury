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

const Quicklinks = () => {
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
    <div>
      <h2 className="font-bold text-2xl text-primaryColor">Dashboard</h2>
      <div className="w-full flex gap-4 justify-between items-center bg-[#F8F4D9] p-4">
        <div className="border-r border-r-primaryColor pr-4">
          <h3 className="font-bold text-lg">Hello Becca 😊</h3>
          <p className="text-xs">What are you saying for today?</p>
          <p className="text-xs flex mt-2">
            <img src={doublearrow} alt="" className="mr-2" />
            Start your bookings quick...
          </p>
        </div>
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <img
              src={service.icon}
              alt=""
              className={`bg-[#FF77014D] w-18 h-18 rounded-full ${
                service.name === "Haircut" ? "p-[0.65rem]" : "p-4"
              }`}
            />
            <p className="text-xs">{service.name}</p>
          </div>
        ))}
        <div className="flex">
          <p className="text-xs">More</p>
          <img src={doublearrow} alt="" className="ml-2" />
        </div>
      </div>
    </div>
  ) : (
    <>
      {showNav && (
        <nav className="block md:hidden absolute top-0 left-0 bg-primaryColor text-white h-screen w-1/2">
          <hr />
          <ul className="px-4 py-4 mt-14">
            <li className="text-normal pb-4">
              <Link
                to="/dashboard"
                onClick={() => setShowNav(false)}
                className="flex gap-2"
              >
                <img src={dashboard} alt="" />
                Dashboard
              </Link>
            </li>
            <li className="text-normal pb-4">
              <Link
                to="/profile"
                onClick={() => setShowNav(false)}
                className="flex gap-2"
              >
                <img src={profile} alt="" />
                Profile
              </Link>
            </li>
            <li className="text-normal pb-4">
              <Link
                to="/bookings"
                onClick={() => setShowNav(false)}
                className="flex gap-2"
              >
                <img src={booking} alt="" />
                Bookings
              </Link>
            </li>
            <li className="text-normal pb-4">
              <Link
                to="/chat"
                onClick={() => setShowNav(false)}
                className="flex gap-2"
              >
                <img src={chat} alt="" />
                Chat
              </Link>
            </li>
            <li className="text-normal">
              <Link
                to="/favorites"
                onClick={() => setShowNav(false)}
                className="flex gap-2"
              >
                <img src={favorite} alt="" />
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div>
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center gap-6">
            <div
              className="block md:hidden cursor-pointer z-10"
              onClick={() => setShowNav(!showNav)}
            >
              <img src={menu} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Hello Becca 😊</h3>
              <p className="text-xs">What are you saying for today?</p>
            </div>
          </div>
          <div className="flex gap-6">
            <Link to="/notifications">
              <img src={notifications} alt="" />
            </Link>
            <Link to="/favorites">
              <img src={favorites} alt="" />
            </Link>
          </div>
        </div>
        <Link to="/search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="w-full border border-primaryColor rounded-lg text-xs px-4 py-2"
          />
        </Link>
        <h3 className="font-bold text-lg pt-10 text-black">Categories</h3>
        <div className="w-full justify-between flex">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <img
                src={service.icon}
                alt=""
                className={`bg-[#FF77014D] w-18 h-18 rounded-full ${
                  service.name === "Haircut" ? "p-[0.65rem]" : "p-4"
                }`}
              />
              <p className="text-xs text-black">{service.name}</p>
            </div>
          ))}
          <div className="flex items-center">
            <p className="text-xs">More</p>
            <img src={doublearrow} alt="" className="ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quicklinks;
