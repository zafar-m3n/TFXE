// src/components/about/HeroSection.jsx
import React from "react";
import heroImg from "@/assets/contact-bg.webp";

const HeroSection = () => {
  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="relative z-10 py-20 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We’re here to help. Reach out to our team for any questions or support regarding trading, accounts, or
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
