import React, { useState } from "react";
import {
  LayoutDashboard,
  Search,
  Gavel,
  PlusCircle,
  MessageSquare,
  Bell,
  Settings,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Users,
  Sparkles,
  Rocket,
  Menu,
  X,
} from "lucide-react";

import BGanimation from "../animations/BGanimation";
import Sidebar from "../components/Sidebar";
import UserBoard from "@/components/UserBoard";

const Dashboard = () => {
  return (
    <div className="min-h-screen  bg-black text-white relative ">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <BGanimation />
      <div className="relative z-10 flex flex-col lg:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-black overflow-hidden overflow-y-scroll">
          <Sidebar />
        </div>

        {/* UserBoard - scrollable content area */}
        <div className="flex-1 overflow-y-scroll overflow-x-hidden h-screen">
          <UserBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
