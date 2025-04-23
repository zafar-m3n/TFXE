import React from "react";
import MarketsLayout from "@/layouts/MarketsLayout";
import stocksImg from "@/assets/shares.jpg";
import stocksOverviewImg from "@/assets/stocks.webp";

const Stocks = () => {
  const heroData = {
    title: "Trade Global Stocks with Confidence",
    description: "Diversify your portfolio with leading companies from around the world.",
    backgroundImage: stocksImg,
  };

  const overviewData = {
    title: "Why Trade Stocks?",
    description:
      "Stock trading offers a pathway to ownership in top companies, potential passive income through dividends, and exposure to market growth. Here's why stocks are a core part of any investment strategy.",
    image: stocksOverviewImg,
    points: [
      {
        title: "Diversification",
        description: "Access a wide range of sectors, industries, and geographies to reduce overall portfolio risk.",
      },
      {
        title: "Ownership Benefits",
        description: "Enjoy potential dividend payouts and voting rights with long-term equity positions.",
      },
      {
        title: "Liquidity and Transparency",
        description: "Trade on highly regulated exchanges with deep liquidity and transparent pricing.",
      },
    ],
  };

  const tips = [
    {
      title: "Follow Earnings Reports",
      content: "Quarterly earnings can significantly impact stock prices. Stay informed to trade around them smartly.",
    },
    {
      title: "Diversify Your Portfolio",
      content: "Avoid over-concentration in one sector or region. Balance risk with a mix of stocks.",
    },
    {
      title: "Use Stop Losses",
      content: "Always manage your downside risk with stop-loss orders to protect your capital.",
    },
  ];

  const miniCharts = ["NASDAQ:AAPL", "PYTH:TSLA", "NASDAQ:AMZN", "PYTH:MSFT"];

  return <MarketsLayout heroData={heroData} overviewData={overviewData} tips={tips} miniCharts={miniCharts} />;
};

export default Stocks;
