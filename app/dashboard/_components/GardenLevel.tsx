import { motion } from "framer-motion";
import React from "react";

const RotateSpan = React.memo(({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {children}
    </motion.span>
  );
});

RotateSpan.displayName = "RotateSpan";
const GardenLevel = React.memo(({ level }: { level: number }) => {
  switch (level) {
    case 1:
      return <div className="text-3xl md:text-4xl">🍓</div>;
    case 2:
      return <div className="text-4xl md:text-5xl">🍓</div>;
    case 3:
      return <div className="text-4xl md:text-5xl flex">🍓🍓</div>;
    case 4:
      return (
        <div className="text-5xl md:text-6xl flex">
          <RotateSpan>🙌🏻</RotateSpan>
          <span>🍓</span>
          <RotateSpan>✨</RotateSpan>
          <span>🍓</span>
          <RotateSpan>👏🏻</RotateSpan>
        </div>
      );
    default:
      return <div className="text-4xl">🌱</div>;
  }
});

GardenLevel.displayName = "GardenLevel";

export default GardenLevel;
