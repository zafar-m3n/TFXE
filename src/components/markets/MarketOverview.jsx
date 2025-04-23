import React from "react";
import Icon from "@/components/ui/Icon";

const MarketOverview = ({ title, description, points = [], image }) => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description + Points */}
          <div>
            <p className="text-lg text-gray-700 mb-8">{description}</p>

            <ul className="space-y-6">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Icon icon="mdi:check" width={24} className="text-orange-500 bg-orange-100 rounded-full p-1" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img
              src={image}
              alt="Market Overview"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
