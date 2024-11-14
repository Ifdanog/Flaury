import dot from "/dot.svg";
import star from "/star.svg";
import { Link } from "react-router-dom";

// Simulated backend data
const nearbySalons = [
  {
    id: 1,
    image: "/solfcare-salon.png",
    name: "Solfcare Salon",
    rating: 4.5,
    location: "Alagbaka, Akure",
    distance: "8km away",
    reviews: "1,286",
  },
  {
    id: 2,
    image: "/dubai-salon.png",
    name: "Dubai Executive Salon",
    rating: 4.5,
    location: "Ikorudu, Lagos",
    distance: "20km away",
    reviews: "1,286",
  },
  {
    id: 3,
    image: "/moonlight-salon.png",
    name: "Moonlight Spa",
    rating: 4.5,
    location: "Ikeja, Lagos",
    distance: "28km away",
    reviews: "1,286",
  },
  {
    id: 4,
    image: "/glams-salon.png",
    name: "Glams & More",
    rating: 4.5,
    location: "Bodija, Ibadan",
    distance: "20km away",
    reviews: "1,286",
  },
];

const NearbySalon = () => {
  return (
    <div className="my-6 px-4 md:px-14">
      <h3 className="font-bold text-lg py-2">Nearby Salon</h3>
      <div className="w-full overflow-x-scroll md:overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {nearbySalons.map((salon) => (
            <Link
              key={salon.id}
              to={`/salon/${salon.id}`}
              className="salon-link"
            >
              <div>
                <img src={salon.image} alt="" className="w-full  h-40" />
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <h4 className="font-semibold">{salon.name}</h4>
                    <img src="/salon-verified.svg" alt="" />
                  </div>
                  <p className="flex gap-1 text-xs">
                    {salon.rating}
                    <img src="/star.svg" alt="" />({salon.reviews})
                  </p>
                </div>
                <p className="flex text-xs text-[#000]">
                  {salon.location} <img src={dot} alt="" className="mx-2" />
                  {salon.distance}
                </p>
                <button className="transition bg-primaryColor text-white border text-xs mt-2 px-6 py-2 rounded-lg font-semibold">
                  Book now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbySalon;
