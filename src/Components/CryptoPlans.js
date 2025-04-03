import React, { useState, useEffect } from "react";
import "./CryptoPlan.css";

const plans = [
  { title: "Starter", duration: "1 Day", interestRate: "10%", limit: 10000 },
  { title: "Growth", duration: "2 Months", interestRate: "6%", limit: 15000 },
  { title: "Advanced", duration: "1 Month", interestRate: "20%", limit: 20000 },
  {
    title: "Balanced",
    duration: "Lifetime",
    interestRate: "100 USD",
    limit: 5000,
  },
  { title: "Flexi", duration: "1 Day", interestRate: "2.5%", limit: 3000 },
  { title: "Premium", duration: "Lifetime", interestRate: "5%", limit: 50000 },
];

const CryptoPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const userId = localStorage.getItem("_id");
  const handleCloseModal = () => {
    setSelectedPlan(null);
  };
  // ✅ Check Wallet Connection on Page Load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setIsWalletConnected(true);
            setWalletAddress(accounts[0]);
          } else {
            setIsWalletConnected(false);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
          setIsWalletConnected(false);
        }
      }
    };

    checkWalletConnection();
  }, []);

  // ✅ Connect to Wallet (if not connected)
  const handleConnectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setIsWalletConnected(true);
        setWalletAddress(accounts[0]);
        localStorage.setItem("walletAddress", accounts[0]); // Store in localStorage
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert(
        "No Ethereum wallet detected. Please install MetaMask or Trust Wallet."
      );
    }
  };

  const handleInvestClick = (plan) => {
    if (!isWalletConnected) {
      alert("Please connect your wallet first.");
      return;
    }
    setSelectedPlan(plan);
    setAmount("");
    setError("");
    setScreenshot(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User not logged in.");
      return;
    }

    if (parseFloat(amount) > selectedPlan.limit) {
      setError(`Amount exceeds the limit of $${selectedPlan.limit}`);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/stake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          plan: selectedPlan.title,
          amount: parseFloat(amount),
          interestRate: selectedPlan.interestRate,
          time: selectedPlan.duration,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Investment successful!");
        setSelectedPlan(null);
        setAmount("");
        setError("");
      } else {
        setError(data.message || "Failed to invest.");
      }
    } catch (err) {
      console.error("Error submitting investment:", err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <section className="crypto-plan">
      <div className="crypto-plan-content">
        <h1>
          Plan Your Crypto <br /> Success
        </h1>
        <p>Flexible Options for Every Trading Ambition...</p>
      </div>
      {!isWalletConnected ? (
        <button className="connect-wallet-btn" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      ) : (
        <p className="wallet-connected">
          Wallet Connected: {walletAddress.slice(0, 6)}...
          {walletAddress.slice(-4)}
        </p>
      )}

      {/* Investment Plans - First Row (3 Plans) */}
      <div className="investment-plans">
        {plans.slice(0, 3).map((plan) => (
          <div className="plan-card" key={plan.title}>
            <span className="recommended-badge">RECOMMEND</span>
            <div className="plan-header">
              <div className="plan-header-top">
                <h2 className="plan-title">{plan.title}</h2>
                <h3 className="plan-duration">{plan.duration}</h3>
              </div>
              <div className="plan-sub-header">
                <p className="interest-rate">
                  Interest Rate: {plan.interestRate}
                </p>
                <p className="terms">ℹ Terms and Policies</p>
              </div>
            </div>
            <ul>
              <li>
                <strong>Investment amount limit:</strong> ${plan.limit}
              </li>
              <li>Secure & Profitable</li>
              <li>Short & Long-Term Options</li>
              <li>Ideal for Investors</li>
              <li>
                <strong>Total Return:</strong> {plan.interestRate}
              </li>
            </ul>
            <button
              className="invest-btn"
              onClick={() => handleInvestClick(plan)}
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>

      {/* Investment Plans - Second Row (3 Plans) */}
      <div className="investment-plans">
        {plans.slice(3, 6).map((plan) => (
          <div className="plan-card" key={plan.title}>
            <span className="recommended-badge">RECOMMEND</span>
            <div className="plan-header">
              <div className="plan-header-top">
                <h2 className="plan-title">{plan.title}</h2>
                <h3 className="plan-duration">{plan.duration}</h3>
              </div>
              <div className="plan-sub-header">
                <p className="interest-rate">
                  Interest Rate: {plan.interestRate}
                </p>
                <p className="terms">ℹ Terms and Policies</p>
              </div>
            </div>
            <ul>
              <li>
                <strong>Investment amount limit:</strong> ${plan.limit}
              </li>
              <li>Stable Growth & High Returns</li>
              <li>Flexible & Premium Plans</li>
              <li>Exclusive Benefits</li>
              <li>
                <strong>Total Return:</strong> {plan.interestRate}
              </li>
            </ul>
            <button
              className="invest-btn"
              onClick={() => handleInvestClick(plan)}
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>

      {/* Investment Form */}
      {selectedPlan && (
        <div className="modal">
          <div className="modal-content">
            <span className="c  lose-modal" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Invest in {selectedPlan.title}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "90%",
                }}
              />
              <p>Max Limit: ${selectedPlan.limit}</p>
              <p>Interest Rate: {selectedPlan.interestRate}</p>
              <p>Duration: {selectedPlan.duration}</p>

              {error && <p className="error">{error}</p>}
              <button type="submit" className="invest-btn">
                Invest Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CryptoPlan;
