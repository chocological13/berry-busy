import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface GoToTaskButtonProps {
  className?: string;
  icon: LucideIcon;
  buttonName: string;
  href: string;
}

const GoToButton: React.FC<GoToTaskButtonProps> = ({
  className,
  icon,
  buttonName,
  href,
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
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
      className={className}
    >
      <Link href={href}>
        <Button className="bg-strawberry-400 hover:bg-strawberry-500 dark:bg-strawberry-600 dark:hover:bg-strawberry-500 text-white">
          {React.createElement(icon, { className: "w-4 h-4 mr-2" })}
          {buttonName}
        </Button>
      </Link>
    </motion.div>
  );
};

export default GoToButton;
