import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/home";
import AboutUs from "@/pages/about";
import ContactUs from "@/pages/contact";
import NotFound from "@/pages/NotFound";
import Cryptocurrencies from "@/pages/markets/Cryptocurrencies";
import Indices from "@/pages/markets/Indices";
import Forex from "@/pages/markets/Forex";
import Stocks from "@/pages/markets/Stocks";
import Commodities from "@/pages/markets/Commodities";
import MarketNews from "@/pages/learn/MarketNews";
import TradingBasics from "@/pages/learn/TradingBasics";
import Terms from "@/pages/legal/Terms";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/markets">
            <Route path="commodities" element={<Commodities />} />
            <Route path="forex" element={<Forex />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="indices" element={<Indices />} />
          </Route>
          <Route path="/learn/trading-basics" element={<TradingBasics />} />
          <Route path="/learn/market-news" element={<MarketNews />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
