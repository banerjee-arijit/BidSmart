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
import { account, ID } from "../lib/appwrite";
import BGanimation from "../animations/BGanimation";

const AuthPage = () => {
  // -------------------------------------------------------STATES-------------------------------------------------------
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  // -------------------------------------------------------HOOKS-------------------------------------------------------
  const navigate = useNavigate();

  // -------------------------------------------------------FUNCTIONS-------------------------------------------------------
  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? handleLogin() : handleRegister();
  };

  const notify = (message, type = "success") => {
    if (type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const handleLogin = async () => {
    const { email, password } = users;
    try {
      const session = await account.createEmailPasswordSession(email, password);
      if (session) {
        setUser({
          email: "",
          password: "",
          username: "",
        });

        notify("Login successful!");
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      notify("Login failed. Please check your credentials.", "error");
    }
  };

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

  const handleGoogleLogin = () => {
    console.log("Login with Google triggered.");
  };

  const handleInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ✨ Glowing Dots */}
      <BGanimation />
      {/* Main Card */}
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
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
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
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
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
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300"
            >
              {isLogin ? (
                <LogIn className="w-5 h-5" />
              ) : (
                <UserPlus className="w-5 h-5" />
              )}
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <div className="my-4 text-center text-sm text-gray-400">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10 rounded-lg flex items-center justify-center gap-2 transition duration-300"
          >
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
