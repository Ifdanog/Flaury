import image from "/image 1014.png";

const Features2 = () => {
  return (
    <section className="bg-[#FFC951] mt-20 pb-10">
      <div className="lg:flex items-center justify-center">
        <img src={image} alt="" className="h-full" />
        <div className="text-primaryColor px-16">
          <p className="text-sm py-6">
            With <b className="text-3xl">FLAURY</b>, you have the power to
          </p>
          <ol className="list-decimal list-inside text-sm lg:w-2/3">
            <li className="mb-4">
              "Transform your beauty routine with our streamlined appointment
              booking process."
            </li>
            <li className="mb-4">
              "Effortlessly schedule your next beauty transformation with our
              booking system."
            </li>
            <li className="mb-4">
              "Say goodbye to waiting! Book your beauty appointments
              hassle-free."
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Features2;
