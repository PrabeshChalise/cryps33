import React, { useState } from "react";
import "./CryptoExcellence.css";

// Import different images for hover effect
const images = {
  default: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", // Default image (Bitcoin)
  payout: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", // ETH for "Best Payout"
  access:
    "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png", // BNB for "Fund Access"
  support:
    "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", // XRP for "Amazing Support"
  cashback: "https://assets.coingecko.com/coins/images/4128/large/solana.png", // SOL for "Cashback Option"
};

const CryptoExcellence = () => {
  const [activeImage, setActiveImage] = useState(images.default);

  return (
    <section className="crypto-excellence">
      <div className="content">
        <h1>
          <span className="highlight">Expertise</span> in Crypto Excellence
        </h1>
        <p>
          Harness the full potential of cryptocurrency with our comprehensive
          suite of trading and investment services, tailored to meet the needs
          of both novice and seasoned investors.
        </p>

        {/* Hoverable Text Fields */}
        <div className="options">
          <div
            className="option"
            onMouseEnter={() => setActiveImage(images.payout)}
            onMouseLeave={() => setActiveImage(images.default)}
          >
            <span>
              01. <strong className="blue-text">BEST PAYOUT</strong>
            </span>
            <span className="arrow">➝</span>
          </div>
          <div
            className="option"
            onMouseEnter={() => setActiveImage(images.access)}
            onMouseLeave={() => setActiveImage(images.default)}
          >
            <span>02. FUND ACCESS</span>
            <span className="arrow">➝</span>
          </div>
          <div
            className="option"
            onMouseEnter={() => setActiveImage(images.support)}
            onMouseLeave={() => setActiveImage(images.default)}
          >
            <span>03. AMAZING SUPPORT</span>
            <span className="arrow">➝</span>
          </div>
          <div
            className="option"
            onMouseEnter={() => setActiveImage(images.cashback)}
            onMouseLeave={() => setActiveImage(images.default)}
          >
            <span>04. CASHBACK OPTION</span>
            <span className="arrow">➝</span>
          </div>
        </div>
      </div>

      {/* Changing Image on Hover */}
      <div className="image-container">
        <img src={activeImage} alt="Crypto" className="crypto-image" />
      </div>
    </section>
  );
};

export default CryptoExcellence;
