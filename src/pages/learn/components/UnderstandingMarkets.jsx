import React from "react";
import { Link } from "react-router-dom";
import stocksImg from "@/assets/shares.jpg";
import forexImg from "@/assets/forex.jpg";
import commoditiesImg from "@/assets/commodities.jpg";
import cryptoImg from "@/assets/crypto.jpg";
import indicesImg from "@/assets/indices.jpg";

const markets = [
  {
    name: "Stocks",
    image: stocksImg,
    description: "Buy and sell company shares. Great for long-term growth and portfolio diversification.",
    slug: "stocks",
  },
  {
    name: "Forex",
    image: forexImg,
    description: "Trade global currencies in the largest and most liquid financial market.",
    slug: "forex",
  },
  {
    name: "Commodities",
    image: commoditiesImg,
    description: "Invest in physical goods like gold, oil, and agriculture to hedge against inflation.",
    slug: "commodities",
  },
  {
    name: "Cryptocurrencies",
    image: cryptoImg,
    description: "Explore digital currencies like Bitcoin and Ethereum, driven by innovation and volatility.",
    slug: "cryptocurrencies",
  },
  {
    name: "Indices",
    image: indicesImg,
    description: "Track the performance of a group of stocks, like the S&P 500 or NASDAQ 100.",
    slug: "indices",
  },
];

const UnderstandingMarkets = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Understanding the Markets</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Before you trade, it’s crucial to know what you’re trading. Here’s a snapshot of the most popular financial
          markets accessible through TFXE.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {markets.map((market) => (
            <div
              key={market.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="w-full h-32">
                <img src={market.image} alt={market.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col justify-between text-left flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{market.name}</h3>
                <p className="text-sm text-gray-600 text-center">{market.description}</p>
                <Link
                  to={`/markets/${market.slug}`}
                  className="mt-4 inline-block text-orange-500 font-medium text-sm text-center hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderstandingMarkets;
