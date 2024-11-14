import React, { useEffect } from "react";
import Hero from "../components/about/Hero";
import Intro from "../components/about/Intro";
import Needs from "../components/about/Needs";
import Whyflaury from "../components/about/Whyflaury";
import Introflauryb from "../components/about/Introflauryb";
import Flauryapp from "../components/about/Flauryapp";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Intro />
      <Needs />
      <Whyflaury />
      <Introflauryb />
      <Flauryapp />
      <Footer />
    </div>
  );
};

export default About;
