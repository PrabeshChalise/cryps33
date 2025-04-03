import React, { useState } from "react";
import "./ClientTestimonials.css";

const reviews = [
  {
    text: "As a professional in finance, I'm impressed by TrustCoinFX's precise market analytics and user-friendly interface.",
    name: "Alex Johnson",
    role: "Financial Analyst",
    rating: 5,
    reviewsCount: 98985,
  },
  {
    text: "TrustCoinFX has completely changed my trading experience. The platform is intuitive, fast, and the support team is always available. I’ve seen my investments grow steadily!",
    name: "Sarah Carter",
    role: "Crypto Investor",
    rating: 5,
    reviewsCount: 98985,
  },
  {
    text: "I've tried many platforms, but TrustCoinFX stands out. Their analytics and trading tools give me an edge in the market. It's a must-have for serious investors.",
    name: "Michael Lee",
    role: "Blockchain Consultant",
    rating: 5,
    reviewsCount: 98985,
  },
  {
    text: "I love how easy it is to trade on TrustCoinFX. The user experience is smooth, and the security features give me peace of mind. Definitely my go-to trading platform!",
    name: "Rachel Adams",
    role: "Day Trader",
    rating: 4,
    reviewsCount: 98985,
  },
  {
    text: "TrustCoinFX is the best investment decision I’ve made. Their expert strategies and market insights have helped me maximize profits. Highly recommended!",
    name: "Daniel Thompson",
    role: "Crypto Enthusiast",
    rating: 5,
    reviewsCount: 98985,
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="client-testimonials">
      <h1>
        <span className="highlight">Success Stories</span> from Our Clients
      </h1>
      <p className="subheading">
        Discover how TrustCoinFX has empowered individuals and businesses in
        their crypto trading and investment journey.
      </p>

      <div className="testimonial-container">
        {/* Left Circle Section */}
        <div className="review-circle">
          <p className="review-title">Amazing !</p>
          <div className="stars">
            {"★".repeat(reviews[currentIndex].rating)}
          </div>
          <p className="review-count">
            {reviews[currentIndex].reviewsCount} Reviews
          </p>
        </div>

        {/* Right Review Section */}
        <div className="testimonial-content">
          <p className="review-text">"{reviews[currentIndex].text}"</p>
          <p className="review-author">
            <strong>{reviews[currentIndex].name}</strong>
          </p>
          <p className="review-role">{reviews[currentIndex].role}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-buttons">
        <button onClick={prevReview} className="nav-btn">
          ←
        </button>
        <button onClick={nextReview} className="nav-btn">
          →
        </button>
      </div>
    </section>
  );
};

export default ClientTestimonials;
