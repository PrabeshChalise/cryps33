<<<<<<< HEAD
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
=======
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
  const userID = localStorage.getItem("userID");
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

    if (!userID) {
      alert("User not logged in.");
      return;
    }

    if (parseFloat(amount) > selectedPlan.limit) {
      setError(`Amount exceeds the limit of $${selectedPlan.limit}`);
      return;
    }

    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("plan", selectedPlan.title);
    formData.append("amount", amount);
    formData.append("interestRate", selectedPlan.interestRate);
    formData.append("time", selectedPlan.duration);
    formData.append("screenshot", screenshot);

    try {
      const response = await fetch("http://localhost:3001/api/stake", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Investment successful!");
        setSelectedPlan(null);
      } else {
        setError(data.message);
      }
    } catch (err) {
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
            <span className="close-modal" onClick={handleCloseModal}>
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
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshot(e.target.files[0])}
                required
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "90%",
                }}
              />
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
>>>>>>> 0a10aed (Initial commit)
