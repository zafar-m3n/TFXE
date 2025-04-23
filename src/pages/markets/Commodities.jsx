import React from "react";
import MarketsLayout from "@/layouts/MarketsLayout";
import commoditiesImg from "@/assets/commodities.jpg";
import commoditiesOverviewImg from "@/assets/commodities.webp";

const Commodities = () => {
  const heroData = {
    title: "Invest in Real Assets with Commodities",
    description: "Trade gold, oil, silver, and more to hedge inflation and diversify your investment strategy.",
    backgroundImage: commoditiesImg,
  };

  const overviewData = {
    title: "Why Trade Commodities?",
    description:
      "Commodities offer exposure to physical goods that drive the global economy. They’re often used as a hedge against inflation and currency fluctuations, providing diversification in your portfolio.",
    image: commoditiesOverviewImg,
    points: [
      {
        title: "Inflation Hedge",
        description: "Gold and other commodities often retain value during inflationary periods.",
      },
      {
        title: "Diversification",
        description: "Commodities have low correlation with traditional assets like stocks and bonds.",
      },
      {
        title: "Global Demand",
        description: "Commodity prices reflect real-world supply and demand dynamics across industries.",
      },
    ],
  };

  const tips = [
    {
      title: "Follow Global Events",
      content: "Commodities are sensitive to geopolitical tensions, weather events, and supply chain shifts.",
    },
    {
      title: "Watch for Seasonality",
      content: "Certain commodities like agricultural products are affected by seasonal trends.",
    },
    {
      title: "Understand Futures Contracts",
      content: "Many commodities are traded as futures. Know contract expirations and rollovers.",
    },
  ];

  const miniCharts = ["TVC:GOLD", "TVC:SILVER", "TVC:USOIL", "SWISSQUOTE:GASK2025"];

  return <MarketsLayout heroData={heroData} overviewData={overviewData} tips={tips} miniCharts={miniCharts} />;
};

export default Commodities;
