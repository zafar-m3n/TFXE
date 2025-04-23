import React from "react";
import heroImg from "@/assets/hero.jpg";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-white">
          <p className="text-lg font-semibold text-orange-400 mb-2">Live Forex Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Unlock Real-Time <br /> Market Insights
          </h1>
          <p className="text-lg mb-6 max-w-lg">
            Join thousands of traders receiving accurate, up-to-the-second forex updates and smart analysis that
            empowers better trading decisions.
          </p>
          <Button
            color="primary"
            size="md"
            className="mx-auto w-fit md:mx-0"
            icon="heroicons:arrow-top-right-on-square"
            iconPosition="right"
          >
            Explore Markets
          </Button>
        </div>

        {/* Lead Capture Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-black mb-2">Get Real-Time Market Updates</h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            Stay ahead with instant alerts, expert insights, and live data.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <Button type="submit" color="primary" size="md" className="w-full">
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
