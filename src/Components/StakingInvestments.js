import React from "react";
import "./StakingInvestments.css";

const stakingPlans = [
  { interest: "10%", duration: "15 Days", capital: "$100 - $1000" },
  { interest: "15%", duration: "30 Days", capital: "$1000 - $10000" },
  { interest: "20%", duration: "45 Days", capital: "$10000 - $100000" },
  { interest: "25%", duration: "60 Days", capital: "$10000 - $100000" },
  { interest: "30%", duration: "75 Days", capital: "$15000 - $100000" },
  { interest: "40%", duration: "90 Days", capital: "$20000 - $1000000" },
];

const StakingInvestments = () => {
  return (
    <section className="staking-section">
      <div className="staking-header">
        <h1>Maximizing Profits with Staking Investments</h1>
        <p>
          Unleashing Passive Income Potential: Harnessing the Power of Staking
          Investments
        </p>
      </div>

      <div className="staking-plans">
        {stakingPlans.map((plan, index) => (
          <div key={index} className="staking-card">
            <div className="interest-circle">
              <span>{plan.interest}</span>
              <small>Interest</small>
            </div>
            <div className="staking-details">
              <p style={{ color: "black", marginLeft: "10px" }}>
                <strong>Duration</strong> <br /> {plan.duration}
              </p>
              <p style={{ color: "black", marginRight: "10px" }}>
                <strong>Capital Limit</strong> <br /> {plan.capital}
              </p>
            </div>
            <button className="invest-btn">Invest Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StakingInvestments;
