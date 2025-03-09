import React, { useMemo } from "react";
import { motion } from "framer-motion";
import StrwbryMascot from "@/components/StrwbryMascot";

const quotes = [
  "You're one berry away from a great day! 🍓",
  "Stay sweet and check off your tasks! ✨",
  "One task at a time, one berry at a time! 🍓",
  "Pick your priorities like the ripest strawberries! 🍓",
  "Sweet success starts with small steps! 🌱",
  "You're jam-packed with potential! 🍓",
];

const TaskHeader = ({ className }: { className?: string }) => {
  const randomQuote = useMemo(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  return (
    <header className={className}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="absolute inset-0 blur-md bg-strawberry-100 dark:bg-strawberry-900/30 rounded-full scale-75 opacity-0 dark:opacity-30 -z-10"></div>
        <StrwbryMascot />
      </motion.div>
      <motion.p
        key={randomQuote}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center text-xl font-semibold text-strawberry-500 dark:text-strawberry-200 dark:drop-shadow-[0_0_15px_rgba(17,24,39,0.5)]"
      >
        {randomQuote}
      </motion.p>
    </header>
  );
};

export default TaskHeader;
