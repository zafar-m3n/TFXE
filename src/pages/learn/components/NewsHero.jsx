import React from "react";
import heroImg from "@/assets/news-bg.jpg";

const NewsHero = () => {
  return (
    <div
      className="relative text-white mb-8"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0" />
      <div className="relative z-10 py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Market News</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the latest updates and insights across all major markets. Stay informed with real-time news and
            expert commentary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
