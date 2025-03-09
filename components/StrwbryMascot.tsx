import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const StrwbryMascot = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 5 }}
    >
      {/*Strwbry Body*/}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="relative w-30 h-30 md:w-50 md:h-50 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,111,156,0.5)] dark:drop-shadow-[0_0_15px_rgba(17,24,39,0.5)]"
      >
        <Image
          src="/strwbry-body.svg"
          alt="strwbry body"
          fill
          className="dark:filter dark:contrast-125"
        />

        {/* Eyes */}
        <div className="absolute top-13 md:top-18 flex w-12 h-12 md:w-20 md:h-20">
          <Image src="/eyes.svg" alt="eyes" fill />
        </div>

        {/* Blush */}
        <div className="absolute bottom-8 md:bottom-16 flex gap-8.5 md:gap-13">
          <div className="w-2 h-1 md:w-4 md:h-2 bg-strawberry-700 rounded-[50%] rotate-40 opacity-80"></div>
          <div className="w-2 h-1 md:w-4 md:h-2 bg-strawberry-700 rounded-[50%] -rotate-40 opacity-80"></div>
        </div>

        {/* Smile */}
        <div className="absolute bottom-4 md:bottom-8.5 flex gap-0">
          <div className="w-3 h-1.5 md:w-5 md:h-2.5 border-2 md:border-3 border-t-0 md:border-t-0 border-black rounded-bl-full rounded-br-full"></div>
          <div className="w-3 h-1.5 md:w-5 md:h-2.5 border-2 md:border-3 border-t-0 md:border-t-0 border-black rounded-bl-full rounded-br-full transform -translate-x-0.5"></div>
        </div>

        {/* Arms */}
        <div className="flex flex-row">
          <motion.div
            className="absolute -left-7.5 md:-left-13.25 top-17 md:top-30 w-6 h-1 md:w-10 bg-strawberry-700 rounded-full"
            style={{ transformOrigin: "right center" }}
            animate={{ rotate: [20, 0, 20] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          ></motion.div>
          <div className="absolute -left-2 md:-left-4 top-17 md:top-30 w-7 h-1 md:w-12 bg-strawberry-700 rounded-full"></div>
        </div>
        <div className="absolute -right-4 md:-right-7 top-16 md:top-27 w-9 h-1 md:w-15 bg-strawberry-700 rounded-full -rotate-20"></div>
      </motion.div>
    </motion.div>
  );
};

export default StrwbryMascot;
