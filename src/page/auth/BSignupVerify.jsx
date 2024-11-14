import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BSignupVerify = ({ setPage }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && uploadedImage) {
      // setPage("verification");
      setShowPopup(true);
      navigate("/dashboard");
      localStorage.setItem("userData", JSON.stringify({ role: "business" }));
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-primaryColor relative">
      <div className="gradient-overlay-signup absolute inset-0"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-10 p-10 md:px-20 md:py-10 bg-white md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Sign Up</h3>
        <p className="text-primaryColor text-sm pb-2">
          For the safety of our customers, you are required to submit either of
          these documents for verification.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="category">Verification Type</label>
          <select
            id="category"
            className="w-full border-b px-3 py-4 mb-4"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select Verification Type</option>
            <option value="nin">NIN</option>
            {/* Add more options as needed */}
          </select>
          {selectedCategory && (
            <>
              <label htmlFor="upload">Upload Verification Photo</label>
              <div className="bg-gray-100 w-full h-40 flex justify-center items-center mb-4">
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                  required
                />
                <label
                  htmlFor="upload"
                  className="text-gray-300 cursor-pointer"
                >
                  {uploadedImage ? (
                    uploadedImage.name
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <img src="/camera.svg" />
                      Upload verification photo
                    </div>
                  )}
                </label>
              </div>
            </>
          )}
          <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
              !selectedCategory || !uploadedImage
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primaryColor text-white"
            }`}
            disabled={!selectedCategory || !uploadedImage}
          >
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-10">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src="/success.svg" alt="Success" className="mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-primaryColor">Successful!</h3>
            <p className="mb-4 text-xs text-black">
              You have successfully created your account.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BSignupVerify;
