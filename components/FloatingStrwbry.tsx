import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Floaties } from "@/constants/types";

interface FloatingStrwbryProps {
  floaties: Floaties;
}

const FloatingStrwbry: React.FC<FloatingStrwbryProps> = ({ floaties }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        y: [0, 100, 200],
        opacity: [0, 1, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: floaties.duration,
        delay: floaties.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        left: `${floaties.left}%`,
        top: `${floaties.top}%`,
        zIndex: 0,
      }}
    >
      <div
        className="relative"
        style={{ width: floaties.size, height: floaties.size }}
      >
        <Image src="/strwbry-glazed.svg" alt="strwbry cake" fill />
      </div>
    </motion.div>
  );
};

export default FloatingStrwbry;
