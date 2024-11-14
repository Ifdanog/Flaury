import React, { useState } from "react";

const initialBookingsData = [
  {
    id: 1,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 2,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 3,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 4,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 5,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 6,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 7,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 8,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 9,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 10,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 11,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 12,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 13,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 14,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 15,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 16,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 17,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 18,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 19,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 20,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 21,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
  {
    id: 22,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: false,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "upcoming",
  },
  {
    id: 23,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: true,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "completed",
  },
  {
    id: 24,
    date: "Jan 14, 2024-10:10AM",
    isRemindMe: true,
    img: "/timelessrecommended.png",
    name: "Timeless Salon",
    location: "Idan Hills",
    description: "This is a placeholder for booked services",
    status: "cancelled",
  },
];

const BBooking = () => {
  const [tab, setTab] = useState("upcoming");
  const [bookings, setBookings] = useState(initialBookingsData);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredBookings = bookings.filter((booking) => booking.status === tab);

  const toggleRemindMe = (id) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id
          ? { ...booking, isRemindMe: !booking.isRemindMe }
          : booking
      )
    );
  };

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setIsPopupOpen(true);
    setIsSuccess(false);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setSelectedBooking(null);
    setIsSuccess(false);
  };

  const handlePopupConfirm = () => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== selectedBooking.id)
    );
    setIsSuccess(true);
  };

  return (
    <div className="md:mt-20 w-full px-4 md:px-0">
      <h3 className="font-bold text-2xl py-8">Bookings</h3>
      <div className="w-2/3 mx-auto flex justify-between items-center">
        <p
          className={`${
            tab === "upcoming" ? "text-primaryColor underline" : "text-black"
          } cursor-pointer font-semibold`}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </p>
        <p
          className={`${
            tab === "completed" ? "text-primaryColor underline" : "text-black"
          } cursor-pointer font-semibold`}
          onClick={() => setTab("completed")}
        >
          Completed
        </p>
        <p
          className={`${
            tab === "cancelled" ? "text-primaryColor underline" : "text-black"
          } cursor-pointer font-semibold`}
          onClick={() => setTab("cancelled")}
        >
          Cancelled
        </p>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 px-10 py-6 border">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="relative m-2">
              <div className="flex justify-between items-center">
                <p className="text-xs">{booking.date}</p>
                {booking.status === "completed" ? (
                  <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">
                    Completed
                  </span>
                ) : booking.status === "cancelled" ? (
                  <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                    Cancelled
                  </span>
                ) : (
                  <>
                    <div className="flex gap-3 items-center">
                      <div className="text-xs">Remind Me</div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={booking.isRemindMe}
                            onChange={() => toggleRemindMe(booking.id)}
                          />
                          <div
                            className={`block w-10 h-6 rounded-full ${
                              booking.isRemindMe
                                ? "bg-primaryColor"
                                : "bg-gray-300"
                            }`}
                          ></div>
                          <div
                            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
                              booking.isRemindMe
                                ? "transform translate-x-full"
                                : ""
                            }`}
                          ></div>
                        </div>
                      </label>
                    </div>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={booking.img}
                  alt={booking.name}
                  className="w-full object-cover rounded"
                />
                <div>
                  <h4 className="font-bold text-lg mt-2">{booking.name}</h4>
                  <p className="text-xs">{booking.location}</p>
                  <p className="text-xs">{booking.description}</p>
                </div>
              </div>
              {booking.status === "completed" ? (
                <button className="text-primaryColor border border-primaryColor w-full rounded-full py-2 mt-4">
                  View receipt
                </button>
              ) : booking.status === "cancelled" ? null : (
                <div className="flex gap-4 items-center">
                  <button
                    className="text-primaryColor border border-primaryColor w-full rounded-full py-2 mt-4"
                    onClick={() => handleCancelClick(booking)}
                  >
                    Cancel booking
                  </button>
                  <button className="bg-primaryColor text-white w-full rounded-full py-2 mt-4">
                    View receipt
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No bookings found</p>
        )}
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-4/5 md:w-[35%] py-8 px-6 md:px-14 rounded-lg shadow-lg text-center relative">
            <img
              src="/close.svg"
              alt=""
              className="absolute top-4 left-4 cursor-pointer"
              onClick={handlePopupClose}
            />
            {isSuccess ? (
              <div>
                <img src="/success.svg" alt="" className="mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Successful!</h3>
                <p className="text-black">
                  You have successfully cancelled your order and we'd refund to
                  your wallet soonest.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-4">Cancel Booking</h3>
                <p>Are you sure you want to cancel your booking?</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-secondaryColor text-primaryColor px-4 py-2 rounded"
                    onClick={handlePopupClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-primaryColor text-white px-4 py-2 rounded"
                    onClick={handlePopupConfirm}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BBooking;
