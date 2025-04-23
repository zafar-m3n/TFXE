import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Icon from "@/components/ui/Icon";

const terms = [
  {
    title: "Spread",
    icon: "mdi:swap-horizontal",
    short: "The difference between the bid and ask price.",
    full: "The spread in trading refers to the difference between the buying price (bid) and the selling price (ask) of a financial instrument. It’s essentially the cost of making a trade.",
  },
  {
    title: "Leverage",
    icon: "mdi:trending-up",
    short: "Amplifies both gains and losses.",
    full: "Leverage allows traders to control a large position with a relatively small amount of capital. While it magnifies potential profits, it also increases risk.",
  },
  {
    title: "Pip",
    icon: "mdi:decimal-increase",
    short: "Smallest price change in forex.",
    full: "A pip (percentage in point) is the smallest price move in a currency pair in Forex trading, typically equal to 0.0001.",
  },
  {
    title: "Lot Size",
    icon: "mdi:chart-bubble",
    short: "The amount of asset traded.",
    full: "Lot size represents the number of units of a financial instrument you trade. A standard lot in forex is 100,000 units.",
  },
  {
    title: "Margin",
    icon: "mdi:percent",
    short: "The deposit needed to open a trade.",
    full: "Margin is the amount of money required in your account to open and maintain a leveraged position. It is not a cost, but a portion held aside.",
  },
  {
    title: "Volatility",
    icon: "mdi:chart-line",
    short: "How much the market moves.",
    full: "Volatility describes the rate at which the price of a financial instrument increases or decreases for a given set of returns.",
  },
];

const KeyTerms = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Key Terms & Concepts</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Understand the foundational terms that every trader must know. Click on any term to learn more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <div
              key={index}
              className="bg-orange-50 hover:bg-orange-100 cursor-pointer p-6 rounded-lg shadow-md transition duration-300 text-left"
              onClick={() => setSelected(term)}
            >
              <Icon icon={term.icon} width={36} className="text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{term.title}</h3>
              <p className="text-sm text-gray-600">{term.short}</p>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected.title} size="md">
          <p className="text-gray-700 text-sm leading-relaxed">{selected.full}</p>
        </Modal>
      )}
    </section>
  );
};

export default KeyTerms;
