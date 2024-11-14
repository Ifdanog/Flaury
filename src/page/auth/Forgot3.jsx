import { useState } from "react";
import { Link } from "react-router-dom";

const Forgot3 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // Function to check if all fields are filled
  const handleFormValidation = () => {
    if (
      (password.trim() !== "" && confirmPassword.trim() !== "") ||
      checkboxChecked
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
    handleFormValidation(); // Check form validation on every input change
  };

  // Function to handle changes in the checkbox
  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
    handleFormValidation(); // Check form validation on checkbox change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      // Prevent form submission if button is disabled
      return;
    }
    // Your form submission logic here
  };

  return (
    <div className="h-screen lg:h-full w-full flex justify-center items-center bg-primaryColor">
      <div className="gradient-overlay-signup h-[100%] md:h-[120%]"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] p-10 md:p-20 bg-[#fff] rounded-xl flex items-center flex-col shadow-xl z-9 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">
          Create Password
        </h3>
        <p className="text-primaryColor text-sm pb-2">
          Register using your correct details
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="password" className="">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="password" className="">
            Confirm Password
          </label>
          <input
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />

          <div className="flex gap-4 items-center justify-center">
            <input
              type="checkbox"
              name="t&c"
              id="tc"
              checked={rememberMe}
              onChange={handleCheckboxChange}
              className="w-[1.5rem] h-[1.5rem]"
            />
            <p className="text-primaryColor text-sm">Remember me</p>
          </div>

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
        </form>

        <p className="text-primaryColor text-sm mt-8 text-left">
          Already have an account?{" "}
          <Link to="/login" className="font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forgot3;
