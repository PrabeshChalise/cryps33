import React from "react";
import "./Footer.css"; // Importing the external CSS file
import logo from "./logo2.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img
            src={logo} // Replace with actual logo
            alt="TrustCoinFX Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Subscribe to our newsletter for the latest crypto trends,
            TrustCoinFX updates, and exclusive insights.
          </p>
          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Your Email Address"
              className="email-input"
            />
            <button className="subscribe-button">→</button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li>Home</li>
            <li>Trade</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact</li>
          </ul>

          <div className="footer-contact">
            <p>📧 info@TrustCoinFX.com</p>
            <p>📞 +1 412 983 8879</p>
            <p>🏠 20 Cooper Square, New York, NY 10003, USA</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; 2024 TrustCoinFX. All Rights Reserved.</p>
        <div className="footer-social">
          <span>🌍</span>
          <span>🐦</span>
          <span>📸</span>
          <span>📱</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
