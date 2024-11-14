import React, { useState } from "react";

const PaymentComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const deletePopup = () => {
    setShowDeletePopup(true);
  };
  return (
    <>
      <div className="w-[200px] mx-auto mt-8">
        <button
          className="border border-dashed mx-auto w-full py-2 rounded-md text-black text-xs font-semibold"
          onClick={() => setShowPopup(true)}
        >
          Add payment card
        </button>
      </div>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between items-center p-4">
        <div className="flex gap-8">
          <img src="/settings.svg" alt="" />
          <h2>**** **** **** 2765</h2>
        </div>
        <img
          src="/delete.svg"
          alt=""
          className="cursor-pointer"
          onClick={deletePopup}
        />
      </div>
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-4/5 md:w-[45%] py-8 px-20 rounded-lg shadow-lg text-center">
            <h3 className="font-bold mb-4 text-black">
              Delete Payment Method?
            </h3>
            <p className="font-semibold text-xs text-black">
              It will no longer be available for payments. <br /> Are you sure
              you want to delete?
            </p>
            <button
              className="font-bold border border-primaryColor px-4 py-2 rounded-md w-full mt-6 text-[#ff0000] text-xs"
              onClick={() => setShowDeletePopup(false)}
            >
              Delete
            </button>
            <button
              className="font-bold bg-primaryColor px-4 py-2 rounded-md w-full mt-6 text-white text-xs"
              onClick={() => setShowDeletePopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-4/5 md:w-[45%] py-8 px-10 md:px-20 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold mb-4 text-black">
              Add Payment Option
            </h3>
            <form>
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
              <button
                className="font-bold bg-lightPrimaryColor px-4 py-2 rounded-md w-full mt-6 text-white opacity-70"
                onClick={() => setShowPopup(false)}
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentComponent;
