import React from "react";

const Reviews = ({ salonData }) => {
  return (
    <>
      <div className="w-2/3 mx-auto shadow-md text-black text-center py-10 rounded-lg">
        <h3 className="font-bold text-2xl mb-4">Your Review</h3>
        <p className="text-xs">How was your experience here?</p>
        <div className="flex justify-between w-1/3 my-4 mx-auto">
          <img src="/star.svg" alt="" className="w-6 h-6" />
          <img src="/star.svg" alt="" className="w-6 h-6" />
          <img src="/star.svg" alt="" className="w-6 h-6" />
          <img src="/star.svg" alt="" className="w-6 h-6" />
          <img src="/star.svg" alt="" className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-4 w-2/3 mx-auto mt-4">
          <input
            type="text"
            placeholder="Tell us about our service..."
            className="text-xs bg-gray-100 p-4 w-2/3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-primaryColor rounded-lg px-4 py-2"
          >
            <img src="/sendIcon.svg" alt="" />
          </button>
        </div>
      </div>
      <h3 className="font-bold text-black py-4">Other Reviews</h3>
      {salonData.reviews.map((review, index) => (
        <div key={index}>
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <img
                src={review.img}
                alt={`${review.name}`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-black text-sm">{review.name}</h4>
                <p className="text-xs text-gray-300">{review.time}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/star.svg" alt="" className="w-6" />
              {review.rating}
            </div>
          </div>
          <p className="text-sm mt-4 w-1/2">{review.text}</p>
          <hr className="my-6" />
        </div>
      ))}
    </>
  );
};

export default Reviews;
