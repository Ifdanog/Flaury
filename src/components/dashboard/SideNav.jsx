import { Link } from "react-router-dom";
import logo from "/logo-white.svg";
import dashboard from "/dashboard.svg";
import profile from "/profile.svg";
import booking from "/booking.svg";
import chat from "/chat.svg";
import favorite from "/favorite.svg";

const SideNav = () => {
  return (
    <nav className="bg-primaryColor w-1/4 text-white flex flex-col items-center">
      <div className="fixed">
        <Link to="/dashboard">
          <img src={logo} alt="" className="my-4 ml-[40%] w-14 h-14" />
        </Link>
        <ul className="h-screen p-10 flex flex-col justify-start">
          <li className="pb-6">
            <Link to="/dashboard" className="flex gap-2">
              <img src={dashboard} alt="" />
              Dashboard
            </Link>
          </li>
          <li className="pb-6 flex gap-2">
            <Link to="/profile" className="flex gap-2">
              <img src={profile} alt="" />
              Profile
            </Link>
          </li>
          <li className="pb-6 flex gap-2">
            <Link to="/bookings" className="flex gap-2">
              <img src={booking} alt="" />
              Bookings
            </Link>
          </li>
          <li className="pb-6 flex gap-2">
            <Link to="/chat" className="flex gap-2">
              <img src={chat} alt="" />
              Chat
            </Link>
          </li>
          <li className="pb-6 flex gap-2">
            <Link to="/favorites" className="flex gap-2">
              <img src={favorite} alt="" />
              Favorite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
