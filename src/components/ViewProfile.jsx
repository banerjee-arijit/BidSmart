import {
  Gavel,
  BadgeDollarSign,
  Mail,
  UserCircle,
  TimerReset,
  XCircle,
  Gauge,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProfileDashboard() {
  const winRate = 0;

  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] bg-[url('/grid.svg')] bg-cover bg-center px-4 py-8 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#111827] border border-cyan-500/30 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={"www.gravatar.com/avatar/1?d=identicon"}
              alt="User"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-cyan-500 shadow-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-cyan-400">Arijit</h2>
              <p className="mt-1 flex items-center justify-center sm:justify-start text-gray-300 text-sm">
                <Mail className="mr-2 text-cyan-500" size={16} />
                arijit@gmail.com
              </p>
              <p className="mt-1 flex items-center justify-center sm:justify-start text-gray-400 text-sm">
                <TimerReset className="mr-2 text-cyan-400" size={16} />
                Joined on 13.09.2021
              </p>
            </div>
          </div>
        </motion.div>

        {/* Analytics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              label: "Total Bids Placed",
              value: 3,
              icon: <Gavel className="text-cyan-400" size={28} />,
            },
            {
              label: "Total Wins",
              value: 4,
              icon: <BadgeDollarSign className="text-cyan-400" size={28} />,
            },
            {
              label: "Active Bids",
              value: 3,
              icon: <UserCircle className="text-cyan-400" size={28} />,
            },
            {
              label: "Bids Lost",
              value: 4,
              icon: <XCircle className="text-red-500" size={28} />,
            },
            {
              label: "Win Rate",
              value: `${winRate}%`,
              icon: <Gauge className="text-green-400" size={28} />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1f2937] border border-cyan-500/20 p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>
                </div>
                {item.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
