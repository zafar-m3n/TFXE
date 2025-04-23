import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ReviewSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
