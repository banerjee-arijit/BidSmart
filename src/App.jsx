import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { account } from "./lib/appwrite";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
