import img from "/about-img6.png";

const Introflauryb = () => {
  return (
    <section className="lg:flex justify-between items-center gap-20 py-20 px-4 md:px-20">
      <div>
        <h3 className="font-bold text-primaryColor text-4xl py-6">
          Introduction: Flaury Business
        </h3>
        <div className="text-black font-medium">
          <p className="mb-6">Do you have a skill for beauty enthusiasts?</p>
          <p className="mb-6">
            We’re also a haven for professionals in the beauty industry looking
            to expand their reach. Register with us and earn more by bringing
            your artistry to our clientele
          </p>
          <p className="mb-6">
            Quality matters to us, and we're always looking for dedicated
            professionals to join us in delivering exceptional beauty services.
          </p>
          <ul className="list-disc px-4">
            <li>Increased visibility</li>
            <li>Income growth</li>
            <li>Simplified booking</li>
            <li>Revenue tracking</li>
            <li>Professional networking</li>
          </ul>
          <button className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold mt-10">
            Join Flaury Business
          </button>
        </div>
      </div>

      <img src={img} alt="" className="w-full mt-10 lg:mt-0" />
    </section>
  );
};

export default Introflauryb;
