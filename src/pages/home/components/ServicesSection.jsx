import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import useWidth from "@/hooks/useWidth";
import AnimatedContent from "@/components/ui/AnimatedContent";

const services = [
  {
    title: "Real-Time Price Feeds",
    icon: "mdi:chart-line",
    description:
      "Stay updated with accurate, low-latency price data across all major asset classes including Forex, Indices, Crypto, and Commodities.",
  },
  {
    title: "Market Analysis Tools",
    icon: "mdi:finance",
    description:
      "Access comprehensive technical and fundamental analysis tools to better understand market trends and opportunities.",
  },
  {
    title: "AI Trade Signals",
    icon: "mdi:robot-outline",
    description: "Receive AI-powered trade alerts based on intelligent pattern detection and backtested strategies.",
  },
];

const ServicesSection = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold uppercase tracking-wide text-sm">Services We Provide</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We turn information into <br className="hidden md:block" /> actionable insights
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedContent
              distance={100}
              direction={isMobile ? "horizontal" : "vertical"}
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start text-left hover:shadow-lg transition"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center p-2">
                    <Icon icon={service.icon} width={24} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-orange-500 hover:underline"
                >
                  <span className="border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-lg">
                    +
                  </span>
                  Discover Now
                </Link>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
