import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { FeaturesSection } from "../components/Freature";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
