// Optimized FeaturesSection for fast loading
import { motion } from "framer-motion";
import React from "react";
import {
  Video,
  Brain,
  Shield,
  Zap,
  Users,
  Lock,
  DollarSign,
  Sparkles,
  Bot,
  BarChart3,
  Share2,
  Eye,
  Wallet,
  Key,
} from "lucide-react";

const features = [
  {
    title: "Real-time Auction Experience",
    description:
      "Immerse yourself in live auctions with crystal-clear video and audio streaming, enabling real-time bidding and instant communication with sellers",
    badge: "Live Streaming",
    badgeIcon: Video,
    icons: [
      { icon: Video, color: "text-cyan-400", label: "HD Streaming" },
      { icon: Users, color: "text-purple-400", label: "Multi-User" },
      { icon: Share2, color: "text-pink-400", label: "Instant Share" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-businessman-working-with-statistics-on-multiple-screens-42923-large.mp4",
  },
  {
    title: "Live Auction Control Center",
    description:
      "Manage live auctions with real-time controls, monitor bids, and engage with participants seamlessly using our intuitive dashboard.",
    badge: "Live Auction",
    badgeIcon: Zap,
    icons: [
      { icon: Users, color: "text-cyan-300", label: "Live Bidders" },
      { icon: Eye, color: "text-indigo-400", label: "Monitor in Real-Time" },
      { icon: DollarSign, color: "text-green-400", label: "Live Bidding" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hologram-data-code-information-from-futuristic-technology-38717-large.mp4",
  },
  {
    title: "Secure Payment Infrastructure",
    description:
      "Enterprise-grade security with blockchain technology and multi-factor authentication ensures your transactions are always protected",
    badge: "Secure Payments",
    badgeIcon: Shield,
    icons: [
      { icon: Lock, color: "text-red-400", label: "Encrypted" },
      { icon: Wallet, color: "text-blue-400", label: "Instant Transfer" },
      { icon: Key, color: "text-green-400", label: "Multi-Factor Auth" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-typing-on-a-keyboard-42924-large.mp4",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,184,219,0.08),rgba(255,255,255,0))]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#021017] border border-cyan-500/20 backdrop-blur-sm mb-6">
            <Zap size={16} className="text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">
              Smart Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent mb-4">
            Next-Gen Auction Platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of online auctions with cutting-edge tech.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500"
            >
              <div className="bg-[#041c24]/60 border border-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 hover:shadow-[0_0_30px_#00b8db66] transition-all">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Left: Text */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#021017] border border-cyan-500/20 backdrop-blur-sm">
                      <feature.badgeIcon
                        size={16}
                        className="text-cyan-400 animate-pulse"
                      />
                      <span className="text-sm font-medium text-cyan-200">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-100">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {feature.icons.map((icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="flex items-center gap-2 bg-[#0b2a34] border border-cyan-500/10 px-3 py-2 rounded-lg"
                        >
                          <icon.icon className={`${icon.color}`} size={16} />
                          <span className="text-sm text-gray-300">
                            {icon.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Video */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
                      <video
                        loading="lazy"
                        playsInline
                        muted
                        loop
                        autoPlay
                        poster={feature.poster}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      >
                        <source src={feature.videoUrl} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00000088] to-transparent" />
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button className="p-2 bg-black/60 border border-cyan-500/10 backdrop-blur-sm rounded-lg hover:bg-[#0e2e3a] transition">
                          <Eye size={18} className="text-cyan-300" />
                        </button>
                        <button className="p-2 bg-black/60 border border-cyan-500/10 backdrop-blur-sm rounded-lg hover:bg-[#0e2e3a] transition">
                          <DollarSign size={18} className="text-green-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Light glow (reduced intensity) */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
