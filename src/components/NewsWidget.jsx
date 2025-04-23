import React, { useEffect, useRef } from "react";

const NewsWidget = ({ market = "stock" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      feedMode: "market",
      market: market,
      isTransparent: true,
      displayMode: "regular",
      width: "100%",
      height: "100%",
      colorTheme: "light",
      locale: "en",
    });

    const container = containerRef.current;
    if (container) {
      container.innerHTML = ""; // Clear previous widget
      container.appendChild(script);
    }
  }, [market]);

  return (
    <div className="w-full h-80">
      <div className="tradingview-widget-container" ref={containerRef}></div>
    </div>
  );
};

export default NewsWidget;
