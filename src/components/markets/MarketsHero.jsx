import React from "react";

const MarketHero = ({ title, description, backgroundImage }) => {
  console.log("MarketHero props:", { title, description, backgroundImage });
  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="relative z-10 py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketHero;
