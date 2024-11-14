import { useState } from "react";
import { Link } from "react-router-dom";
import forgotPassword from "/forgotpassword.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  // Function to check if all fields are filled
  const handleFormValidation = () => {
    if (email.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    handleFormValidation(); // Check form validation on every input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="h-screen w-full flex justify-center md:items-center bg-primaryColor">
      <div className="gradient-overlay-login"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] p-10 md:p-20 mt-10 md:mt-0 bg-[#fff] rounded-xl flex items-center flex-col shadow-xl z-9 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl pb-20">
          Forgot Password
        </h3>
        <img src={forgotPassword} alt="" />
        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="email" className="">
            Enter your registered email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
          />
          <Link to="/forgot2">
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-[#fff]"
              }`}
              disabled={disabled}
            >
              Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
