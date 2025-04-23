import React from "react";
import aboutImage from "@/assets/aboutus.avif";

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm mb-2">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How TFXE Came to Be</h2>
          <p className="text-gray-600 mb-4">
            Founded with a vision to redefine retail trading, TFXE began as a small group of passionate traders and tech
            innovators.
          </p>
          <p className="text-gray-600 mb-4">
            Over the years, we’ve evolved into a globally recognized platform — built on transparency, cutting-edge
            tools, and a relentless commitment to empower every trader.
          </p>
          <p className="text-gray-600 mb-8">
            From real-time insights to smart analysis, TFXE stands as a reliable force in today’s fast-moving financial
            markets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">5+</p>
              <p className="text-gray-600">Years of Innovation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">2500+</p>
              <p className="text-gray-600">Global Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">120+</p>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-500">900+</p>
              <p className="text-gray-600">Tradable Instruments</p>
            </div>
          </div>
        </div>
        <div>
          <img src={aboutImage} alt="TFXE Team" className="w-full rounded-xl shadow-lg object-cover max-h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
