import React from "react";
import { motion } from "framer-motion";
import { TaskMetrics } from "@/constants/types";
import { Progress } from "@/components/ui/progress";
import GardenLevel from "@/app/dashboard/_components/GardenLevel";

interface BerryGardenProps {
  metrics: TaskMetrics;
  level: number;
  levelMessage: string;
}

const BerryGarden: React.FC<BerryGardenProps> = React.memo(
  ({ metrics, level, levelMessage }) => {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative p-6 bg-cream-50/50 dark:bg-strawberry-800/30 backdrop-blur-sm rounded-xl border-2 border-strawberry-200 dark:border-strawberry-700 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-strawberry-300 dark:from-mint-700 via-pink-400 to-strawberry-300 dark:to-mint-700 animate-pulse"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-0 w-full h-full bg-contain bg-no-repeat bg-center bg-blend-normal bg-[url('/grass.svg')]"></div>
        </div>

        <div className="relative text-center md:mb-10 mb-3">
          <h3 className="text-xl font-bold font-display text-strawberry-600 dark:text-strawberry-300 mb-1">
            Your Strawberries Garden~
          </h3>
          <p className="text-strawberry-500 dark:text-strawberry-400 text-xs mb-5">
            Complete your tasks to tend to your garden 💦
          </p>
          <p className="text-strawberry-500 dark:text-strawberry-400 md:mb-3 font-bold">
            {levelMessage}
          </p>
        </div>

        <div className="relative flex justify-center items-end pb-4">
          {metrics.total === 0 ? (
            <div className="text-center text-strawberry-400 dark:text-strawberry-500">
              <p className="text-5xl">🌱</p>
              <p>Plant your first task to start growing!</p>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{
                scale: 1,
                y: 0,
              }}
              transition={{ delay: 0.2 + level * 0.1 }}
              className="mx-1 relative"
            >
              <GardenLevel level={level} />
            </motion.div>
          )}
        </div>

        <div className="relative mt-4">
          <div className="mb-1 flex justify-between text-xs text-strawberry-500 dark:text-strawberry-400">
            <span>0%</span>
            <span>Task Completion</span>
            <span>100%</span>
          </div>
          <Progress
            value={metrics.completionRate}
            className="h-3 bg-cream-200 dark:bg-strawberry-900 [&>div]:bg-strawberry-500 dark:[&>div]:bg-mint-300"
          />
        </div>
      </motion.div>
    );
  },
);

BerryGarden.displayName = "BerryGarden";

export default BerryGarden;
