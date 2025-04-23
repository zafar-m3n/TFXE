import React from "react";

const TradingTips = ({ tips }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Trading Tips</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Practical strategies and insights to help you trade more confidently in this market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="relative bg-orange-50 border border-orange-100 rounded-xl p-6 pt-14 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingTips;
