import React from "react";
import wazirxLogo from "../assets/wazir.png";
import binanceLogo from "../assets/bin.png";
import a1 from "../assets/ad1.png";
import a2 from "../assets/ad2.png";
import a3 from "../assets/ad3.png";
import a4 from "../assets/ad4.png";

export default function ExchangeComparison() {
    return (
        <div className="bg-[#f8f9fc] text-[#0f0f10] text-[13px] font-normal">
            {/* Exchange Prices */}
            <h3 className="text-[12px] font-bold my-2 text-[#0f0f10]">Exchange Price</h3>
            <div className="flex space-x-4">
                {/* WazirX Card */}
                <div className="bg-[#fff] text-[16px] p-2.5 w-1/2 rounded-md border border-gray-200 shadow-sm">
                    <img src={wazirxLogo} alt="WazirX" className="mb-1 h-auto max-h-12 object-contain" />
                    <div className="text-[12px] text-[#0f0f10] font-medium">
                        Avg <span className="font-bold text-[14px]">91</span> Rs
                    </div>
                    <div className="text-[11px] text-[#363535]">Min <span className="text-[#000000] font-bold">89.5 Rs</span></div>
                    <div className="text-[11px] text-[#363535]">Max <span className="text-[#000000] font-bold">92.5 Rs</span></div>
                </div>

                {/* Binance Card */}
                <div className="bg-[#fff] text-[16px] p-2.5 w-1/2 rounded-md border border-gray-200 shadow-sm">
                    <img src={binanceLogo} alt="Binance" className="mb-1 h-auto max-h-12 object-contain" />
                    <div className="text-[12px] text-[#0f0f10] font-medium">
                        Avg <span className="font-bold text-[14px]">91.5</span> Rs
                    </div>
                    <div className="text-[11px] text-[#363535]">Min <span className="text-[#000000] font-bold">90 Rs</span></div>
                    <div className="text-[11px] text-[#363535]">Max <span className="text-[#000000] font-bold">93 Rs</span></div>
                </div>
            </div>

            {/* Stats Note */}
            <p className="text-[10px] font-light text-[#4B4B4B] text-center mt-2">
                Statistics based on the latest 10 pieces of data
            </p>

            {/* Platform Advantage */}
            <h3 className="text-[14px] font-semibold mt-4">Platform Advantage</h3>
            <div className="space-y-3 mt-2">
                {/* Advantage 1 */}
                <div className="bg-white rounded-md p-3 shadow-sm flex items-start space-x-2 border border-gray-200">
                    <img src={a1} alt="24/7 Support" className="h-5 w-5 mt-0.5" />
                    <div>
                        <p className="font-semibold text-[13px]">24/7 Support</p>
                        <p className="text-[11px] text-gray-700">
                            Got a problem? Just get in touch. Our customer service support team is available 24/7.
                        </p>
                    </div>
                </div>

                {/* Advantage 2 */}
                <div className="bg-white rounded-md p-3 shadow-sm flex items-start space-x-2 border border-gray-200">
                    <img src={a2} alt="No Transaction Fee" className="h-5 w-5 mt-0.5" />
                    <div>
                        <p className="font-semibold text-[13px]">No Transaction Fee</p>
                        <p className="text-[11px] text-gray-700">
                            Zero transaction fees guaranteed, every time, with no hidden charges or deductions.
                        </p>
                    </div>
                </div>

                {/* Advantage 3 */}
                <div className="bg-white rounded-md p-3 shadow-sm flex items-start space-x-2 border border-gray-200">
                    <img src={a3} alt="Best In Market" className="h-5 w-5 mt-0.5" />
                    <div>
                        <p className="font-semibold text-[13px]">Best In Market</p>
                        <p className="text-[11px] text-gray-700">
                            We offer the highest price for your USDT, beating all market rates.
                        </p>
                    </div>
                </div>

                {/* Advantage 4 */}
                <div className="bg-white rounded-md p-3 shadow-sm flex items-start space-x-2 border border-gray-200">
                    <img src={a4} alt="Reliable Security" className="h-5 w-5 mt-0.5" />
                    <div>
                        <p className="font-semibold text-[13px]">Reliable Security</p>
                        <p className="text-[11px] text-gray-700">
                            Our sophisticated security measures protect your cryptocurrency from all risks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
