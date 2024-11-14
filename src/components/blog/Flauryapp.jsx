import logo from "/logo-white-complete.png";
import leftmoon from "/leftmoon.svg";
import rightmoon from "/rightmoon.svg";
import semicircle from "/semi-circle.png";
import iphone from "/iphone15.png";
import transparentapple from "/transparent-apple.png";
import transparentplay from "/transparent-play.png";

const Flauryapp = () => {
  return (
    <section className="px-4 md:px-20">
      <div className="bg-primaryColor relative md:flex justify-between items-center px-4 lg:px-20 pt-10 md:pt-0 rounded-lg overflow-hidden">
        <img src={rightmoon} alt="" className="absolute left-0" />
        <img
          src={semicircle}
          alt=""
          className="hidden md:block absolute -top-10 right-20 -z-9"
        />
        <img src={leftmoon} alt="" className="absolute right-0" />
        <div className="text-white text-center md:text-left">
          <img src={logo} alt="" className="mx-auto md:mx-0" />
          <h4 className="text-xl font-bold my-6">
            Your beauty, Our connection
          </h4>
          <p className="text-xs my-6 w-4/5 mx-auto md:mx-0 lg:mx-0">
            We connect you to your beauty dreams in the most convenient way for
            you.
          </p>
          <div className="md:flex lg:gap-4 mx-auto md:mx-0">
            <img src={transparentplay} alt="" className="w-[13rem] mx-auto" />
            <img
              src={transparentapple}
              alt=""
              className="w-[13rem] mt-4 md:mt-0 mx-auto"
            />
          </div>
        </div>
        <img
          src={iphone}
          alt=""
          className="w-[12rem] izIndex lg:mr-24 mt-6 mx-auto"
        />
      </div>
    </section>
  );
};

export default Flauryapp;
