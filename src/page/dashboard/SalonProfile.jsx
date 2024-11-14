import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import About from "../../components/salonProfile/About";
import Reviews from "../../components/salonProfile/Reviews";
import Team from "../../components/salonProfile/Team";
import Service from "../../components/salonProfile/Service";
import Gallery from "../../components/salonProfile/Gallery";

const SalonProfile = () => {
  const [tab, setTab] = useState("service");
  const { id } = useParams();
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

  const salonData = {
    id: id,
    name: "Timeless Salon",
    description:
      "At Timeless Salon, we believe that beauty is not just akin deep, It's a reflection of your inner vitality. That's why our team of experienced professionals is...",
    coverPhoto: "/timelesssaloncoverimg.png",
    image: "/timelesssalonimg.png",
    services: [
      "Hair Treatment",
      "Hair Extension",
      "Hair Removal",
      "Hair Coloring",
      "Hair Styling",
    ],
    bookables: [
      { title: "Hair Conditioning", price: "20" },
      { title: "Hair Coloring", price: "50" },
      { title: "Hair Styling", price: "30" },
      { title: "Hair Extension", price: "40" },
    ],
    rating: 4.2,
    review: 1286,
    location: "Dora Hill, Camelot",
    distance: "20km away",
    time: "8:00pm",
    reviews: [
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
    ],
    teams: [
      { img: "/team-img.png", rating: "5.0" },
      { img: "/team-img.png", rating: "5.0" },
      { img: "/team-img.png", rating: "5.0" },
    ],
  };

  return (
    <div
      className={`${
        isSmallViewport && "px-4"
      } flex gap-8 text-primaryColor lg:pr-8`}
    >
      {!isSmallViewport && <SideNav />}
      <div className="container mx-auto">
        <div className="w-full">
          <img
            src={salonData.coverPhoto}
            alt={`${salonData.name} cover`}
            className="w-full h-[15rem] mt-20 object-cover"
          />
        </div>
        <div className="flex justify-between w-4/5 mx-auto my-4 text-black font-bold">
          <div
            onClick={() => setTab("service")}
            className={`cursor-pointer text-sm ${
              tab === "service" && "text-primaryColor underline"
            }`}
          >
            Service
          </div>
          <div
            onClick={() => setTab("gallery")}
            className={`cursor-pointer text-sm ${
              tab === "gallery" && "text-primaryColor underline"
            }`}
          >
            Gallery
          </div>
          <div
            onClick={() => setTab("reviews")}
            className={`cursor-pointer text-sm ${
              tab === "reviews" && "text-primaryColor underline"
            } `}
          >
            Reviews
          </div>
          <div
            onClick={() => setTab("team")}
            className={`cursor-pointer text-sm ${
              tab === "team" && "text-primaryColor underline"
            }`}
          >
            Team
          </div>
          <div
            onClick={() => setTab("about")}
            className={`cursor-pointer text-sm ${
              tab === "about" && "text-primaryColor underline"
            }`}
          >
            About
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-8">
          <div>
            <div className="flex gap-4 items-center">
              <img
                src={salonData.image}
                alt={`${salonData.name} logo`}
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-2xl font-bold">{salonData.name}</h1>
            </div>
            <div>
              <div className="flex mt-2 text-sm">
                <p className="flex font-bold">
                  {salonData.location}
                  <img src="/locationIconprimary.svg" className="mx-2" />
                  {salonData.distance}
                </p>
              </div>
              <p className="text-sm">Open till {salonData.time}</p>
              <span className="bg-[#ff780199] flex w-[9rem] mt-4 gap-2 text-xs rounded-lg px-3 py-1">
                <img src="/tag.svg" alt="" />
                SAVE UP TO 20%
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="mb-6 flex gap-2">
              <img src="/chaticon.svg" alt="" />
              Chat with us
            </p>
            <p className="flex gap-1 items-center text-sm">
              {salonData.rating} <img src="/star.svg" alt="star icon" />
              <img src="/dot.svg" alt="dot icon" /> ({salonData.review})
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <ul className="flex gap-4 justify-center mt-4">
          {salonData.services.map((service, index) => (
            <li
              key={index}
              className="bg-secondaryColor px-4 py-2 rounded-full text-sm"
            >
              {service}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          {tab === "service" && <Service salonData={salonData} />}
          {tab === "gallery" && <Gallery />}
          {tab === "reviews" && <Reviews salonData={salonData} />}
          {tab === "team" && <Team salonData={salonData} />}
          {tab === "about" && <About salonData={salonData} />}
        </div>
      </div>
    </div>
  );
};

export default SalonProfile;
