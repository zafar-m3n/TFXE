import React from "react";
import BasicsHero from "./components/BasicsHero";
import IntroToTrading from "./components/IntroToTrading";
import UnderstandingMarkets from "./components/UnderstandingMarkets";
import KeyTerms from "./components/KeyTerms";
import GetStartedSection from "./components/GetStartedSection";

const TradingBasics = () => {
  return (
    <section className="pb-20 bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <BasicsHero />
      <IntroToTrading />
      <UnderstandingMarkets />
      <KeyTerms />
      <GetStartedSection />
    </section>
  );
};

export default TradingBasics;
