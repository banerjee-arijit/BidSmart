import React, { useLayoutEffect, useState } from "react";
import { account } from "./lib/appwrite";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Loader from "./loader/Loader";

const App = () => {
  const [currentSession, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.get();
        setSession(session);
      } catch (error) {
        console.error("No session found:", error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return (
    <div>
      {loading ? <Loader /> : currentSession ? <Dashboard /> : <LandingPage />}
    </div>
  );
};

export default App;
