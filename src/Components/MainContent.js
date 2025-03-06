import React from "react";
import "./MainContent.css";
import { FaPlay, FaChartLine, FaShieldAlt, FaSync } from "react-icons/fa"; // Import icons
import bitcoinImage from "./bitcoin.png"; // Replace with actual image
import Header from "./Header";

import metamask from "./metamask.png"; // Replace with actual paths
import exodus from "./exodus.png";
import safepal from "./safepal.png";
import trustwallet from "./trustwallet.png";

const MainContent = () => {
  const youtubeURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with actual video URL

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="text-section">
          <h1 style={{ color: "white" }}>
            Refine Invest and Trade with Staking
          </h1>
          <p>
            Begin your financial evolution with TrustCoinFX’s groundbreaking
            Staking model, a gateway to enhanced earnings and expansive customer
            reach. Progress to intelligent investment opportunities, tailored
            for savvy growth.
          </p>

          <div className="info-section">
            <a
              href={youtubeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="video-button"
            >
              <FaPlay className="play-icon" />
            </a>
            <div className="user-count">
              <span>10.00M+</span>
              <p>Users from the WorldWide</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="features">
            <div
              className="feature-item"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FaChartLine className="feature-icon" />
              <p>Fast Trading</p>
            </div>
            <div
              className="feature-item"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FaShieldAlt className="feature-icon" />
              <p>Secure & Reliable</p>
            </div>
            <div
              className="feature-item"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FaSync className="feature-icon" />
              <p>Continuous Market Updates</p>
            </div>
          </div>

          {/* Wallets Section */}
          <div className="wallets">
            <img src={metamask} alt="Metamask" style={{ marginTop: "20px" }} />
            <img src={exodus} alt="Exodus" style={{ height: "100px" }} />
            <img src={safepal} alt="SafePal" style={{ height: "100px" }} />
            <img
              src={trustwallet}
              alt="Trust Wallet"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>

        <div className="image-section">
          <img src={bitcoinImage} alt="Bitcoin Network" />
        </div>
      </div>
    </>
  );
};

export default MainContent;
