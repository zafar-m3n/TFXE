import React from "react";
import heroImg from "@/assets/about-bg.avif";

const TermsHero = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read our terms carefully — by using our services, you agree to be bound by them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsHero;
