import React from "react";
import MiniChart from "@/components/MiniChart";

const MiniChartRow = ({ symbols = [] }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">Market Snapshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {symbols.map((symbol, index) => (
            <div key={index}>
              <MiniChart symbol={symbol} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniChartRow;
