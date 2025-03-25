import React from "react";
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

import { account } from "../lib/appwrite";

import { LogOut } from "lucide-react";

const handleLogOut = async () => {
  await account.deleteSession("current");
  window.location.href = "/authpage";
};

const LogoutAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cyan-300 hover:text-red-500 hover:bg-cyan-400/10 transition-all duration-300 border border-cyan-500/10 backdrop-blur-md shadow-md hover:shadow-cyan-500/20">
          <LogOut className="h-5 w-5" />
          <span className="font-semibold tracking-wide">GavelDown</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black/80 border border-cyan-300/50 backdrop-blur-3xl text-white rounded-xl shadow-lg">
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
          <AlertDialogAction
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition rounded-lg px-4 py-2"
            onClick={handleLogOut}
          >
            Confirm Exit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutAlert;
