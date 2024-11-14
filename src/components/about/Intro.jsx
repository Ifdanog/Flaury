import img from "/about-img1.jpg";

const Intro = () => {
  return (
    <section className="px-4 md:px-20">
      <div className="lg:bg-[#F8F4D973] lg:flex justify-between items-center gap-20 py-10 md:pr-10">
        <img src={img} alt="" className="w-full" />
        <div className="text-black font-medium mt-10 lg:mt-0">
          <p className="mb-6">
            Flaury was born out of a vision to bridge the gap for beauty lovers
            who require{" "}
            <b className="text-primaryColor">
              timely access to beauty services
            </b>{" "}
            wherever they may be.
          </p>
          <p className="mb-6">
            We are determined to bring convenience and excellence to the world
            of beauty. We believe in empowering you to be the best version of
            yourself because, beauty isn't just about how you look but how you
            feel.
          </p>
          <p className="mb-6">
            The Flaury app allows you to rekindle your beauty routine with an
            offering that’s tailored to your convenience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
