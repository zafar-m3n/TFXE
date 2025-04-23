import React from "react";
import NewsWidget from "@/components/NewsWidget";
import NewsHero from "./components/NewsHero";

const newsData = [
  {
    market: "stock",
    title: "Stocks News",
    description:
      "Stay up to date with the latest stock market insights. Discover movements in tech, finance, and industrial sectors from global exchanges.",
  },
  {
    market: "forex",
    title: "Forex News",
    description:
      "Get live updates on major currency pairs, central bank decisions, and geopolitical news shaping the forex markets worldwide.",
  },
  {
    market: "cfd",
    title: "Commodities News",
    description:
      "Track developments in energy, metals, and agricultural commodities. See how global supply chains and weather patterns are impacting prices.",
  },
  {
    market: "crypto",
    title: "Cryptocurrencies News",
    description:
      "Catch up with the latest crypto trends — from Bitcoin and Ethereum to DeFi, NFTs, and major regulatory shifts affecting the digital economy.",
  },
  {
    market: "index",
    title: "Indices News",
    description:
      "Follow updates on global indices like the S&P 500, NASDAQ, DAX, and more. Monitor overall market sentiment and sector performance.",
  },
];

const MarketNews = () => {
  return (
    <section className="pb-20 bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <NewsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {newsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.market}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${!isEven ? "lg:order-2" : ""}`}>
                <h2 className="text-3xl font-bold text-accent mb-4">{item.title}</h2>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="w-full h-80">
                <NewsWidget market={item.market} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketNews;
