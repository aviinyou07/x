import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="flex bg-white rounded-xl shadow-sm border border-gray-300 w-full  p-2.5 mb-2.5 font-['Roboto_Flex']"
    >
      <img
        src={icon}
        alt=""
        className="w-16 h-16 mr-2.5 flex-shrink-0"
      />
      <div className="flex-1">
        <h2 className="text-[12px] text-[#0F0F10] font-semibold leading-[1.2] mb-2">
          {title}
        </h2>
        <p className="text-[10px] text-gray-600 leading-[1.4] m-0">
          {description}
        </p>
      </div>
    </div>
  );
}
