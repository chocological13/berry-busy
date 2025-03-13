import React from "react";
import { CheckCircle, CircleDashed, ClockIcon } from "lucide-react";
import { TaskMetrics } from "@/constants/types";
import MetricCard from "@/app/dashboard/_components/MetricCard";

interface DashboardMetricsCardProps {
  metrics: TaskMetrics;
}

const DashboardMetricsCards: React.FC<DashboardMetricsCardProps> = React.memo(
  ({ metrics }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          icon={<CheckCircle className="w-4 h-4 mr-2" />}
          title="Completed"
          value={metrics.completed}
          delay={0.3}
          bgClass="bg-cream-50/30 dark:bg-strawberry-800/30"
          borderClass="border-mint-300 dark:border-mint-800"
          textClass="text-mint-700 dark:text-mint-400"
        />

        <MetricCard
          icon={<ClockIcon className="w-4 h-4 mr-2" />}
          title="In Progress"
          value={metrics.inProgress}
          delay={0.4}
          bgClass="bg-cream-50/80 dark:bg-strawberry-800/30"
          borderClass="border-cream-300 dark:border-cream-800"
          textClass="text-cream-700 dark:text-cream-400"
        />

        <MetricCard
          icon={<CircleDashed className="w-4 h-4 mr-2" />}
          title="Pending"
          value={metrics.pending}
          delay={0.5}
          bgClass="bg-cream-50/80 dark:bg-strawberry-800/30"
          borderClass="border-strawberry-300 dark:border-strawberry-800"
          textClass="text-strawberry-700 dark:text-strawberry-400"
        />
      </div>
    );
  },
);

DashboardMetricsCards.displayName = "DashboardMetricsCards";

export default DashboardMetricsCards;
