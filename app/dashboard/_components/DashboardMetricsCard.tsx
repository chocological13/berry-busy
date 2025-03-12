import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CircleDashed, ClockIcon } from "lucide-react";
import { TaskMetrics } from "@/constants/types";

interface DashboardMetricsCardProps {
  metrics: TaskMetrics;
}

const DashboardMetricsCard: React.FC<DashboardMetricsCardProps> = ({
  metrics,
}) => {
  const CardMotion = ({
    children,
    delay,
  }: {
    children: React.ReactNode;
    delay: number;
  }) => {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay }}
        whileHover={{ y: -5 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardMotion delay={0.3}>
        <Card className="bg-cream-50/80 dark:bg-strawberry-800/30 backdrop-blur-sm border-mint-300 dark:border-mint-800">
          <CardHeader>
            <CardTitle className="flex flex-row text-sm font-medium items-center text-mint-700 dark:text-mint-400">
              <CheckCircle className="w-4 h-4 mr-2" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-mint-700 dark:text-mint-400">
              {metrics.completed}
              <span className="text-sm ml-2 font-normal">tasks</span>
            </div>
          </CardContent>
        </Card>
      </CardMotion>
      <CardMotion delay={0.4}>
        <Card className="bg-cream-50/80 dark:bg-strawberry-800/30 backdrop-blur-sm border-cream-300 dark:border-cream-800">
          <CardHeader>
            <CardTitle className="flex flex-row text-sm font-medium items-center text-cream-700 dark:text-cream-400">
              <ClockIcon className="w-4 h-4 mr-2" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cream-700 dark:text-cream-400">
              {metrics.inProgress}
              <span className="text-sm ml-2 font-normal">tasks</span>
            </div>
          </CardContent>
        </Card>
      </CardMotion>
      <CardMotion delay={0.5}>
        <Card className="bg-cream-50/80 dark:bg-strawberry-800/30 backdrop-blur-sm border-strawberry-300 dark:border-strawberry-800">
          <CardHeader>
            <CardTitle className="flex flex-row text-sm font-medium items-center text-strawberry-700 dark:text-strawberry-400">
              <CircleDashed className="w-4 h-4 mr-2" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-strawberry-700 dark:text-strawberry-400">
              {metrics.pending}
              <span className="text-sm ml-2 font-normal">tasks</span>
            </div>
          </CardContent>
        </Card>
      </CardMotion>
    </div>
  );
};

export default DashboardMetricsCard;
