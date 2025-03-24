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

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  const handleGoogleLogin = () => {
    console.log("Login with Google triggered.");
    // TODO: Add Google Auth integration
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submit logic
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden relative">
      {/* 🌀 Grid Lines Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ✨ Glowing Floating Dots */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-cyan-400 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* 🚀 Logo Top Left */}
      <div className="fixed top-6 left-6 z-50 flex items-center space-x-2">
        <div className="flex items-center gap-2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <Rocket className="h-8 w-8 text-cyan-400 relative" />
          <span className="text-white font-bold text-xl relative">
            NOVA
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Bid
            </span>
          </span>
        </div>
      </div>

      {/* 🔒 Auth Form Card */}
      <div className="relative z-10 w-full max-w-md bg-black/80 rounded-xl border border-cyan-500/20 p-8 shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 p-3 rounded-md bg-black border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 rounded-md bg-black border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 rounded-md bg-black border border-cyan-500/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-md flex items-center justify-center gap-2 font-semibold transition-transform hover:scale-105"
          >
            {isLogin ? (
              <>
                <LogIn className="w-5 h-5" /> Login
              </>
            ) : (
              <>
                <UserPlus className="w-5 h-5" /> Register
              </>
            )}
          </button>
        </form>

        {/* 🔁 Divider */}
        <div className="text-center text-gray-400 my-4">OR</div>

        {/* 🔐 Google Auth Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 py-3 rounded-md flex items-center justify-center gap-2 font-medium transition-transform hover:scale-105"
        >
          <ShieldCheck className="w-5 h-5" /> Sign in with Google
        </button>

        {/* 🔁 Toggle Form */}
        <p className="text-gray-400 text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-cyan-400 cursor-pointer hover:underline"
            onClick={toggleForm}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
