import React from "react";
import "./CryptoInfoSection.css"; // Ensure this CSS file exists
import bitcoinBubbles from "./bitcoin-bubble.png"; // Replace with actual path

const CryptoInfoSection = () => {
  return (
    <section className="crypto-info-section">
      <div className="crypto-info-content">
        <h1>Innovators in the Digital Finance Realm</h1>
        <p>
          Pioneering Your Crypto Journey with Expertise. Our team, a blend of
          tech wizards and financial aficionados, harnesses the power of Laravel
          to bring you a seamless, secure, and sophisticated trading platform.
          Here's what sets us apart:
        </p>

        <ul className="crypto-features">
          <li>
            ✔ Deep market analysis and insights, empowering informed trading
            decisions.
          </li>
          <li>
            ✔ Leveraging Laravel's advanced features for a robust, secure
            platform.
          </li>
          <li>
            ✔ Intuitive interfaces that cater to both novices and professional
            traders.
          </li>
          <li>
            ✔ Round-the-clock assistance and educational resources for
            continuous learning.
          </li>
          <li>
            ✔ Worldwide service with a keen understanding of local market
            nuances.
          </li>
          <li>
            ✔ TrustCoinFX emerges at the forefront of digital finance
            innovation, dedicated to revolutionizing your experience in the
            cryptocurrency domain.
          </li>
        </ul>

        {/* Statistics Section */}
        <div className="crypto-stats">
          <div className="stat-box">
            <h2>161</h2>
            <p>Trading Pair</p>
          </div>
          <div className="stat-box">
            <h2>268,862</h2>
            <p>Happy Client</p>
          </div>
          <div className="stat-box">
            <h2>91,264</h2>
            <p>Investor</p>
          </div>
        </div>
      </div>

      <div className="crypto-info-image">
        <img src={bitcoinBubbles} alt="Bitcoin Bubbles" />
      </div>
    </section>
  );
};

export default CryptoInfoSection;
