import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SideNav from "../../components/dashboard/SideNav";

const BookingsFlow = ({ onDateChange }) => {
  const [page, setPage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(""); // State for payment method

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="w-full px-4 md:px-0">
        <div className="block mt-20 max-w-[800px] mx-auto justify-between md:p-4">
          {page === "payment" ? (
            <>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Est, vel iusto. Reprehenderit, vero, repellendus quas
                      officia expedita modi est veniam sunt maxime autem, facere
                      quod adipisci fugit assumenda architecto quibusdam.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <p>Time</p>
                    <p className="border-b text-sm font-semibold">
                      <span className="text-xs pr-2 text-gray-400">From:</span>
                      7:30am
                    </p>
                    <p className="border-b text-sm font-semibold">
                      <span className="text-xs pr-2 text-gray-400">To:</span>
                      5:30pm
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <p>Start price:</p>
                    <p className="text-xs text-gray-400 line-through">$70.00</p>
                    <p>$49.99</p>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <p>Total Pay:</p>
                    <p>$49.99</p>
                  </div>
                </div>
              </div>
              <div className="block md:flex text-primaryColor">
                <div className="w-1/2"></div>
                <div className="w-full md:w-1/2 text-center">
                  <hr className="my-4" />
                  <h3 className="font-bold">Payment Methods</h3>
                  {paymentMethod === "" && (
                    <div className="flex gap-4">
                      <img src="/payment.svg" alt="" />
                      <select
                        name="payment"
                        id="payment"
                        className="border-b w-full"
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                      >
                        <option value="">Select Payment Method</option>
                        <option value="card">Card</option>
                      </select>
                    </div>
                  )}
                  {paymentMethod === "card" && (
                    <form className="bg-gray-200 rounded-md p-6">
                      <label>Card Number</label>
                      <input
                        type="number"
                        name="card-number"
                        placeholder="Please enter your card number"
                        className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
                      />
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="grid col-span-1">
                          <label>Expiry date</label>
                          <input
                            type="number"
                            name="expiry-date"
                            className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
                          />
                        </div>
                        <div className="grid col-span-2">
                          <label>CVV</label>
                          <input
                            type="number"
                            name="cvv"
                            placeholder="Enter your cvv"
                            className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="text-left mt-6">
                        <label>PIN</label>
                        <input
                          type="number"
                          name="pin"
                          placeholder="Enter your PIN"
                          className="border border-1 border-primaryColor block px-4 py-1 rounded-md"
                        />
                      </div>
                    </form>
                  )}
                  {paymentMethod === "" && (
                    <div className="flex gap-4">
                      <input
                        type="text"
                        className="border-b w-full mt-14"
                        placeholder="Enter Coupon code"
                      />
                    </div>
                  )}
                  <button
                    className="w-full mt-8 bg-primaryColor text-white border text-xs px-8 py-3 rounded-lg font-semibold"
                    onClick={() => setPage("completed")}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          ) : page === "completed" ? (
            <>
              <h2 className="text-4xl font-bold text-primaryColor text-center pb-10">
                Service Booking Completed
              </h2>
              <div className="block md:flex gap-8 text-primaryColor">
                <img
                  src="/timelesssaloncoverimg.png"
                  alt=""
                  className="w-full md:w-1/2"
                />
                <div>
                  <div className="flex">
                    <div>
                      <h3 className="text-2xl font-bold">Timeless Salon</h3>
                      <p>Location: Dome Hills, Idan</p>
                      <p>ID: 11E72B8JAE5</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p>Hair Treatment</p>
                    <div>
                      <p>Date: August 23, 2023</p>
                      <p>Time: 10:00PM - 1:00PM</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p>Scan Barcode</p>
                  </div>
                </div>
              </div>
              <Link to="/dashboard">
                <button className="w-full md:w-1/2 mt-8 bg-primaryColor text-white border text-xs px-8 py-3 rounded-lg font-semibold">
                  Book more services
                </button>
              </Link>
            </>
          ) : (
            <div className="block max-w-[500px] mx-auto justify-between md:p-4">
              <div className="flex-1">
                <h3 className="mb-4 text-lg font-semibold">Select Date</h3>
                <div className="w-full bg-[#8B3E0090] border rounded-md p-2">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="w-full bg-transparent border-none p-2"
                  />
                  <div className="flex gap-4 mt-4">
                    <button className="bg-white text-primaryColor text-xs px-8 py-3 rounded-lg font-semibold">
                      Cancel
                    </button>
                    <button className="bg-primaryColor text-white text-xs px-8 py-3 rounded-lg font-semibold">
                      Select Date
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center px-10 mt-4">
                <h3 className="mb-4 text-lg font-semibold">Choose Time</h3>
                <form>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "7:00-8:00AM",
                      "8:00-9:00AM",
                      "9:00-10:00AM",
                      "11:00-12:00PM",
                      "Custom Time",
                    ].map((time) => (
                      <div
                        key={time}
                        onClick={() => handleTimeClick(time)}
                        className={`px-6 py-2 border border-gray-200 rounded-md text-center cursor-pointer ${
                          selectedTime === time
                            ? "bg-primaryColor text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full mt-8 bg-primaryColor text-white border text-xs px-8 py-3 rounded-lg font-semibold"
                    onClick={() => setPage("payment")}
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsFlow;
