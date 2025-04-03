import React, { useEffect, useState } from "react";
import axios from "axios";
import TradeBox from "./TradeBox";

const TradingDashboard = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [coin, setCoin] = useState(null);
  const [marketPairs, setMarketPairs] = useState([]);
  const [trades, setTrades] = useState([]);

  const API_KEY = "CG-abdEKxm7HXgBnnG2D2eexnmq"; // Replace with your actual key

  const fetchMainCoin = async () => {
    const res = await axios.get(
      "https://pro-api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          ids: selectedCoin,
        },
        headers: {
          "X-Cg-Pro-Api-Key": API_KEY,
        },
      }
    );
    setCoin(res.data[0]);
  };

  const fetchMarketPairs = async () => {
    const res = await axios.get(
      "https://pro-api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "volume_desc",
          per_page: 10,
          page: 1,
        },
        headers: {
          "X-Cg-Pro-Api-Key": API_KEY,
        },
      }
    );
    setMarketPairs(res.data);
  };

  const fetchTrades = async () => {
    const tradesData = Array.from({ length: 10 }).map((_, i) => ({
      price: (86500 + Math.random() * 100).toFixed(2),
      amount: (Math.random() * 0.01).toFixed(4),
      time: new Date().toLocaleTimeString(),
    }));
    setTrades(tradesData);
  };

  useEffect(() => {
    fetchMainCoin();
    fetchMarketPairs();
    fetchTrades();
    const interval = setInterval(() => {
      fetchMainCoin();
      fetchTrades();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedCoin]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && coin?.symbol) {
        new window.TradingView.widget({
          container_id: "tradingview_widget",
          autosize: true,
          symbol: `BINANCE:${coin.symbol.toUpperCase()}USDT`,
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: false,
          hide_top_toolbar: false,
        });
      }
    };
    document.body.appendChild(script);
  }, [coin]);

  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-black text-white min-h-screen">
      {/* Top Stats */}
      <div className="col-span-6 bg-gray-900 p-4 rounded shadow-md">
        {coin && (
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-2">
              <select
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
                className="bg-black text-white border border-gray-600 p-1 rounded"
              >
                {marketPairs.map((pair) => (
                  <option key={pair.id} value={pair.id}>
                    {pair.name}
                  </option>
                ))}
              </select>
              <h2 className="text-xl font-bold">
                ({coin.symbol.toUpperCase()}) / USDT
              </h2>
            </div>
            <div className="text-green-400 text-2xl font-bold">
              ${coin.current_price.toLocaleString()}
            </div>
            <div>
              24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div>High: ${coin.high_24h}</div>
            <div>Low: ${coin.low_24h}</div>
            <div>Volume: {coin.total_volume.toLocaleString()}</div>
          </div>
        )}
      </div>

      {/* Order Book */}
      <div className="col-span-1 bg-gray-800 p-3 rounded text-sm">
        <h3 className="font-bold mb-2">Order Book</h3>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-red-400">{(86590 + i).toFixed(2)}</span>
            <span>{(Math.random() * 0.01).toFixed(4)}</span>
            <span>{(Math.random() * 100).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* TradingView Chart Embed */}
      <div className="col-span-4 bg-gray-900 p-3 rounded">
        <div
          id="tradingview_widget"
          style={{ height: "500px", width: "100%" }}
        ></div>
      </div>

      {/* Market Pairs */}
      <div className="col-span-1 bg-gray-800 p-3 rounded text-sm">
        <h3 className="font-bold mb-2">Market Pairs</h3>
        {marketPairs.map((pair) => (
          <div
            key={pair.id}
            className="flex justify-between border-b border-gray-700 py-1"
          >
            <span>{pair.symbol.toUpperCase()}/USDT</span>
            <span
              className={
                pair.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {pair.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* Market Trades */}
      <div className="col-span-6 bg-gray-900 p-3 rounded text-xs mt-4">
        <h3 className="font-bold mb-2">Market Trades</h3>
        <div className="grid grid-cols-3 gap-2">
          {trades.map((trade, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b border-gray-700 py-1"
            >
              <span className="text-green-400">${trade.price}</span>
              <span>{trade.amount} BTC</span>
              <span>{trade.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Box Section */}
      <TradeBox selectedCoin={selectedCoin} />
    </div>
  );
};

export default TradingDashboard;
