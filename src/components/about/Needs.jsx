import img from "/about-img2.png";

const Needs = () => {
  return (
    <section className="lg:flex justify-between items-center gap-20 py-20 px-4 md:px-20">
      <img src={img} alt="" className="w-full block lg:hidden" />
      <div>
        <h3 className="font-bold text-4xl py-6">Addressing Your Needs</h3>
        <div className="text-black font-medium">
          <p className="mb-6">
            Achieving <b className="text-primaryColor">beauty goals </b>
            shouldn’t be limited by time or distance. We are here to make it
            effortless for you. Look and feel your best
            <b className="text-primaryColor"> any time, any place, </b>
            with the seamless integration of our app for you.
          </p>
          <p className="mb-6">
            At Flaury our purpose is simple yet powerful:
            <b className="text-primaryColor"> to empower individuals </b>
            to prioritise self-care and enhance their
            <b className="text-primaryColor">beauty routines effortlessly.</b>
            We strive to revolutionize how people approach their beauty needs by
            providing a platform that caters to{" "}
            <b className="text-primaryColor">
              diverse preferences and requirements.
            </b>
          </p>
          <p className="mb-6">
            Our goals go beyond mere functionality. Through our app, we aim to
            <b className="text-primaryColor"> deliver exceptional value</b> to
            both service providers and clients alike. We are committed to
            fostering a community where
            <b className="text-primaryColor">
              {" "}
              beauty professionals can thrive
            </b>{" "}
            and showcase their talents while offering clients an
            <b className="text-primaryColor"> unrivalled experience</b> that
            exceeds their expectations.
          </p>
        </div>
      </div>
      <img src={img} alt="" className="hidden lg:block" />
    </section>
  );
};

export default Needs;
