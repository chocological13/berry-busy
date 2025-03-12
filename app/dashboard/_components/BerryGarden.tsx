import React from "react";
import { motion } from "framer-motion";
import { useMetrics } from "@/hooks/useMetrics";

const BerryGarden = () => {
  const { metrics, level, levelMessage } = useMetrics();

  const RotateSpan = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {children}
      </motion.span>
    );
  };
  const getGarden = (level: number) => {
    switch (level) {
      case 1:
        return <div className="text-4xl">🍓</div>;
      case 2:
        return <div className="text-5xl">🍓</div>;
      case 3:
        return <div className="text-5xl flex">🍓🍓</div>;
      case 4:
        return (
          <div className="text-6xl flex">
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
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative mt-4 p-6 bg-cream-50/80 dark:bg-strawberry-800/30 backdrop-blur-sm rounded-xl border-2 border-strawberry-200 dark:border-strawberry-700 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-0 w-full h-full bg-contain bg-no-repeat bg-center bg-blend-normal bg-[url('/grass.svg')]"></div>
      </div>

      <div className="relative text-center mb-6">
        <h3 className="text-xl font-bold text-strawberry-600 dark:text-strawberry-300">
          Your Berry Garden
        </h3>
        <p className="text-strawberry-500 dark:text-strawberry-400">
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
          <>
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{
                scale: 1,
                y: 0,
              }}
              transition={{ delay: 0.2 + level * 0.1 }}
              className="mx-1 relative"
            >
              {getGarden(level)}
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default BerryGarden;
