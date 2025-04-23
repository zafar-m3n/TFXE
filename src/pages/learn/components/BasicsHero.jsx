import React from "react";
import heroImg from "@/assets/basics.jpg";

const BasicsHero = () => {
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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trading Basics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            New to trading? Start with the fundamentals. Learn key concepts, market terms, and strategies to trade
            smarter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicsHero;
