import React from "react";
import MarketHero from "@/components/markets/MarketsHero";
import MarketOverview from "@/components/markets/MarketOverview";
import TradingTips from "../components/markets/TradingTips";
import MiniChartRow from "@/components/markets/MiniChartRow";
import WhyTFXE from "@/components/markets/WhyTFXE";

const MarketsLayout = ({ heroData, overviewData, miniCharts, tips }) => {
  return (
    <>
      <MarketHero {...heroData} />
      <MarketOverview {...overviewData} />
      <TradingTips tips={tips} />
      <MiniChartRow symbols={miniCharts} />
      <WhyTFXE />
    </>
  );
};

export default MarketsLayout;
