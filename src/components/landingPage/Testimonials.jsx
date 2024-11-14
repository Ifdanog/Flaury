import React, { useState } from "react";
import arrowLeft from "/arrowLeft-brown.svg";
import arrowRight from "/arrowRight-brown.svg";

// Simulated data from backend
const testimonialsData = [
  {
    id: 1,
    image: "/customer1.png",
    text: "Scheduling my appointments has never been easier. The app is user-friendly, and I love that I can read reviews before booking. My favorite part is the convenience of booking last-minute appointments without any hassle",
  },
  {
    id: 2,
    image: "/customer2.png",
    text: "FLAURY has simplified my booking process and allowed me to focus more on my clients. The automated reminders have reduced the number of missed appointments, and I love how easy it is to manage my schedule. It's been a great tool for growing my business and providing better service to my clients.",
  },
];

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const container = document.getElementById("services-container");
    if (container) {
      const newPosition = scrollPosition - 300;
      setScrollPosition(newPosition >= 0 ? newPosition : 0);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("services-container");
    if (container) {
      const newPosition = scrollPosition + 300;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollPosition(newPosition <= maxScroll ? newPosition : maxScroll);
      container.scrollTo({
        left: newPosition <= maxScroll ? newPosition : maxScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-10 px-4 lg:px-20">
      <h3 className="text-primaryColor font-semibold text-xl text-center py-4">
        What Our Customers Are Saying
      </h3>
      <div className="relative flex gap-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-1 lg:flex bg-secondaryColor lg:bg-primaryColor text-primaryColor lg:text-white items-center"
          >
            <img src={testimonial.image} alt="" className="w-full" />
            <div className="px-2 py-2 lg:py-0 lg:px-10 text-xs lg:text-normal">
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
        <button
          onClick={scrollLeft}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full px-4 py-[0.8rem] border border-primaryColor"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-secondaryColor rounded-full px-4 py-[0.8rem] border border-primaryColor"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
