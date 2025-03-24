import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";
import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import BGanimation from "../animations/BGanimation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {
    setUserId(params.get("userId") || "");
    setSecret(params.get("secret") || "");
  }, [params]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = form;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await account.updateRecovery(userId, secret, password, confirmPassword);
      toast.success("Password reset successful!");
      setTimeout(() => navigate("/authpage"), 2000);
    } catch (error) {
      console.error("Reset error:", error);
      toast.error("Failed to reset password.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

      {/* 🔷 Glowing Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <BGanimation />

      <div className="relative z-10 w-full max-w-lg bg-black/60 backdrop-blur-md border border-cyan-500/10 rounded-xl shadow-2xl p-8 md:p-10">
        <motion.h2
          className="text-2xl font-semibold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reset Your Password
        </motion.h2>

        <form onSubmit={handleReset} className="space-y-5">
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <ShieldCheck className="absolute top-3 left-3 text-cyan-400" />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-black border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
