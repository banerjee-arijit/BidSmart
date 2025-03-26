// ---------------------------------------------IMPORTS----------------------------------------------
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  LogIn,
  UserPlus,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { account, ID, OAuthProvider } from "../lib/appwrite";
import BGanimation from "../animations/BGanimation";

const AuthPage = () => {
  // ------------------------ STATES ------------------------
  const [isLogin, setIsLogin] = useState(true); // toggle login/register mode
  const [users, setUser] = useState({ email: "", password: "", username: "" }); // user input state

  // ------------------------ HOOKS ------------------------
  const navigate = useNavigate(); // router navigation hook

  // ------------------------ FUNCTIONS ------------------------

  // switch between login and register form
  const toggleForm = () => setIsLogin((prev) => !prev);

  // input change handler
  const handleInputChange = (e) =>
    setUser({ ...users, [e.target.name]: e.target.value });

  // toast notification
  const notify = (message, type = "success") =>
    type === "error" ? toast.error(message) : toast.success(message);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    isLogin ? await handleLogin() : await handleRegister();
  };

  // handle login logic
  const handleLogin = async () => {
    const { email, password } = users;
    try {
      const session = await account.createEmailPasswordSession(email, password);
      if (session) {
        setUser({ email: "", password: "", username: "" });
        notify("Login successful!");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      notify("Login failed. Please check your credentials.", "error");
    }
  };

  // handle registration logic
  const handleRegister = async () => {
    const { email, password, username } = users;
    try {
      await account.create(ID.unique(), email, password, username);
      notify("Registration successful!");
      setUser({ email: "", password: "", username: "" });
      setIsLogin(true);
    } catch (error) {
      console.error("Registration error:", error);
      notify("Registration failed. Please try again.", "error");
    }
  };

  // handle Google login via OAuth
  const handleGoogleLogin = async () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173/dashboard",
      "http://localhost:5173/authpage"
    );
  };

  // handle forgot password logic
  const handleForgotPassword = async () => {
    if (!users.email)
      return notify("Please enter your email above first.", "error");

    try {
      await account.createRecovery(
        users.email,
        "https://bidsmart.vercel.app/reset-password"
      );
      notify("Recovery email sent! Check your inbox.");
    } catch (error) {
      console.error("Recovery error:", error);
      notify("Failed to send recovery email.", "error");
    }
  };

  // ------------------------ JSX ------------------------

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <BGanimation />

      <div className="relative z-10 w-full max-w-5xl bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-cyan-600/10 via-black to-purple-800/20 p-10 border-r border-cyan-500/10">
          <Rocket className="text-cyan-400 w-12 h-12 mb-4" />
          <h1 className="text-white text-3xl font-extrabold text-center leading-tight">
            {isLogin ? "Welcome back to" : "Join the revolution at"}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              NOVA Bid
            </span>
          </h1>
          <p className="text-cyan-300 mt-4 text-center text-sm">
            {isLogin
              ? "Access your dashboard and place powerful bids."
              : "Sign up to bid smart, fast, and securely on Nova."}
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-10">
          <motion.h2
            className="text-2xl font-semibold text-white mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isLogin ? "Login to your account" : "Create your account"}
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="relative">
                <User className="absolute top-3 left-3 text-cyan-400" />
                <input
                  type="text"
                  name="username"
                  value={users.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className="input-style"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute top-3 left-3 text-cyan-400" />
              <input
                type="email"
                name="email"
                value={users.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input-style"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute top-3 left-3 text-cyan-400" />
              <input
                type="password"
                name="password"
                value={users.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="input-style"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-cyan-300 text-sm hover:underline"
              >
                Forget password?
              </button>
            </div>

            <button type="submit" className="btn-primary">
              {isLogin ? (
                <LogIn className="w-5 h-5" />
              ) : (
                <UserPlus className="w-5 h-5" />
              )}
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-400">OR</div>

          <button onClick={handleGoogleLogin} className="btn-outline">
            <ShieldCheck className="w-5 h-5" /> Continue with Google
          </button>

          <p className="text-sm text-gray-400 mt-6 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
