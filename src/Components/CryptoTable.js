import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CryptoTable.css";

const CryptoTable = () => {
  const COINGECKO_API_KEY = "CG-abdEKxm7HXgBnnG2D2eexnmq"; // Replace with the correct Pro API key
  const API_URL = "https://pro-api.coingecko.com/api/v3/coins/markets";

  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        console.log("Fetching data with API Key:", COINGECKO_API_KEY);

        const response = await axios.get(API_URL, {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
            sparkline: false,
          },
          headers: {
            "X-Cg-Pro-Api-Key": COINGECKO_API_KEY, // ✅ Correctly passing API Key in headers
          },
        });

        setCoins(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="crypto-table-container">
      <h2>Crypto Market Prices</h2>
      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>
          ⚠️ Error: {error.message || "API request failed. Check console logs."}
        </p>
      ) : (
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
                  {coin.total_supply
                    ? coin.total_supply.toLocaleString()
                    : "N/A"}
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
      )}
    </div>
  );
};

export default CryptoTable;
