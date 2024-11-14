import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Forgot2 = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [seconds, setSeconds] = useState(59);
  const [disabled, setDisabled] = useState(false);
  const [resendText, setResendText] = useState("Resend Code");

  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);

    handleFormValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = code1 + code2 + code3 + code4;
  };

  const handleFormValidation = () => {
    if (
      code1.trim() !== "" &&
      code2.trim() !== "" &&
      code3.trim() !== "" &&
      code4.trim() !== ""
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          setResendText("Resend Code");
        }
        return Math.max(prevSeconds - 1, 0); // Ensures countdown doesn't go below 0
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-full flex justify-center md:items-center bg-primaryColor">
      <div className="gradient-overlay-login"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] p-10 md:p-20 mt-10 md:mt-0 bg-[#fff] rounded-xl flex flex-col items-center shadow-xl z-9 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl pb-20">
          Forgot Password
        </h3>

        <p className="text-primaryColor text-sm pb-6">
          Enter the code sent to your email
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="1"
              inputMode="numeric"
              value={code1}
              onChange={(e) => handleInputChange(e, setCode1)}
              className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${
                code1 !== "" ? "bg-red-200" : "bg-gray-200"
              }`}
            />
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="1"
              inputMode="numeric"
              value={code2}
              onChange={(e) => handleInputChange(e, setCode2)}
              className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${
                code2 !== "" ? "bg-red-200" : "bg-gray-200"
              }`}
            />
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="1"
              inputMode="numeric"
              value={code3}
              onChange={(e) => handleInputChange(e, setCode3)}
              className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 mr-2 text-center ${
                code3 !== "" ? "bg-red-200" : "bg-gray-200"
              }`}
            />
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="1"
              inputMode="numeric"
              value={code4}
              onChange={(e) => handleInputChange(e, setCode4)}
              className={`border w-16 h-16 px-4 py-2 rounded-lg mt-1 mb-2 text-center ${
                code4 !== "" ? "bg-red-200" : "bg-gray-200"
              }`}
            />
          </div>
          <Link to="/forgot3">
            <button
              type="submit"
              disabled={
                code1 === "" || code2 === "" || code3 === "" || code4 === ""
              }
              className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
                !disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-[#fff]"
              }`}
            >
              Continue
            </button>
          </Link>
        </form>

        <p className="text-primaryColor text-sm mt-12">
          {seconds > 0 ? `Resend code in ${seconds} seconds` : resendText}
        </p>
      </div>
    </div>
  );
};

export default Forgot2;
