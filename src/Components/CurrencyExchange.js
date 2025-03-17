import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./CurrencyExchange.css";

const CurrencyExchange = () => {
  return (
    <section className="currency-exchange">
      <div className="exchange-content">
        <div className="circle"></div>
        <h1>
          Advanced Currency <br /> Exchange
        </h1>
        <p>
          Navigate the cryptocurrency market with precision. Our platform offers
          real-time pricing, comprehensive market analysis, and trend forecasts
          to inform and enhance your trading strategy. Stay ahead in the dynamic
          world of crypto with BitsBY’s insightful exchange tools.
        </p>
      </div>

      <div className="explore-trades">
        <span>Explore Trades</span>
        <div className="explore-btn">
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchange;
