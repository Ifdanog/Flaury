import dot from "/dot.svg";
import star from "/star.svg";
import hairstyling from "/hairstyling.png";
import haircut from "/haircut.png";
import massage from "/massage.png";
import perfume from "/perfume.png";
import { Link } from "react-router-dom";

// Simulated backend data
const nearbySalons = [
  {
    id: 1,
    image: hairstyling,
    name: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 2,
    image: haircut,
    name: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 3,
    image: massage,
    name: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
  {
    id: 4,
    image: perfume,
    name: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
  },
];

const NearbySalon = () => {
  return (
    <div className="my-6 ">
      <h3 className="font-bold text-lg py-2">Nearby Salon</h3>
      <div className="w-[100%] md:w-full overflow-x-scroll md:overflow-x-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {nearbySalons.map((salon) => (
            <Link
              key={salon.id}
              to={`/salon/${salon.id}`}
              className="salon-link"
            >
              <div>
                <img src={salon.image} alt="" className="w-full" />
                <h4 className="font-semibold">{salon.name}</h4>
                <p className="flex text-xs text-[#000]">
                  {salon.services.join(", ")}{" "}
                  <img src={dot} alt="" className="mx-2" />
                  <img src={star} alt="" /> {salon.rating}
                </p>
                <p className="flex text-xs text-[#000]">
                  {salon.location} <img src={dot} alt="" className="mx-2" />
                  {salon.distance}
                </p>
              </div>
              <button className="transition bg-primaryColor text-white border text-xs mt-2 px-6 py-2 rounded-lg font-semibold">
                Book now
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbySalon;
