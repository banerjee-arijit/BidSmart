import React, { useState } from "react";
import {
  LayoutDashboard,
  Search,
  Gavel,
  PlusCircle,
  MessageSquare,
  Rocket,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "", icon: LayoutDashboard, label: "Dashboard" },
    { id: "search", icon: Search, label: "Search Auctions" },
    { id: "live", icon: Gavel, label: "Live Auctions" },
    { id: "create", icon: PlusCircle, label: "Create Auction" },
    { id: "messages", icon: MessageSquare, label: "Messages", badge: "3" },
  ];

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/authpage");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`bg-black/80 backdrop-blur-lg border-r  border-cyan-500/20 w-64 fixed  lg:static h-screen z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <Rocket className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold">
              NOVA<span className="text-cyan-400">Bid</span>
            </span>
          </div>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setIsSidebarOpen(false);
                navigate(`/dashboard/${item.id}`);
              }}
              className={`group w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 mb-2 relative ${
                activePage === item.id
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "hover:bg-cyan-500/5 text-gray-400 hover:text-cyan-400"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-cyan-500 text-black px-2 py-0.5 rounded-full text-xs">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-0 w-full px-4">
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <LogOut className="h-5 w-5" />
            <span>GavelDown</span>
          </button>
        </div>
      </aside>

      {/* Hamburger Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 cursor-pointer z-50 p-2 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/20 text-cyan-400"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-black border border-cyan-500/20 rounded-xl p-6 max-w-sm w-full shadow-xl">
            <h2 className="text-lg font-semibold text-cyan-300 mb-2">
              Leaving the auction?
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Are you sure you want to log out? Your bidding session will be
              closed.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-sm text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:text-black transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
