import React, { useMemo } from "react";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import GoToButton from "@/components/GoToButton";
import DashboardMetricsCard from "@/app/dashboard/_components/DashboardMetricsCard";
import BerryGarden from "@/app/dashboard/_components/BerryGarden";
import { useTasks } from "@/hooks/useTasks";
import { useMetrics } from "@/hooks/useMetrics";
import LoaderSpinner from "@/components/LoaderSpinner";
import DueToday from "@/app/dashboard/_components/DueToday";
import { ListTodo } from "lucide-react";
import { useFloaties } from "@/hooks/useFloaties";
import FloatingStrwbry from "@/components/FloatingStrwbry";

const TaskDashboard = () => {
  const { fetchLoading, sortAndFilterTasks } = useTasks();
  const { metrics, level, levelMessage } = useMetrics();
  const { floaties } = useFloaties({ amount: 10 });

  const dueToday = useMemo(
    () => sortAndFilterTasks({ filter: "today" }),
    [sortAndFilterTasks],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-strawberry-50 to-white dark:bg-gradient-to-tr dark:from-background dark:via-background dark:to-strawberry-800 p-4 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floaties.map((float) => (
          <FloatingStrwbry floaties={float} key={float.id} />
        ))}
      </div>
      {fetchLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="px-5 flex flex-col gap-3 md:gap-5">
          <DashboardHeader />
          <GoToButton
            className="flex justify-end"
            icon={ListTodo}
            buttonName="Go To Task"
            href="/tasks"
          />
          <DashboardMetricsCard metrics={metrics} />
          <BerryGarden
            metrics={metrics}
            level={level}
            levelMessage={levelMessage}
          />
          <DueToday metrics={metrics} tasks={dueToday} />
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;
