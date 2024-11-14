import React, { useState, useEffect } from "react";
import Overview from "../../components/dashboard/Overview";
import BOverview from "../../components/dashboard/BOverview";
import SideNav from "../../components/dashboard/SideNav";
import earth from "/earth.svg";

const Dashboard = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [showPopup, setShowPopup] = useState(true);
  const [locationObtained, setLocationObtained] = useState(false);
  const savedUserData = localStorage.getItem("userData");
  const roleData = JSON.parse(savedUserData).role;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sessionStorage.setItem("location", `${latitude} ${longitude}`);

          setLocationObtained(true);
          setShowPopup(false);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSetLater = () => {
    setShowPopup(false); // Close the popup if 'Set Later' is clicked
  };

  // Check if location is already obtained, if so, hide the popup
  useEffect(() => {
    if (sessionStorage.getItem("location")) {
      setShowPopup(false);
    }
  }, [locationObtained]);

  return (
    <div className="flex gap-8 text-primaryColor">
      {roleData === "business" ? <BOverview /> : <Overview />}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-4/5 md:w-[35%] py-8 px-10 md:px-20 rounded-lg shadow-lg text-center">
            <img src={earth} alt="" className="mx-auto mb-4" />
            <h3 className="font-semibold mb-4 text-black">Where are you?</h3>
            <p className="mb-4 text-xs text-black">
              Set your location so that we can match you with services around
              you.
            </p>
            <button
              className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold w-full mb-4"
              onClick={handleUseCurrentLocation}
            >
              Use Current Location
            </button>
            <button
              className="transition bg-lightPrimaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold opacity-50 w-full"
              onClick={handleSetLater}
            >
              Set Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
