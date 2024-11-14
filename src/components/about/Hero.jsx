import heroImg from "/about-hero-img.png";

const Hero = () => {
  return (
    <section className="md:flex justify-between items-center mt-20 px-4 md:px-20 py-10">
      <div className="lg:w-1/2">
        <h2 className="font-bold text-5xl md:text-6xl">
          Your <span className="text-primaryColor">beauty,</span> <br /> Our
          connection
        </h2>
        <h2 className="text-xl md:text-2xl mt-6 mb-10">
          We connect you to your beauty dreams in the most convenient way for
          you.
        </h2>
        <button className="transition bg-primaryColor text-white border text-xs px-8 py-4 rounded-lg font-semibold">
          Connect with us
        </button>
      </div>
      <img src={heroImg} alt="" className="h-[25rem] hidden lg:block" />
    </section>
  );
};

export default Hero;
