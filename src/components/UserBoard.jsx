import React, { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import ViewProfile from "./ViewProfile";
import { Outlet } from "react-router";

const UserBoard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserFirstChar, setCurrentUserFirstChar] = useState(null);
  const [viewProfile, setViewProfile] = useState(false);

  useEffect(() => {
    const getCurrentUserName = async () => {
      try {
        const { name } = await account.get();
        setCurrentUser(name.substring(0, name.indexOf(" ")));
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
      <div className="mt-10 z-0 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default UserBoard;
