import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "/success.svg";
import config from "../../../utils/config";

const SignUp = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    handleFormValidation();
  }, [name, email, phoneNumber, password, confirmPassword, checkboxChecked]);

  const handleFormValidation = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.trim() !== "" && !passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      password.trim() !== "" &&
      passwordRegex.test(password) &&
      password === confirmPassword &&
      checkboxChecked
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }

    try {
      const response = await fetch(`${config.baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
          role: "Customer",
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Network response was not ok");
      }

      console.log("Sign up successful:", data);

      localStorage.setItem("savedUser", JSON.stringify(data));

      onLogin();
      toast.success("Sign up successful!");
      setShowPopup(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="lg:h-screen w-full flex justify-center items-center bg-primaryColor relative lg:overflow-hidden">
      <ToastContainer />
      <div className="gradient-overlay-signup absolute inset-0"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-0 p-10 md:px-20 md:py-10 bg-white md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Sign Up</h3>
        <p className="text-primaryColor text-sm pb-2">
          Register using your correct details
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="Phone-number" className="">
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            inputMode="numeric"
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1 mb-2">{passwordError}</p>
          )}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-sm mt-1 mb-2">
              Passwords do not match.
            </p>
          )}
          <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
              disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primaryColor text-white"
            }`}
            disabled={disabled}
          >
            Continue
          </button>
        </form>
        <p className="text-primaryColor text-sm mt-8 text-left">
          Already have an account?{" "}
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </p>
        <div className="flex gap-4 items-center justify-center mt-6">
          <input
            type="checkbox"
            id="tc"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            className="w-[1rem] h-[1rem]"
          />
          <p className="text-primaryColor text-sm w-2/3">
            Clicking the "continue" button means I agree to the terms and
            conditions of <b>FLAURY</b>
          </p>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-20">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src={success} alt="Success" className="mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-primaryColor">
              Congratulations
            </h3>
            <p className="mb-4 text-xs text-black">
              Your account is now ready to use. You will be redirected to your
              homepage shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
