import Linkedin from "/linkedin.svg";
import Facebook from "/facebook.svg";
import Twitter from "/twitter.svg";
import Instagram from "/instagram.svg";
import Tiktok from "/tiktok.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-10 md:p-20 bg-[#E1D3D3] mt-20 text-primaryColor">
      <div className="md:grid grid-cols-6 gap-4">
        <div className="col-span-2 text-center md:text-left">
          <h2 className="font-bold text-3xl pb-2">FLAURY</h2>
          <p className="text-sm">
            "Take control of your beauty journey. Book appointments with ease
            and confidence."
          </p>
        </div>
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Support</h3>
          <ul>
            <li className="text-sm">Customer Service</li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Services</h3>
          <ul>
            <li className="text-sm">
              Become a freelancer with <b>Flaury</b>
            </li>
          </ul>
        </div>{" "}
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Company</h3>
          <ul>
            <li className="text-sm mb-2">
              <Link to="/about">About</Link>
            </li>
            <li className="text-sm mb-2">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-sm mb-2">Social Media</li>
          </ul>
        </div>
        <hr className="md:hidden border-primaryColor my-6" />
        <div>
          <h3 className="pb-6">Others</h3>
          <ul>
            <li className="text-sm mb-2">Partners</li>
            <li className="text-sm mb-2">Feedback</li>
            <li className="md:w-full mx-auto flex gap-4 justify-start my-4">
              <Link to="https://www.linkedin.com/in/flauryapp" target="_blank">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
                />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61561356925774"
                target="_blank"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
                />
              </Link>
              <Link
                to="https://www.x.com/flauryapp?t=nDxCPtZig-BKngT_1PG_pw&s-09"
                target="_blank"
              >
                <img
                  src={Twitter}
                  alt="twiiter"
                  className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
                />
              </Link>
              <Link
                to="https://www.instagram.com/flauryapp?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
                />
              </Link>
              <Link
                to="https://www.tiktok.com/@theflauryapp?_t=8nMZRykwygq&_r=1"
                target="_blank"
              >
                <img
                  src={Tiktok}
                  alt="tiktok"
                  className="w-[1.5rem] h-[1.5rem] md:w-[1rem] md:h-[1rem]"
                />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="md:hidden border-primaryColor my-6" />
      </div>
      <p className="text-sm text-center md:text-left">
        All rights reserved. @Flaury 2024
      </p>
    </footer>
  );
};

export default Footer;
