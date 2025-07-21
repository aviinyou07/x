import React, { useEffect, useState } from "react";
import bannerImage from "../assets/bannerex.jpeg";
import bgImage from "../assets/yellow.png";
import ExchangeComparison from "../components/ExchangeComparison";

import { FiVolume2 } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { CreditCard, Banknote, MailPlus } from "lucide-react";

import { Link } from "react-router-dom";

const notifications = [
  { time: "13:48", number: "93****0134", amount: "$774" },
  { time: "13:50", number: "87****2451", amount: "$920" },
  { time: "13:52", number: "72****8763", amount: "$658" },
];





export default function ExchangePage() {
  const [timer, setTimer] = useState(24);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Auto-change notification every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev === 0 ? 24 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<>
<div className="max-w-md text-sm bg-[#f8f9fc]">
      {/* Banner */}
      <div className="rounded-xl overflow-hidden flex justify-center mb-2">
        <img
          src={bannerImage}
          alt="Welcome Banner"
          className="rounded-xl"
        />
      </div>

      {/* Title */}
      <h3 className="text-[12px] font-bold mb-2 text-[#0f0f10]">Platform Price</h3>

      {/* Price Card */}
      <div
        className="rounded-xl shadow-xs bg-cover bg-center bg-no-repeat mb-2 p-4"
        style={{ backgroundImage: `url(${bgImage})`, backgroundColor: "#fff" }}
      >
        {/* Timer */}
        <div className="text-center text-[9px] text-gray-500 mb-1">
          Automatic refresh after <span className="text-orange-400">{timer}s</span>
        </div>

        {/* Price */}
        <div className="text-[20px] font-bold text-[#0f0f10] text-center">
          94.5
          <span className="text-white bg-red-500 text-[9px] px-1 py-0.5 rounded ml-1 align-bottom">
            Base
          </span>
        </div>

        {/* USDT Rate */}
        <p className="text-[12px] text-[#0f0f10] font-bold flex justify-center items-center mt-1">
          1 USDT ={" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="mx-1"
            viewBox="0 0 16 16"
          >
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
          </svg>
          99
        </p>

        {/* Pricing Table */}
        <div className="bg-[#feeea8] mt-4 rounded-xl p-1.5 text-center">
          <table className="w-full bg-white border-collapse text-[11px] rounded-xl">
            <thead className="bg-[#feeea8]">
              <tr>
                <th className="p-1 px-2">Exchange($)</th>
                <th className="p-1 px-2">Price(₹)</th>
              </tr>
            </thead>
            <tbody className="text-[9px] text-gray-700 rounded-lg">
              <tr className="border-b border-gray-100">
                <td className="p-2 px-2 border-r border-gray-100">
                  &gt;=1058.21 and &lt;2116.41
                </td>
                <td className="p-2 px-2">
                  94.5<span className="text-red-600">+0.25</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2 px-2 border-r border-gray-100">
                  &gt;=2116.41 and &lt;3174.61
                </td>
                <td className="p-2 px-2">
                  94.5<span className="text-red-600">+0.5</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2 px-2 border-r border-gray-100">
                  &gt;=3174.61 and &lt;5291.01
                </td>
                <td className="p-2 px-2">
                  94.5<span className="text-red-600">+1</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-2 px-2 border-r border-gray-100">
                  &gt;5291.01
                </td>
                <td className="p-2 px-2">
                  94.5<span className="text-red-600">+1.5</span>
                </td>
              </tr>

              {/* Centered full-width row with modal trigger */}
              <tr>
                <td colSpan="2" className="py-2">
                  <button
                    onClick={() => setShowModal(true)} // your modal handler
                    className="text-[#3f3f1e] underline text-[11px] cursor-pointer"
                  >
                    What is tiered price policy?
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
              <div
                className="w-full sm:w-[90%] md:w-[320px] bg-[#fffef9] p-4 rounded-t-xl shadow-xl animate-slide-up"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#fffef9", // fallback
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-[15px] font-semibold text-[#1c1c1c]">
                    What is tiered price policy?
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-[#1c1c1c] text-[15px] font-bold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-[13px] text-[#4c4c4c] mb-3 leading-[1.5]">
                  In order to help users maximize their profits in the shortest possible
                  time, we will launch a tiered exchange price discount policy.
                </p>

                <p className="text-[13px] text-[#4c4c4c] leading-[1.6]">
                  For example: When you sell{" "}
                  <span className="text-[#f26a1a] font-medium">1058.21USDT</span> to
                  AngelX, and it qualifies for the tiered price discount policy. Based on
                  the calculation formula of{" "}
                  <span className="text-[#f26a1a] font-medium">
                    1058.21×(94.5−0.25)
                  </span>
                  , you will receive{" "}
                  <span className="text-[#f26a1a] font-medium">₹100265.39</span> in
                  funds. In comparison, you have gained an additional profit of{" "}
                  <span className="text-[#f26a1a] font-medium">₹264.55</span>. This
                  preferential policy allows you to achieve higher returns in your
                  transactions.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full mt-5 bg-black text-white rounded-full py-2 text-[13px] font-semibold"
                >
                  Yes, I know
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Login Button */}
        <div className="flex justify-center">
          <Link to='/login'><button className="bg-black text-white w-[240px] mt-5 mb-2 text-[12px] font-semibold rounded-full py-2">
            Login to deposit / sell USDT
          </button></Link>
        </div>

        {/* Note */}
        <p className="text-[10px] font-medium text-red-600 text-center">
          New account will be registered for new users.
        </p>

        
      <div className="w-full max-w-sm mx-auto p-2 space-y-2">
        {/* Top Icons */}
        <div className="flex justify-around text-center text-sm text-[#1c1c1c]">
          <div className="flex flex-col items-center">
            <CreditCard className="w-6 h-6 mb-1" />
            Deposit
          </div>
          <div className="flex flex-col items-center">
            <Banknote className="w-6 h-6 mb-1" />
            Withdraw
          </div>
          <div className="flex flex-col items-center">
            <MailPlus className="w-6 h-6 mb-1" />
            Sell
          </div>
        </div>
        {/* Auto-changing Notification */}
        <div className="flex items-center justify-between bg-[#f5f7fa] text-sm text-[#1c1c1c] px-3 py-1.5 rounded-full shadow-sm transition-all duration-300">
          <div className="flex items-center gap-1">
            <FiVolume2 className="text-yellow-500" />
            <span className="text-[13px] whitespace-nowrap">
              {current.time} {current.number} sold for {current.amount}
            </span>
          </div>
          <IoIosArrowForward className="text-gray-500" />
        </div>
      </div>
      </div>      
    </div>
        <ExchangeComparison />


</>
    
  );
}
