import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "";
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "";

  return (
    <footer className={className}>
      <p>Made by </p>
      <motion.div
        whileHover={{
          y: -5,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.3,
            },
          },
        }}
        whileTap={{ scale: 0.98 }}
        className="font-semibold hunderline-offset-2 underline text-strawberry-600 dark:text-strawberry-200"
      >
        <Link href={githubUrl}>{githubUsername}</Link>
      </motion.div>{" "}
      <p>with 🩷 for berry busy people</p>
    </footer>
  );
};

export default Footer;
