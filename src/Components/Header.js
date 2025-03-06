import React, { useState } from "react";
import "./Header.css";
import logo from "./logo2.png"; // Ensure correct path
import mobileLogo from "./logo2.png"; // Same logo for mobile
import CryptoTicker from "./CryptoTicker";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {" "}
      <CryptoTicker />
      <header className="header" style={{ marginTop: "25px" }}>
        <div className="logo">
          <img src={logo} alt="TrustCoinFX Logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Desktop Navigation */}
        <nav className="navigation desktop-nav">
          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#trade">Trade</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button className="connect-wallet desktop-wallet">
          Connect Wallet
        </button>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <div className="mobile-header">
            <img src={mobileLogo} alt="Mobile Logo" className="mobile-logo" />
            {/* <div className="close-icon" onClick={toggleMenu}>
              ✖
            </div> */}
          </div>

          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#trade">Trade</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button className="connect-wallet">Connect Wallet</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
