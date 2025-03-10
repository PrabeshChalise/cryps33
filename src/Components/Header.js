import React, { useState } from "react";
import axios from "axios";
import "./Header.css";
import logo from "./logo2.png";
import mobileLogo from "./logo2.png";
import CryptoTicker from "./CryptoTicker";
import { login, signup, logout } from "../AuthService"; // Import API functions

const Header = () => {
    const [showOtpModal, setShowOtpModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otp, setOtp] = useState("");
    // const [showOtp, setShowOtp] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  // const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Open Login Modal
  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
    setError("");
  };

  // Open Signup Modal
  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
    setError("");
  };

  // Close Modals
  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setError("");
    setSuccessMessage("");
  };

const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/verify-otp", {
        email,
        otp,
        password,
      });
      setSuccess("Account verified successfully! You can now log in.");
      setShowOtpModal(false);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  // Handle Login
 const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
        const response = await axios.post("http://localhost:5000/api/login", { email, password });
        localStorage.setItem("token", response.data.token); // Store JWT Token
        localStorage.setItem("userID", response.data.userID); // Store user ID

        setSuccessMessage("Login successful!");
        setTimeout(() => closeModals(), 2000);
    } catch (err) {
        setError(err.response?.data?.message || "Login failed.");
    }
};

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", { email, password });
      setSuccessMessage("OTP sent to your email.");
      setShowSignupModal(false);
      setShowOtpModal(true);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };


  return (
    <div>
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
              <a href="/trade">Trade</a>
            </li>
            <li>
              <a href="/plan">Pricing</a>
            </li>
            <li>
              <a href="/feature">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Desktop Wallet Button */}
        <button
          className="connect-wallet desktop-wallet"
          onClick={openLoginModal}
        >
          Connect Wallet
        </button>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Login</h2>
            {error && <p className="error-text">{error}</p>}
            {successMessage && <p className="success-text">{successMessage}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="modal-btn" type="submit">
                Login
              </button>
            </form>
            <p className="switch-text">
              Don't have an account?{" "}
              <span onClick={openSignupModal}>Sign Up</span>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModals}>
              &times;
            </span>
            <h2>Sign Up</h2>
            {error && <p className="error-text">{error}</p>}
            {successMessage && <p className="success-text">{successMessage}</p>}
            <form onSubmit={handleSignup}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button className="modal-btn" type="submit">
                Sign Up
              </button>
            </form>
            <p className="switch-text">
              Already have an account?{" "}
              <span onClick={openLoginModal}>Login</span>
            </p>
          </div>
        </div>
      )}
      {showOtpModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter OTP</h2>
            <form onSubmit={handleVerifyOTP}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify</button>
            </form>
            {error && <p className="error-text">{error}</p>}
            {success && <p className="success-text">{success}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
