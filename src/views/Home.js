import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Learn from "../components/sections/Learn";
import Cta from "../components/sections/Cta";
import GetInvolved from "../components/sections/GetInvolved";
import Support from "../components/sections/Support";

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
      <GetInvolved topDivider />
      <Support topDivider />
      <Cta split />
    </>
  );
};

export default Home;
