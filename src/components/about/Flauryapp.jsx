import play from "/play-btn.png";
import apple from "/apple-btn.png";
import iphone from "/iPhone.png";
import { Link } from "react-router-dom";

const Flauryapp = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:flex justify-between items-center">
      <div>
        <h3 className="font-bold text-4xl">Download the app</h3>
        <p className="font-medium pt-3 pb-6">
          Get connected to your beauty dreams on the go
        </p>
        <div className="flex gap-4">
          <Link>
            <img src={play} alt="" className="w-[15rem]" />
          </Link>
          <Link>
            <img src={apple} alt="" className="w-[15rem]" />
          </Link>
        </div>
      </div>
      <img src={iphone} alt="" className="mt-10 md:mt-0" />
    </section>
  );
};

export default Flauryapp;
