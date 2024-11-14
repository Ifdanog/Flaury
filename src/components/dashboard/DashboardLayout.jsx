import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo-white.svg";
import dashboard from "/dashboard.svg";
import profile from "/profile.svg";
import booking from "/booking.svg";
import chat from "/chat.svg";
import favorite from "/favorite.svg";
import MainNav from "../dashboard/MainNav";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Set sidebar open on LG screens, close on smaller screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setSidebarOpen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setSidebarOpen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      const userInfoData = localStorage.getItem("userInfo");
      const parsedUserInfoResponse = JSON.parse(userInfoData);

      setUserData(parsedUserInfoResponse);
    };

    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
    closeModal();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openMobileNav = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className={`flex h-screen overflow-hidden`}>
      {/* Sidebar */}
      <div
        className={`lg:w-272 p-4 bg-primaryColor text-white overflow-y-auto ${
          isSidebarOpen || window.innerWidth >= 1024 ? "" : "hidden lg:block"
        } transition-all ease-in-out duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          {/* Hamburger Menu */}
          <button
            type="button"
            onClick={() => toggleSidebar()}
            className="text-white focus:outline-none"
          >
            {/* <FontAwesomeIcon
              icon={faBars}
              className={text-white ${
                isSidebarOpen ? "pl-8" : "w-93 pl-4 pt-6"
              }}
            /> */}
          </button>

          {/* Logo */}
          <Link to="/dashboard">
            <img
              src={logo}
              alt="Logo"
              className={`w-14 mr-8 ${isSidebarOpen ? "block" : "hidden"}`}
            />
          </Link>
        </div>
        {/* Navigation */}

        <nav>
          <ul>
            <li className={`mb-5`}>
              <Link to="/dashboard">
                <div
                  className={`flex gap-3 py-2 lg:px-3 rounded-lg transition-all duration-300`}
                >
                  <img src={dashboard} alt="" />
                  {isSidebarOpen && "Dashboard"}
                </div>
              </Link>
            </li>

            <li className={`mb-5`}>
              <Link to="/profile">
                <div
                  className={`flex gap-3 py-2 lg:px-3 rounded-lg transition-all duration-300`}
                >
                  <img src={profile} alt="" />
                  {isSidebarOpen && "Profile"}
                </div>
              </Link>
            </li>

            <li className={`mb-5`}>
              <Link to="/bookings">
                <div
                  className={`flex gap-3 py-2 lg:px-3 rounded-lg transition-all duration-300`}
                >
                  <img src={booking} alt="" />
                  {isSidebarOpen && "Bookings"}
                </div>
              </Link>
            </li>

            <li className={`mb-5`}>
              <Link to="/chat">
                <div
                  className={`flex gap-3 py-2 lg:px-3 rounded-lg transition-all duration-300`}
                >
                  <img src={chat} alt="" />
                  {isSidebarOpen && "Chat"}
                </div>
              </Link>
            </li>

            <li className={`mb-5`}>
              <Link to="/favorites">
                <div
                  className={`flex gap-3 py-2 lg:px-3 rounded-lg transition-all duration-300`}
                >
                  <img src={favorite} alt="" />
                  {isSidebarOpen && "Favorites"}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="ml-10 pr-4">
          {/* <MainNav /> */}
          {children}
        </div>
      </div>

      {/* Mobile Navbar */}
      {/* <MobileNavbar
        isOpen={isMobileNavOpen}
        onClose={() => closeMobileNav()}
        navigationItems={navigationItems}
        onItemClick={(newPath) => {
          // You may want to navigate to the selected path using React Router
        }}
      /> */}
    </div>
  );
};

export default DashboardLayout;
