import React, { useState } from "react";
import "./StakingInvestments.css";

const stakingPlans = [
  {
    interest: "10%",
    duration: "15 Days",
    capital: "$100 - $1000",
    min: 100,
    max: 1000,
  },
  {
    interest: "15%",
    duration: "30 Days",
    capital: "$1000 - $10000",
    min: 1000,
    max: 10000,
  },
  {
    interest: "20%",
    duration: "45 Days",
    capital: "$10000 - $100000",
    min: 10000,
    max: 100000,
  },
  {
    interest: "25%",
    duration: "60 Days",
    capital: "$10000 - $100000",
    min: 10000,
    max: 100000,
  },
  {
    interest: "30%",
    duration: "75 Days",
    capital: "$15000 - $100000",
    min: 15000,
    max: 100000,
  },
  {
    interest: "40%",
    duration: "90 Days",
    capital: "$20000 - $1000000",
    min: 20000,
    max: 1000000,
  },
];

const StakingInvestments = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("_id");

  const handleInvestClick = (plan) => {
    setSelectedPlan(plan);
    setAmount("");
    setError("");
    setMessage("");
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const investmentAmount = parseFloat(amount);
    if (
      investmentAmount < selectedPlan.min ||
      investmentAmount > selectedPlan.max
    ) {
      setError(
        `Amount should be between ${selectedPlan.min} - ${selectedPlan.max}`
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/cryptostake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          // plan: selectedPlan.title,
          interestRate: selectedPlan.interest,
          duration: selectedPlan.duration,
          amount: investmentAmount,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Investment successful!");
        setSelectedPlan(null); // Close modal after success
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

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
              <p>
                <strong>Duration</strong> <br /> {plan.duration}
              </p>
              <p>
                <strong>Capital Limit</strong> <br /> {plan.capital}
              </p>
            </div>
            <button
              className="invest-btn"
              onClick={() => handleInvestClick(plan)}
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={handleCloseModal}>
              &times;
            </span>
            {/* <h3>Invest in {selectedPlan.interest} Plan</h3> */}
            <p>
              <strong>Duration:</strong> {selectedPlan.duration}
            </p>
            <p>
              <strong>Interest Rate:</strong> {selectedPlan.interest}
            </p>
            <p>
              <strong>Investment Range:</strong> {selectedPlan.capital}
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              {error && <p className="error">{error}</p>}
              {message && <p className="success">{message}</p>}
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

export default StakingInvestments;
