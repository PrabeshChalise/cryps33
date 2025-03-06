import React, { useState } from "react";
import "./FAQSection.css";
import QA from "./QA.png";
const faqs = [
  {
    question: "What is TrustCoinFX?",
    answer:
      "TrustCoinFX is a cutting-edge crypto trading and investment platform, offering a range of services from real-time trading to strategic investment planning, all powered by Laravel technology.",
  },
  {
    question: "How do I start trading on TrustCoinFX?",
    answer:
      "Getting started is simple. Just download the web3 wallet and go to the browse section, then enter the referral link; after that, just click connect wallet, and you'll be ready to fund your account and begin trading.",
  },
  {
    question: "Is my investment safe with TrustCoinFX?",
    answer:
      "Yes, we prioritize the security of our users' investments. Our platform employs advanced security protocols and encryption to safeguard your assets and personal information.",
  },
  {
    question: "Can beginners use TrustCoinFX effectively?",
    answer:
      "Absolutely! Our platform is designed for users of all skill levels. We offer educational resources and intuitive tools to help beginners navigate the crypto market confidently.",
  },
  {
    question: "What makes TrustCoinFX different from other crypto platforms?",
    answer:
      "TrustCoinFX stands out with its user-friendly interface, comprehensive market analytics, community-driven insights, and TrustcoinFX is decentralised Which Gives optimal performance and security.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Left Side */}
      <div className="faq-content">
        <h1>
          <span className="highlight">Frequently Asked</span> Questions
        </h1>
        <p>
          Your Queries Answered: Unveiling the Essentials of Crypto Trading and
          Investment with TrustCoinFX
        </p>

        {/* <div className="faq-bg-icon"> */}
        {/* <img style={{ height: "200px" }} src={QA} alt="" /> */}
        <button className="faq-button">More Questions?</button>
        {/* </div> */}
      </div>

      {/* Right Side - FAQ List */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
