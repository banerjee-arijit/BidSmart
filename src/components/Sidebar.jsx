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
  User,
  Pencil,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "search", icon: Search, label: "Search Auctions" },
    { id: "live", icon: Gavel, label: "Live Auctions" },
    { id: "create", icon: PlusCircle, label: "Create Auction" },
    { id: "messages", icon: MessageSquare, label: "Messages", badge: "3" },
  ];

  return (
    <div>
      <aside
        className={`bg-black/80 backdrop-blur-lg border-r border-cyan-500/20 w-64 fixed lg:static h-screen z-40 transform transition-transform duration-300 ease-in-out ${
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

        {/* Logout - GavelDown */}
        <div className="absolute bottom-4 left-0 w-full px-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cyan-300 hover:text-red-500 hover:bg-cyan-400/10 transition-all duration-300 border border-cyan-500/10 backdrop-blur-md shadow-md hover:shadow-cyan-500/20">
                <LogOut className="h-5 w-5" />
                <span className="font-semibold tracking-wide">GavelDown</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black/80 border border-cyan-500/10 backdrop-blur-md text-white rounded-2xl shadow-lg">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-cyan-400 text-lg font-bold">
                  Drop the Gavel?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-300">
                  Leaving so soon? This will sign you out of the auction hall.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="pt-4">
                <AlertDialogCancel className="bg-gray-800 text-gray-200 hover:bg-gray-700 transition rounded-lg px-4 py-2">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition rounded-lg px-4 py-2">
                  Confirm Exit
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </aside>

      {/* Sidebar Toggle Button */}
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
    </div>
  );
};

export default Sidebar;
