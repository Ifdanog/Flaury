import { useState } from "react";
import forwardarrow from "/forwardarrow.svg";

const SettingsComponent = () => {
  const [page, setPage] = useState("");

  return (
    <>
      {page === "edit-profile" ? (
        <div>
          <form className="w-full md:w-[400px] mx-auto text-black">
            <div className="mt-8">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="gender">Gender</label>
              <select className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md">
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <button
              type="submit"
              className="transition bg-primaryColor text-white border text-xs w-full mt-10 py-3 rounded-lg font-semibold"
              onClick={() => setPage("")}
            >
              Select
            </button>
          </form>
        </div>
      ) : page === "change-password" ? (
        <div>
          <form className="w-full md:w-[400px] mx-auto text-black">
            <div className="mt-8">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                name="oldPassword"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                name="newPassword"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="transition bg-primaryColor text-white border text-xs w-full mt-10 py-3 rounded-lg font-semibold"
              onClick={() => setPage("")}
            >
              Save
            </button>
          </form>
          <button onClick={() => setPage("")}>Back</button>
        </div>
      ) : page === "change-phone-number" ? (
        <div>
          <form className="w-full md:w-[400px] mx-auto text-black">
            <div className="mt-8">
              <label htmlFor="oldPhoneNumber">Old Phone Number</label>
              <input
                type="number"
                name="oldPhoneNumber"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="newPhoneNumber">New Phone Number</label>
              <input
                type="number"
                name="newPhoneNumber"
                className="border border-1 border-primaryColor w-full block px-4 py-1 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="transition bg-primaryColor text-white border text-xs w-full mt-10 py-3 rounded-lg font-semibold"
              onClick={() => setPage("")}
            >
              Save
            </button>
          </form>
          <button onClick={() => setPage("")}>Back</button>
        </div>
      ) : (
        <>
          <div
            className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between p-6"
            onClick={() => setPage("edit-profile")}
          >
            <div className="flex items-center gap-4">
              <img src="/profileIcon.svg" alt="" className="rounded-md" />
              <div>
                <p className="text-black font-semibold text-sm">Edit Profile</p>
              </div>
            </div>
            <img src={forwardarrow} alt="" />
          </div>
          <div
            className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between p-6"
            onClick={() => setPage("change-password")}
          >
            <div className="flex items-center gap-4">
              <img
                src="/changePasswordIcon.svg"
                alt=""
                className="rounded-md"
              />
              <div>
                <p className="text-black font-semibold text-sm">
                  Change Password
                </p>
              </div>
            </div>
            <img src={forwardarrow} alt="" />
          </div>
          <div
            className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between p-6"
            onClick={() => setPage("change-phone-number")}
          >
            <div className="flex items-center gap-4">
              <img src="/phoneNumberIcon.svg" alt="" className="rounded-md" />
              <div>
                <p className="text-black font-semibold text-sm">
                  Change Phone Number
                </p>
              </div>
            </div>
            <img src={forwardarrow} alt="" />
          </div>
        </>
      )}
    </>
  );
};

export default SettingsComponent;
