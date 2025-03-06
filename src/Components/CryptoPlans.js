import React from "react";
import "./CryptoPlan.css";

const CryptoPlan = () => {
  return (
    <section className="crypto-plan">
      <div className="crypto-plan-content">
        <h1>
          Plan Your Crypto <br /> Success
        </h1>
        <p>
          Flexible Options for Every Trading Ambition. Plan aims to cater to
          different user needs, from those just starting in crypto trading to
          seasoned investors, providing clear options and benefits for each
          pricing tier.
        </p>
      </div>

      {/* First Row of Investment Plans */}
      <div className="investment-plans">
        <div className="plan-card starter">
          <span className="recommended-badge">RECOMMEND</span>
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Starter</h2>
              <h3 className="plan-duration">1 Days</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 10%</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $10000
            </li>
            <li>Ideal for Beginners</li>
            <li>Risk-Free Investment</li>
            <li>Quick Return Period</li>
            <li>
              <strong>Total Return:</strong> 10%
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>

        <div className="plan-card growth">
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Growth</h2>
              <h3 className="plan-duration">2 Months</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 6%</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $2000 - $15000
            </li>
            <li>Accelerated Earnings</li>
            <li>Medium-Term Growth</li>
            <li>For Experienced Investors</li>
            <li>
              <strong>Total Return:</strong> 12% + capital
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>

        <div className="plan-card advanced">
          <span className="recommended-badge">RECOMMEND</span>
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Advanced</h2>
              <h3 className="plan-duration">1 Months</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 20%</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $6000 - $20000
            </li>
            <li>High Returns for Experts</li>
            <li>Long-Term Investment</li>
            <li>Substantial Capital Growth</li>
            <li>
              <strong>Total Return:</strong> 20% + capital
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>
      </div>

      {/* Second Row of Investment Plans */}
      <div className="investment-plans" style={{ marginTop: "30px" }}>
        <div className="plan-card balanced">
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Balanced</h2>
              <h3 className="plan-duration">Lifetime</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 100 USD</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $1000 - $5000
            </li>
            <li>Stable Growth</li>
            <li>Moderate Risk and Return</li>
            <li>Ideal for Conservative Investors</li>
            <li>
              <strong>Total Return:</strong> Unlimited
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>

        <div className="plan-card flexi">
          <span className="recommended-badge">RECOMMEND</span>
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Flexi</h2>
              <h3 className="plan-duration">1 Days</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 2.5%</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $500 - $3000
            </li>
            <li>Flexible Terms</li>
            <li>Quick Access to Funds</li>
            <li>Lower Risk Profile</li>
            <li>
              <strong>Total Return:</strong> 2.5% + capital
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>

        <div className="plan-card premium">
          <div className="plan-header">
            <div className="plan-header-top">
              <h2 className="plan-title">Premium</h2>
              <h3 className="plan-duration">Lifetime</h3>
            </div>
            <div className="plan-sub-header">
              <p className="interest-rate">Interest Rate: 5%</p>
              <p className="terms">ℹ Terms and Policies</p>
            </div>
          </div>
          <ul>
            <li>
              <strong>Investment amount limit:</strong> $10000 - $50000
            </li>
            <li>Highest Return Rates</li>
            <li>Longest Investment Period</li>
            <li>Exclusive for High Stake Investors</li>
            <li>
              <strong>Total Return:</strong> Unlimited
            </li>
          </ul>
          <button className="invest-btn">Invest Now</button>
        </div>
      </div>
    </section>
  );
};

export default CryptoPlan;
