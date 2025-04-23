import React from "react";
import AboutHero from "./components/AboutHero";
import TeamSection from "./components/TeamSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
