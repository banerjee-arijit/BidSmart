import React, { useEffect, useState } from "react";
import { Gavel, X } from "lucide-react";
import { account } from "../lib/appwrite";
import ViewProfile from "./ViewProfile";
import Card from "./Card";

const UserBoard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserFirstChar, setCurrentUserFirstChar] = useState(null);
  const [viewProfile, setViewProfile] = useState(false);

  useEffect(() => {
    const getCurrentUserName = async () => {
      try {
        const { name } = await account.get();
        setCurrentUser(name);
        setCurrentUserFirstChar(name.charAt(0).toUpperCase());
      } catch (error) {
        console.error(error);
      }
    };
    getCurrentUserName();
  }, []);

  const handleViewProfile = () => {
    setViewProfile(!viewProfile);
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-screen min-h-screen bg-black/80 border border-cyan-500/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white relative">
      <div className="flex items-center gap-4">
        <div className="bg-cyan-500/10 p-3 rounded-full">
          <button
            className="h-6 w-6 text-cyan-400 flex justify-center items-center text-3xl cursor-pointer"
            onClick={handleViewProfile}
          >
            {currentUserFirstChar}
          </button>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            Welcome, <span className="text-cyan-400">{currentUser}</span>
          </h2>
          <p className="text-sm text-gray-400">{today}</p>
        </div>
      </div>

      {/* Drawer */}
      {viewProfile && (
        <ViewProfile
          handleViewProfile={handleViewProfile}
          currentUser={currentUser}
          currentUserFirstChar={currentUserFirstChar}
        />
      )}
      <div className="mt-10 ml-4">
        <div className="flex flex-col gap-4 p-4 bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-2xl shadow-lg text-white w-fit">
          <div className="flex items-center gap-2">
            <Gavel className="text-cyan-400 " />
            <span className="text-lg font-semibold text-cyan-400">
              <span className="text-green-400 animate-pulse font-bold">
                Live
              </span>{" "}
              Auction
            </span>
          </div>
        </div>
        <div className="mt-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default UserBoard;
