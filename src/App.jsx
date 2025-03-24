import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { account } from "./lib/appwrite";

const App = () => {
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await account.get();
        console.log(res);
        console.log("User is logged in");
      } catch (error) {
        console.log(error);
      }
    };
    checkSession();
  }, []);
  return <div></div>;
};

export default App;
