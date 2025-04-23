import React from "react";
import MarketsLayout from "@/layouts/MarketsLayout";
import forexImg from "@/assets/forex.jpg";
import forexOverviewImg from "@/assets/forex.webp";

const Forex = () => {
  const heroData = {
    title: "Trade Forex with Precision",
    description: "Access the world’s largest financial market and trade major, minor, and exotic currency pairs.",
    backgroundImage: forexImg,
  };

  const overviewData = {
    title: "Why Trade Forex?",
    description:
      "Forex trading offers high liquidity, 24/5 market access, and leverage opportunities. It's ideal for traders seeking dynamic price movements and a wide range of currency pair options.",
    image: forexOverviewImg,
    points: [
      {
        title: "24/5 Market Access",
        description: "Trade any time during the global trading week, from Sunday evening to Friday night.",
      },
      {
        title: "High Liquidity",
        description: "Forex is the most liquid market in the world, ensuring tight spreads and fast execution.",
      },
      {
        title: "Leverage Options",
        description: "Amplify your trading potential with various leverage levels suited to your risk tolerance.",
      },
    ],
  };

  const tips = [
    {
      title: "Track Economic Calendars",
      content: "News events like interest rate decisions and GDP reports can cause sharp market movements.",
    },
    {
      title: "Understand Currency Correlations",
      content: "Some currencies move together. Know these relationships to avoid doubling your risk.",
    },
    {
      title: "Manage Leverage Wisely",
      content: "While leverage can enhance gains, it also increases risk. Use it cautiously.",
    },
  ];

  const miniCharts = ["FX:EURUSD", "FX:USDJPY", "FX:GBPUSD", "FX:AUDUSD"];

  return <MarketsLayout heroData={heroData} overviewData={overviewData} tips={tips} miniCharts={miniCharts} />;
};

export default Forex;
