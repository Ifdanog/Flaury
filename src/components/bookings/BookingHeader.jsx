import React from "react";

const BookingHeader = ({ confirmOrders }) => {
  return (
    <div className="block md:flex w-full gap-4">
      <img
        src="/timelesssaloncoverimg.png"
        alt=""
        className="w-full md:w-1/2"
      />
      <div className="w-full md:w-1/2">
        <h3 className="font-bold">Hair Treatment</h3>
        <div className="flex gap-4 mt-3">
          <p>Description:</p>
          <p className="text-xs text-black ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, vel
            iusto. Reprehenderit, vero, repellendus quas officia expedita modi
            est veniam sunt maxime autem, facere quod adipisci fugit assumenda
            architecto quibusdam.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <p>Start price:</p>
          <p className="text-xs text-gray-400 line-through">$70.00</p>
          <p>$49.99</p>
        </div>
        <div className="flex gap-4 mt-3">
          <p>Time of event:</p>
          <p className="border-b text-sm font-semibold">
            <span className="text-xs pr-2 text-gray-400">From:</span>
            7:30am
          </p>
          <p className="border-b text-sm font-semibold">
            <span className="text-xs pr-2 text-gray-400">To:</span>
            5:30pm
          </p>
        </div>
        <button
          className="bg-primaryColor text-white w-full rounded-md py-2 mt-4"
          onClick={confirmOrders}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingHeader;
