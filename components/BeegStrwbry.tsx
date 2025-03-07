import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BeegStrwbry = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`flex flex-col items-center mb-6 ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 relative mb-2"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Image src="/icons/strwbry-icon.svg" alt="icon" fill priority />
      </motion.div>
      <h1 className="text-3xl md:text-4xl font-display text-strawberry-600 dark:text-strawberry-200">
        Berry Busy
      </h1>
    </motion.div>
  );
};

export default BeegStrwbry;
