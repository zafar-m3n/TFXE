import React from "react";
import MarketsLayout from "@/layouts/MarketsLayout";
import indicesImg from "@/assets/indices.jpg";
import indicesOverviewImg from "@/assets/indices.webp";

const Indices = () => {
  const heroData = {
    title: "Trade Global Indices with Insight",
    description: "Gain exposure to the performance of entire markets like the S&P 500, NASDAQ, DAX, and more.",
    backgroundImage: indicesImg,
  };

  const overviewData = {
    title: "Why Trade Indices?",
    description:
      "Indices represent the overall performance of a group of stocks, allowing you to invest in broad market movements rather than individual companies. They offer diversification, lower volatility, and insight into economic trends.",
    image: indicesOverviewImg,
    points: [
      {
        title: "Market Exposure",
        description: "Track the performance of key stock markets in a single position.",
      },
      {
        title: "Diversification",
        description: "Reduce single-stock risk by trading baskets of top-performing companies.",
      },
      {
        title: "Economic Indicators",
        description:
          "Indices reflect the health of entire sectors or economies, helping guide macro trading strategies.",
      },
    ],
  };

  const tips = [
    {
      title: "Monitor Market Openings",
      content: "Indices often react to news and earnings released before or during market open hours.",
    },
    {
      title: "Watch Economic Reports",
      content: "Macroeconomic data like unemployment rates and GDP affect index movements significantly.",
    },
    {
      title: "Understand Composition",
      content: "Know which stocks have the biggest weight in the index you’re trading to anticipate movements.",
    },
  ];

  const miniCharts = ["FOREXCOM:SPX500", "FOREXCOM:NAS100", "FOREXCOM:DJI", "ICMARKETS:DE30"];

  return <MarketsLayout heroData={heroData} overviewData={overviewData} tips={tips} miniCharts={miniCharts} />;
};

export default Indices;
