import { motion } from "framer-motion";
import { Gavel } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      <motion.div
        className="absolute w-72 h-72 bg-[#00b8db] blur-3xl opacity-20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        animate={{
          rotate: [0, -20, 20, -10, 0],
          y: [0, -10, 0],
          boxShadow: ["0 0 0px #facc15", "0 0 20px #00b8db", "0 0 0px #00b8db"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-6"
      >
        <Gavel size={72} className="text-purple-500 drop-shadow-xl" />
      </motion.div>

      <motion.p
        className="text-xl tracking-wide text-zinc-300 font-semibold font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Bidding in progress...
      </motion.p>
    </div>
  );
}
