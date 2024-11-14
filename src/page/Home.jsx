import Features from "../components/landingPage/Features";
import Features2 from "../components/landingPage/Features2";
import Flaurybusiness from "../components/landingPage/Flaurybusiness";
import Footer from "../components/Footer";
import Getstarted from "../components/landingPage/Getstarted";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import Testimonials from "../components/landingPage/Testimonials";
import Whatyouget from "../components/landingPage/Whatyouget";
import NearbySalon from "../components/landingPage/NearbySalon";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <NearbySalon />
      <Services />
      <Features />
      <Whatyouget />
      <Flaurybusiness />
      <Getstarted />
      <Testimonials />
      <Features2 />
      <Footer />
    </div>
  );
};

export default Home;
