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

const TaskDashboard = () => {
  const { fetchLoading, sortAndFilterTasks } = useTasks();
  const { metrics, level, levelMessage } = useMetrics();

  const dueToday = useMemo(
    () => sortAndFilterTasks({ filter: "today" }),
    [sortAndFilterTasks],
  );

  return (
    <>
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
    </>
  );
};

export default TaskDashboard;
