import React from "react";
import { motion } from "framer-motion";
import StrwbryMascot from "@/components/StrwbryMascot";
import { format } from "date-fns";

const DashboardHeader = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center mb-8 pt-10"
    >
      <StrwbryMascot />

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center"
      >
        <h1 className="text-3xl font-bold text-strawberry-600 dark:text-strawberry-400">
          Hello!! How are you today?
        </h1>
        <p className="mt-2 text-strawberry-500 dark:text-strawberry-300 text-sm">
          {format(new Date(), "EEEE, MMMM do, yyyy")}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default DashboardHeader;
