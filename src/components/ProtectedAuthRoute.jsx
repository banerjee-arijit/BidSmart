import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";

const ProtectedAuthRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.get();
        if (session) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkSession();
  }, []);

  return children;
};

export default ProtectedAuthRoute;
