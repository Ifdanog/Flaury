import heroImg from "/blog-hero-img.png";

const Hero = () => {
  return (
    <section className="lg:flex justify-between items-center mt-20 px-4 md:px-32 py-10">
      <img src={heroImg} alt="" className="h-[25rem] hidden lg:block" />
      <div className="lg:w-1/2 text-right">
        <h2 className="font-bold text-5xl md:text-6xl">
          <span className="text-primaryColor">Hair</span>-Ducation <br /> with{" "}
          <span className="text-primaryColor">Flaury</span>
        </h2>
        <h2 className="text-xl md:text-2xl mt-6 mb-10">
          Tips on the-go for your{" "}
          <span className="text-primaryColor">beauty</span> journey
        </h2>
        <form className="flex gap-3 justify-end">
          <input
            type="email"
            placeholder="Your email..."
            className="w-1/2 border px-4 py-3 rounded-lg"
          />
          <button className="transition bg-primaryColor text-white border text-xs px-8 py-4 rounded-lg font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
