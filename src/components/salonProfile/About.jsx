import React from "react";

const About = ({ salonData }) => {
  return (
    <div className="text-black">
      <h3 className="font-bold">About</h3>
      <p className="text-xs">{salonData.description}</p>
      <div className="w-1/2 mt-4">
        <div className="flex justify-between mt-2 text-xs">
          <p>Monday</p>
          <p>9:00am-8:00pm</p>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <p>Tuesday</p>
          <p>9:00am-8:00pm</p>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <p>Wednesday</p>
          <p>9:00am-8:00pm</p>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <p>Thursday</p>
          <p>9:00am-8:00pm</p>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <p>Friday</p>
          <p>9:00am-8:00pm</p>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <p className="font-bold">Saturday</p>
          <p className="font-bold">9:00am-8:00pm</p>
        </div>
      </div>
      <hr className="my-4" />
      <h3 className="font-bold">Additional information</h3>
      <ul className="text-xs">
        <li className="my-2 flex gap-2">
          <img src="/tickIcon.png" alt="" />
          Instant confirmation
        </li>
        <li className="flex gap-2">
          <img src="/cardIcon.png" alt="" />
          Pay by app
        </li>
      </ul>
      <hr className="my-4" />
      <div className="flex gap-4">
        <div className="w-48 h-20 border"></div>
        <div className="text-xs">
          <p className="flex gap-2">
            {salonData.location}
            <img src="/locationIcondark.svg" />
            {salonData.distance}
          </p>
          <a href="#" className="text-primaryColor">
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
