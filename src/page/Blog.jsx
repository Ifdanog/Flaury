import { useEffect } from "react";
import Blogdetails from "../components/blog/Blogdetails";
import Flauryapp from "../components/blog/Flauryapp";
import Hero from "../components/blog/Hero";
import Footer from "../components/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Blogdetails />
      <Flauryapp />
      <Footer />
    </div>
  );
};

export default Blog;
