import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/Homes";
import ExchangePage from "./Pages/Exchanges";
import LoginPage from "./Pages/Logins";

import logoex from "./assets/logoex.png";
import homeIcon from "./assets/home.png";
import homeActiveIcon from "./assets/active_home.png";
import exchangeIcon from "./assets/exchange.png";
import exchangeActiveIcon from "./assets/active_exchange.png";
import userIcon from "./assets/mine.png";
import userActiveIcon from "./assets/active_mine.png";
import { HeadsetIcon } from "lucide-react";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = location.pathname;
  const showTopBar = activePage !== "/login";
  const showBottomNav = activePage !== "/login";

  const handlePageChange = (page) => {
    if (page === "mine") {
      navigate("/login"); // Redirect Mine to /login
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl flex flex-col overflow-hidden w-full h-screen max-w-[992px] lg:w-[320px] lg:rounded-xl">
        
        {/* ✅ Top Bar */}
        {showTopBar && (
          <header className="bg-white p-4 flex justify-between items-center text-sm">
            <span className="flex items-center space-x-2 font-bold text-base">
              <img src={logoex} alt="Logo" className="h-6" />
              <span>AngelX</span>
            </span>
            <a
              href="https://your-help-page-url.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeadsetIcon className="h-5" />
            </a>
          </header>
        )}

        {/* ✅ Main content */}
        <main className="flex-1 overflow-y-auto p-3 text-sm scroll-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        {/* ✅ Bottom Navigation */}
        {showBottomNav && (
          <nav
            className="border-y-gray-900 flex justify-around"
            style={{
              backgroundColor: "#fafafa",
              padding: "10px 30px",
              fontSize: "16px",
              color: "#0f0f10",
            }}
          >
            <NavButton
              active={activePage === "/"}
              label="Home"
              activeIcon={homeActiveIcon}
              inactiveIcon={homeIcon}
              onClick={() => handlePageChange("")}
            />
            <NavButton
              active={activePage === "/exchange"}
              label="Exchange"
              activeIcon={exchangeActiveIcon}
              inactiveIcon={exchangeIcon}
              onClick={() => handlePageChange("exchange")}
            />
            <NavButton
              active={false}
              label="Mine"
              activeIcon={userActiveIcon}
              inactiveIcon={userIcon}
              onClick={() => handlePageChange("mine")}
            />
          </nav>
        )}
      </div>
    </div>
  );
}

function NavButton({ activeIcon, inactiveIcon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center focus:outline-none"
      style={{
        fontSize: "10px",
        color: active ? "#000000" : "#A5A9AE",
      }}
    >
      <img
        src={active ? activeIcon : inactiveIcon}
        alt={label}
        className="w-5 h-5 mb-1"
      />
      <span>{label}</span>
    </button>
  );
}
