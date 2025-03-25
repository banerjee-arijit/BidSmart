import React from "react";
import { Zap, Globe, Shield, Rocket, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import BGanimation from "../animations/BGanimation";
import useThemeStore from "@/store/ThemeStore";

const Hero = () => {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen pt-16 overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <BGanimation />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
                The Future of Digital Auctions
              </div>

              <h1
                className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Next Generation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Digital Marketplace
                </span>
              </h1>

              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Experience the revolution in digital auctions — secure,
                transparent, and lightning-fast bidding powered by cutting-edge
                technology.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/authpage" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Zap className="h-5 w-5 group-hover:animate-pulse" />
                    <span className="group-hover:text-white">Launch Bid</span>
                  </button>
                </Link>

                <button className="group w-full sm:w-auto border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-md font-medium transition-transform duration-300 flex items-center justify-center gap-2 hover:scale-105">
                  <Globe className="h-5 w-5 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="group-hover:text-cyan-200">
                    Explore More
                  </span>
                </button>
              </div>
            </div>

            {/* Image & Features */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&q=80&w=800"
                alt="Future Trading"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 border border-cyan-500/20"
              />

              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
                <div
                  className={`backdrop-blur-lg p-6 rounded-lg border border-cyan-500/20 shadow-[0_0_15px_rgba(0,255,255,0.1)] ${
                    isDark ? "bg-black/80" : "bg-white/80"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: <Rocket />, label: "Fast" },
                      { icon: <Shield />, label: "Secure" },
                      { icon: <Layers />, label: "Scalable" },
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-center group cursor-pointer flex flex-col justify-center items-center"
                      >
                        <div className="text-cyan-400 mx-auto mb-2">
                          {React.cloneElement(feature.icon, {
                            className:
                              "h-6 w-6 group-hover:translate-y-[-2px] transition-transform duration-300",
                          })}
                        </div>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-700"
                          }`}
                        >
                          {feature.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* End right */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
