import BookingHeader from "./BookingHeader";

const CBooking = ({ salonData, confirmOrders }) => {
  return (
    <div className="mt-10 md:mt-20 w-full px-4 md:px-0">
      <BookingHeader confirmOrders={confirmOrders} />
      <hr className="my-6 border border-primaryColor" />
      <div className="text-sm">
        <div className="flex gap-4 items-center">
          <img
            src={salonData.image}
            alt={`${salonData.name} logo`}
            className="w-8 h-8 rounded-full"
          />
          <h1>{salonData.name}</h1>
          <div className="bg-[#1b771b] flex gap-2 text-xs text-[#fff] rounded-lg px-3 py-1">
            <img src="/verified.svg" alt="" /> Verified
          </div>
        </div>
        <p>Face Make-Up</p>
        <p className="flex gap-2 text-xs">
          (Hair Styling, Spa, Facebeat )
          <p className="flex gap-1 items-center text-sm">
            {salonData.rating} <img src="/star.svg" alt="star icon" />
            <img src="/dot.svg" alt="dot icon" /> ({salonData.review})
          </p>
        </p>
        <div>
          <div className="flex mt-2 text-sm">
            <p className="flex">
              {salonData.location}
              <img src="/dot.svg" className="mx-2" />
              {salonData.distance}
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-center font-bold">Other Services</h3>
      <hr className="my-6 border border-primaryColor" />
      <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
        <label className="flex gap-6">
          <input
            type="radio"
            name="service"
            value="eyebrow-shaping-1"
            className="absolute top-4 right-4 w-4 h-4"
          />
          <img src="/timelesssalon.png" alt="" />
          <div>
            <p>
              Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
            </p>
            <p className="flex gap-4">
              Price: <span className="text-xs">$11.99</span>
            </p>
          </div>
        </label>
      </div>

      <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
        <label className="flex gap-6">
          <input
            type="radio"
            name="service"
            value="eyebrow-shaping-2"
            className="absolute top-4 right-4 w-4 h-4"
          />
          <img src="/timelesssalon.png" alt="" />
          <div>
            <p>
              Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
            </p>
            <p className="flex gap-4">
              Price: <span className="text-xs">$11.99</span>
            </p>
          </div>
        </label>
      </div>

      <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
        <label className="flex gap-6">
          <input
            type="radio"
            name="service"
            value="eyebrow-shaping-3"
            className="absolute top-4 right-4 w-4 h-4"
          />
          <img src="/timelesssalon.png" alt="" />
          <div>
            <p>
              Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
            </p>
            <p className="flex gap-4">
              Price: <span className="text-xs">$11.99</span>
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CBooking;
