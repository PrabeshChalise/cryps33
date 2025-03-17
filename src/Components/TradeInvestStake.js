import React from "react";
import "./TradeInvestStake.css"; // Ensure this CSS file exists
import { FaChartBar, FaDollarSign, FaChartLine } from "react-icons/fa"; // Importing React Icons

const TradeInvestStake = () => {
  return (
    <section className="trade-invest-stake">
      <div className="trade-box">
        <h2 className="number">1</h2>
        <div className="trade-icon">
          <FaChartBar className="icon" />
        </div>
        <h3>
          <span>Trade</span>
        </h3>
        <p>
          Elevate your trading skills in cryptocurrency pairs with smart,
          intuitive tools. Our platform caters to experts seeking sophisticated,
          yet accessible, trading environments for enhanced profitability.
        </p>
      </div>

      <div className="trade-box">
        <h2 className="number">2</h2>
        <div className="trade-icon">
          <FaDollarSign className="icon" />
        </div>
        <h3>
          <span>Invest</span>
        </h3>
        <p>
          Experience secure, stress-free investing where risk is mitigated, and
          profit maximization is a reality. Our platform is designed for
          seamless, intelligent investment strategies in crypto.
        </p>
      </div>

      <div className="trade-box">
        <h2 className="number">3</h2>
        <div className="trade-icon">
          <FaChartLine className="icon" />
        </div>
        <h3>
          <span>Stake</span>
        </h3>
        <p>
          Harness the power of community-driven growth in the cryptocurrency
          space with Staking. Expand your network and earn all while
          contributing to a collective success story.
        </p>
      </div>
    </section>
  );
};

export default TradeInvestStake;
