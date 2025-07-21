import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate(); // ✅ for navigation

  const isDisabled = mobile.length < 10;

  return (
    <div className="min-h-screen bg-white p-4">
      {/* ✅ Back button */}
      <button
        className="text-black mb-4"
        onClick={() => navigate(-1)} // Go back to previous page
      >
        <ChevronLeft />
      </button>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-1">Login account</h1>
      <p className="text-sm font-thin text-gray-500 mb-6">please enter mobile number</p>

      {/* Input wrapper */}
      <div className="relative w-full">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="w-5 h-5 rounded-full -rotate-90"
          />
          <span className="text-sm text-black pl-1">+91</span>
          <div className="w-px h-5 bg-gray-300 ml-2" />
        </div>


        <input
          type="tel"
          maxLength={10}
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          className="w-full pl-28 pr-4 py-3 rounded-md bg-[#f9faff] text-sm text-black border border-gray-200 focus:outline-none"
        />
      </div>

      {/* Button */}
      <button
        disabled={isDisabled}
        className={`w-full mt-6 py-3 rounded-full font-semibold text-sm ${isDisabled ? "bg-gray-300 text-white" : "bg-black text-white"
          }`}
      >
        Next
      </button>
    </div>
  );
}
