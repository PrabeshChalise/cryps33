import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CryptoTable.css";

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pair Price</th>
            <th>Daily Change</th>
            <th>Daily High</th>
            <th>Daily Low</th>
            <th>Total Volume</th>
            <th>Market Cap</th>
            <th>Total Supply</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td className="coin-info">
                <img src={coin.image} alt={coin.name} />
                <div>
                  <strong>{coin.name}</strong>
                  <span>{coin.symbol.toUpperCase()} Coin</span>
                </div>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>
                {coin.high_24h ? `$${coin.high_24h.toLocaleString()}` : "N/A"}
              </td>
              <td>
                {coin.low_24h ? `$${coin.low_24h.toLocaleString()}` : "N/A"}
              </td>
              <td>{coin.total_volume.toLocaleString()}</td>
              <td>{coin.market_cap.toLocaleString()}</td>
              <td>
                {coin.total_supply ? coin.total_supply.toLocaleString() : "N/A"}
              </td>
              <td>
                <button className="trade-button">
                  Login to Trade & Practice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
