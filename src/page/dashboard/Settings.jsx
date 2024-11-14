import { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";

const Settings = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="mt-10 md:mt-20 w-full pr-10 px-4 md:px-0">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
