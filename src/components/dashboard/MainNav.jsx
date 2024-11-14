import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import notifications from "/notifications.svg";
import settings from "/settings.svg";
import favorites from "/favorites.svg";
import profilepicture from "/profilepicture.png";
import search from "/search.svg";
import backarrow from "/backarrow.svg";

const MainNav = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="w-full bg-white">
        <ul className="w-3/4 h-20 flex gap-4 justify-between items-center absolute right-10">
          <li>
            <Link
              to={
                location.pathname === "/search"
                  ? "/dashboard"
                  : "/notifications"
              }
              className="relative"
            >
              {location.pathname === "/search" ? (
                <img src={backarrow} alt="" />
              ) : (
                <img src={notifications} alt="" />
              )}
              {location.pathname !== "/search" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#f00] rounded-full"></div>
              )}
            </Link>
          </li>
          <li className="flex gap-4 items-center">
            <Link
              to="/search"
              className="w-[25rem] mx-auto flex items-center border border-primaryColor rounded-lg overflow-hidden bg-white"
            >
              <div className="px-2">
                <img src={search} alt="" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a service"
                className="w-[25rem] mx-auto px-4 py-2 text-sm text-primaryColor placeholder-primaryColor"
              />
            </Link>
            <img
              src="/filter.svg"
              alt=""
              onClick={() => setShowPopup(true)}
              className="cursor-pointer"
            />
          </li>
          <li className="flex gap-8">
            <Link to="#">
              <img src={settings} alt="" />
            </Link>
            <Link to="/favorites">
              <img src={favorites} alt="" />
            </Link>
            <Link to="/profile" className="flex items-center gap-2">
              <p className="text-xs">Becca Adom</p>
              <img src={profilepicture} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-[90%] md:w-[50%] border py-8 px-4 md:px-10 rounded-lg shadow-lg text-center relative">
            <p
              className="cursor-pointer absolute top-4 left-4"
              onClick={() => setShowPopup(false)}
            >
              <img src="/close.svg" />
            </p>
            <h3 className="font-semibold mb-4 text-black">Filter</h3>
            <select className="border border-1 border-primaryColor w-full rounded-full text-xs px-4 py-2">
              <option value="location">Select Location</option>
            </select>
            <h3 className="text-left mt-4">Categories</h3>
            <div className="flex gap-3 my-4">
              {["All", "Makeup", "Spa", "Manicure"].map((label) => (
                <button
                  key={label}
                  className={`border text-xs px-4 py-1 rounded-full ${
                    label === "All"
                      ? "bg-primaryColor text-white border-primaryColor"
                      : "text-primaryColor border-primaryColor"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <h3 className="text-left mt-4">Rating</h3>
            <div className="flex gap-3 my-4">
              {["All", "5", "4", "3", "2"].map((label) => (
                <button
                  key={label}
                  className={`border text-xs px-4 py-1 rounded-full ${
                    label === "All"
                      ? "bg-primaryColor text-white border-primaryColor"
                      : "text-primaryColor border-primaryColor"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="w-4/5 flex justify-between items-center text-center mx-auto">
              <button
                type="button"
                className="font-bold py-2 px-8 bg-secondaryColor text-primaryColor mt-4 text-sm rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Reset
              </button>
              <button
                type="button"
                className="font-bold py-2 px-8 bg-primaryColor text-white mt-4 text-sm rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
