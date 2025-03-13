import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";

const MetricCard = React.memo(
  ({
    icon,
    title,
    value,
    delay,
    bgClass,
    textClass,
    borderClass,
  }: {
    icon: React.ReactNode;
    title: string;
    value: number;
    delay: number;
    bgClass: string;
    textClass: string;
    borderClass: string;
  }) => {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay }}
        whileHover={{ y: -5 }}
      >
        <Card className={`${bgClass} backdrop-blur-sm ${borderClass}`}>
          <CardHeader>
            <CardTitle
              className={`flex flex-row text-sm font-medium items-center ${textClass}`}
            >
              {icon}
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${textClass}`}>
              {value}
              <span className="text-sm ml-2 font-normal">tasks</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  },
);

MetricCard.displayName = "MetricCard";

export default MetricCard;
