// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Rocket, Menu, X, Sparkles, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import useThemeStore from "@/store/ThemeStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#050301" : "#f4f4f4";
  }, [theme]);

  const isDark = theme === "dark";

  const navLinkStyle = `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
    isDark
      ? "text-gray-300 hover:text-cyan-400"
      : "text-gray-800 hover:text-cyan-600"
  }`;

  const mobileLinkStyle = `block px-3 py-2 rounded-md text-base font-medium border border-transparent hover:border-cyan-500/20 transition-all duration-300 ${
    isDark
      ? "text-gray-300 hover:text-cyan-400"
      : "text-gray-800 hover:text-cyan-600"
  }`;

  return (
    <nav
      className="fixed w-full z-50 border-b border-cyan-500/20"
      style={{ backgroundColor: isDark ? "#050301" : "#f4f4f4" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <Rocket className="h-8 w-8 text-cyan-400 relative" />
              <span
                className={`font-bold text-xl relative ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                NOVA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Bid
                </span>
              </span>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex ml-10 space-x-4">
              {["Home", "Feature", "About", "Help"].map((item) => (
                <Link key={item} to="#" className={navLinkStyle}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/authpage">
              <div className="bg-black px-6 py-2 rounded-lg border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 transition duration-300 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Launch Bid
              </div>
            </Link>
            <button
              onClick={toggleTheme}
              className="ml-2 border border-cyan-500/30 px-3 py-1 rounded-md text-sm text-cyan-400 hover:bg-cyan-500/10 transition"
            >
              {isDark ? <Moon /> : <Sun />}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isDark ? "text-gray-300" : "text-gray-800"
              } hover:text-cyan-400`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full z-50 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden border-t border-cyan-500/20`}
        style={{ backgroundColor: isDark ? "#050301" : "#f4f4f4" }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-cyan-400" />
              <span
                className={`font-bold text-lg ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                NOVA<span className="text-cyan-400">Bid</span>
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`${
                isDark ? "text-gray-300" : "text-gray-800"
              } hover:text-cyan-400`}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {["Home", "Auctions", "How It Works", "About"].map((item) => (
              <Link key={item} to="#" className={mobileLinkStyle}>
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/authpage">
              <button className="w-full rounded-lg border border-cyan-500/50 hover:border-cyan-500 text-cyan-400 px-6 py-2 font-medium transition duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Sparkles className="h-4 w-4" />
                Launch Bid
              </button>
            </Link>
          </div>

          <div className="mt-4">
            <button
              onClick={toggleTheme}
              className="w-full rounded-lg border border-cyan-500/30 px-4 py-2 text-sm text-cyan-400 hover:bg-cyan-500/10 transition"
            >
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
