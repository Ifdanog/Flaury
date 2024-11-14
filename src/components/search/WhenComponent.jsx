import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles for react-calendar

const WhenComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="block md:flex justify-between md:p-4">
      <div className="flex-1 md:mr-4">
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
      <div className="flex-1 mt-4 md:mt-0 md:ml-4">
        <h3 className="mb-4 text-lg font-semibold">Choose Time</h3>
        <form>
          <div className="grid grid-cols-2 gap-3">
            {[
              "7:00-8:00AM",
              "8:00-9:00AM",
              "9:00-10:00AM",
              "10:00-11:00AM",
              "1:00-2:00PM",
              "2:00-3:00PM",
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
          <button className="w-full mt-8 bg-primaryColor text-white border text-xs px-8 py-3 rounded-lg font-semibold">
            SCHEDULE
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhenComponent;
