import React, { useLayoutEffect, useState } from "react";
import { account } from "./lib/appwrite";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Loader from "./loader/Loader";

const App = () => {
  // State For Current User and Controls Loader
  const [currentSession, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    // Check if user is logged in on initial load
    const checkSession = async () => {
      try {
        const session = await account.get();
        setSession(session);
      } catch (error) {
        console.warn("No active session:", error.message);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) return <Loader />;
  return currentSession ? <Dashboard /> : <LandingPage />;
};

export default App;
