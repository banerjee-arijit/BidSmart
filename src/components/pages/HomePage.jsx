import { Gavel } from "lucide-react";
import React from "react";
import Card from "../Card";

const HomePage = () => {
  return (
    <div className="mt-10 ">
      <div className="flex flex-col gap-4 p-4 bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-2xl shadow-lg text-white w-fit">
        <div className="flex items-center gap-2">
          <Gavel className="text-cyan-400 " />
          <span className="text-lg font-semibold text-cyan-400">
            <span className="text-green-400 animate-pulse font-bold">Live</span>{" "}
            Auction
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
