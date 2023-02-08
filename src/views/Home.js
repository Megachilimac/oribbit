import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Learn from "../components/sections/Learn";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <About topDivider />
      <Learn
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
