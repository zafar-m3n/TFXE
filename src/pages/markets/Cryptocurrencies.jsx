import React from "react";
import MarketsLayout from "@/layouts/MarketsLayout";
import cryptoImg from "@/assets/crypto.jpg";
import cryptoOverviewImg from "@/assets/crypto.webp";

const Cryptocurrencies = () => {
  const heroData = {
    title: "Explore the Future with Cryptocurrencies",
    description: "Trade top digital assets like Bitcoin, Ethereum, and more on a secure and intuitive platform.",
    backgroundImage: cryptoImg,
  };

  const overviewData = {
    title: "Why Trade Cryptocurrencies?",
    description:
      "Cryptocurrencies offer unique opportunities in a rapidly evolving digital economy. With 24/7 markets and high volatility, crypto is ideal for traders seeking dynamic price action and decentralized asset exposure.",
    image: cryptoOverviewImg,
    points: [
      {
        title: "24/7 Market",
        description: "Crypto never sleeps — trade anytime, including weekends and holidays.",
      },
      {
        title: "Volatility Opportunities",
        description: "Take advantage of sharp price swings to enter and exit trades with precision.",
      },
      {
        title: "Decentralized Assets",
        description: "Gain exposure to a new class of decentralized, blockchain-based assets with global adoption.",
      },
    ],
  };

  const tips = [
    {
      title: "Watch Bitcoin & Ethereum Trends",
      content: "These major coins often lead the market. Keep an eye on them when trading altcoins.",
    },
    {
      title: "Stay Updated on Regulations",
      content: "Crypto is still evolving. News on regulations can move markets fast.",
    },
    {
      title: "Use Secure Wallets",
      content: "Always store assets securely. Consider hardware wallets for long-term holdings.",
    },
  ];

  const miniCharts = ["BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:BNBUSDT", "BINANCE:XRPUSDT"];

  return <MarketsLayout heroData={heroData} overviewData={overviewData} tips={tips} miniCharts={miniCharts} />;
};

export default Cryptocurrencies;
