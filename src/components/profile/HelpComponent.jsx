import forwardarrow from "/forwardarrow.svg";

const HelpComponent = () => {
  return (
    <>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between px-4 py-8">
        <div className="flex gap-4 items-center">
          <img src="/dot.svg" alt="" className="w-2" />
          <p className="text-black font-semibold text-sm">Work with us</p>
        </div>
        <img src={forwardarrow} alt="" />
      </div>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between px-4 py-8">
        <div className="flex gap-4 items-center">
          <img src="/dot.svg" alt="" className="w-2" />
          <p className="text-black font-semibold text-sm">Verify my account</p>
        </div>
        <img src={forwardarrow} alt="" />
      </div>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between px-4 py-8">
        <div className="flex gap-4 items-center">
          <img src="/dot.svg" alt="" className="w-2" />
          <p className="text-black font-semibold text-sm">Policies</p>
        </div>
        <img src={forwardarrow} alt="" />
      </div>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between px-4 py-8">
        <div className="flex gap-4 items-center">
          <img src="/dot.svg" alt="" className="w-2" />
          <p className="text-black font-semibold text-sm">Account details</p>
        </div>
        <img src={forwardarrow} alt="" />
      </div>
      <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between px-4 py-8">
        <div className="flex gap-4 items-center">
          <img src="/dot.svg" alt="" className="w-2" />
          <p className="text-black font-semibold text-sm">Contact us</p>
        </div>
        <img src={forwardarrow} alt="" />
      </div>
    </>
  );
};

export default HelpComponent;
