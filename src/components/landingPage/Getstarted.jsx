import { Link } from "react-router-dom";
import globe from "/globe-white.svg";

const Getstarted = () => {
  return (
    <section className="mt-10 py-10">
      <div className="relative md:flex items-center gap-14">
        <div className="md:w-1/2 h-[25rem] md:h-full p-10 bg-primaryColor">
          <img
            src={globe}
            alt=""
            className="w-2/3 mx-auto opacity-15 md:opacity-100"
          />
        </div>
        <div className="absolute top-0 md:static md:w-1/2 p-10 text-white md:text-primaryColor">
          <p className="text-sm">
            With <b className="text-3xl">FLAURY</b>
          </p>
          <p className="py-6">
            You can hire professional service providers around you or your
            preferred location
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-sm">
              You can chat with service providers to state your needs
            </li>
            <li className="mb-2 text-sm">
              You can make payments and get notified about your appointments
            </li>
          </ul>
          <Link to="/signup">
            <button class="transition bg-primaryColor text-white border text-xs mt-2 px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
