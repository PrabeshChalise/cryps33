import React from "react";
import MainContent from "./MainContent";
import CryptoInfoSection from "./CryptoInfoSection";
import TradeInvestStake from "./TradeInvestStake";
import CryptoPlan from "./CryptoPlans";
import StakingInvestments from "./StakingInvestments";
import CurrencyExchange from "./CurrencyExchange";
import CryptoTable from "./CryptoTable";
import CryptoConversions from "./CryptoConversions";
import CryptoExcellence from "./CryptoExcellence";

const Main1 = () => {
  return (
    <div>
      <MainContent />
      <CryptoInfoSection />
      <TradeInvestStake />
      <CryptoPlan />
      <StakingInvestments />
      <CurrencyExchange />
      <CryptoTable />
      <CryptoConversions />
      <CryptoExcellence />
    </div>
  );
};

export default Main1;
