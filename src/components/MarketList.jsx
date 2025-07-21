import React from "react";

import btcIcon from "../assets/btcIcon.png";
import shibIcon from "../assets/shibIcon.png";
import usdtIcon from "../assets/usdtIcon.png";
import dotIcon from "../assets/dotIcon.jpeg";
import eosIcon from "../assets/eosIcon.png";
import solIcon from "../assets/solIcon.jpeg";
import filIcon from "../assets/filIcon.jpeg";
import dogeIcon from "../assets/dogeIcon.jpeg";
import maticIcon from "../assets/maticIcon.jpeg";

const marketData = [
  { name: "MATRIC", icon: maticIcon, change: "+0.96%", volume: "$25,418,370.3", price: "$0.5507", color: "green" },
  { name: "SHIB", icon: shibIcon, change: "+5.7%", volume: "$139,342,206.2", price: "$0.00002561", color: "red" },
  { name: "FIL", icon: filIcon, change: "+7.78%", volume: "$605,777,285.0", price: "$5.62", color: "green" },
  { name: "EOS", icon: eosIcon, change: "+9.05%", volume: "$193,021,354.2", price: "$0.8454", color: "green" },
  { name: "DOT", icon: dotIcon, change: "+7.74%", volume: "$186,892,336.3", price: "$8.55", color: "green" },
  { name: "USDT", icon: usdtIcon, change: "+0.03%", volume: "$895,995,525.9", price: "$1.00", color: "green" },
  { name: "DOGE", icon: dogeIcon, change: "+10.63%", volume: "$793,568,904.0", price: "$0.4200", color: "red" },
  { name: "BTC", icon: btcIcon, change: "+0.94%", volume: "$2,186,479,697.7", price: "$97,620.0", color: "green" },
  { name: "SOL", icon: solIcon, change: "+2.32%", volume: "$333,677,172.4", price: "$250.43", color: "red" },
];

export default function MarketList() {
  return (
    <div className="max-w-xs mx-auto mt-5 text-[9px] font-['Roboto_Flex'] text-[#0f0f10]">
      <h3 className="text-[12px] font-semibold mb-2 text-[#0f0f10]">Market list</h3>

      {/* Table Header */}
      <div className="grid grid-cols-3 font-semibold text-gray-600 mb-2 text-center">
        <div>Crypto Coin</div>
        <div>Volume (24h)</div>
        <div>Price</div>
      </div>

      {/* Table Rows */}
      {marketData.map((coin, index) => (
        <div key={index} className="grid grid-cols-3 items-center mb-3 text-center">
          {/* Coin Name & Change */}
          <div className="flex items-center justify-start gap-1">
            <img
              src={coin.icon}
              alt={coin.name}
              className="w-5 h-5 object-contain mr-1"
            />
            <div className="text-left">
              <div className="font-medium">{coin.name}</div>
              <div className={coin.color === "red" ? "text-red-600" : "text-green-600"}>
                {coin.change}
              </div>
            </div>
          </div>

          {/* Volume */}
          <div className="text-center">{coin.volume}</div>

          {/* Price */}
          <div className="text-center">{coin.price}</div>
        </div>
      ))}
    </div>
  );
}
