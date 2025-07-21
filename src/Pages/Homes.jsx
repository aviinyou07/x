import React from "react";
import banner from "../assets/banner.jpeg";
import st1 from "../assets/st1.png";
import st2 from "../assets/st2.png";
import st3 from "../assets/st3.png";
import phonePreview from "../assets/screenshot.png";

import FeatureCard from "../components/FeatureCard";
import MarketList from "../components/MarketList";

export default function HomePage() {
  return (
    <div>
      {/* Banner Image */}
      <img
        src={banner}
        alt="Welcome Banner"
        className="rounded-xl mb-4 w-full"
      />

      {/* Feature Cards */}
      <div className="space-y-4 max-w-md">
        <FeatureCard
          icon={st1}
          title="Get started in seconds"
          description="Whether you are a beginner or an expert, you can easily get started without any professional knowledge"
        />
        <FeatureCard
          icon={st2}
          title="Boost your yields"
          description="Every transaction has potential for huge profits, allowing every user to thrive simultaneously with the platform"
        />
        <FeatureCard
          icon={st3}
          title="Access expert knowledge"
          description="Ensure that every user can earn profits on the platform regardless of how much money they have"
        />
      </div>

      {/* Screenshot of App UI */}
      <div className="flex justify-center mt-6">
        <img
          src={phonePreview}
          alt="App UI"
          className="rounded-xl shadow w-[220px] h-[305px]"
        />
      </div>

      <h5 className="text-[12px] font-semibold text-center text-[#0f0f10] mt-5 mb-4">
        AngelX official screenshot
      </h5>

      {/* Market List Section */}
      <MarketList />
    </div>
  );
}
