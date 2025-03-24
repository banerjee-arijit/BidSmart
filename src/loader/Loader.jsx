import { motion } from "framer-motion";
import { Gavel } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.div
        animate={{ rotate: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        className="mb-4"
      >
        <Gavel size={64} className="text-yellow-400" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-lg tracking-wider"
      >
        Bidding in progress...
      </motion.p>
    </div>
  );
}
