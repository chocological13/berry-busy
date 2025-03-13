import { useTasks } from "@/hooks/useTasks";
import { TaskMetrics } from "@/constants/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const useMetrics = () => {
  const { tasks, sortAndFilterTasks, fetchLoading } = useTasks();

  const [metricsData, setMetricsData] = useState<{
    metrics: TaskMetrics;
    level: number;
    levelMessage: string;
    isCalculated: boolean;
  }>({
    metrics: {
      completed: 0,
      inProgress: 0,
      pending: 0,
      total: 0,
      completionRate: 0,
      dueToday: 0,
    },
    level: 0,
    levelMessage: "Plant the seeds of productivity today!",
    isCalculated: false,
  });

  // Prevent unnecessary recalculations
  const calculatedRef = useRef(false);

  const levelMessages = useMemo(
    () => [
      "Plant the seeds of productivity today!",
      "You're making progress! Keep growing!",
      "Your berry garden is blooming!",
      "Wow! Your productivity is berry impressive!",
      "Amazing job! Your garden is thriving!",
    ],
    [],
  );

  // Calculate metrics only when tasks are loaded
  useEffect(() => {
    if (!fetchLoading && tasks.length > 0 && !calculatedRef.current) {
      const completed = tasks.filter(
        (task) => task.status === "completed",
      ).length;
      const inProgress = tasks.filter(
        (task) => task.status === "in_progress",
      ).length;
      const pending = tasks.filter((task) => task.status === "pending").length;
      const total = tasks.length;

      const completionRate =
        total > 0 ? Math.round((completed / total) * 100) : 0;
      const userLevel = Math.min(Math.floor(completionRate / 20), 4);

      const dueToday = sortAndFilterTasks({
        filter: "today",
        sort: "",
      }).length;

      setMetricsData({
        metrics: {
          completed,
          inProgress,
          pending,
          total,
          completionRate,
          dueToday,
        },
        level: userLevel,
        levelMessage: levelMessages[userLevel],
        isCalculated: true,
      });

      calculatedRef.current = true;
    }
  }, [tasks, fetchLoading, sortAndFilterTasks, levelMessages]);

  // Manual recalculation function
  const recalculateMetrics = useCallback(() => {
    calculatedRef.current = false;

    if (tasks.length > 0) {
      const completed = tasks.filter(
        (task) => task.status === "completed",
      ).length;
      const inProgress = tasks.filter(
        (task) => task.status === "in_progress",
      ).length;
      const pending = tasks.filter((task) => task.status === "pending").length;
      const total = tasks.length;

      const completionRate =
        total > 0 ? Math.round((completed / total) * 100) : 0;
      const userLevel = Math.min(Math.floor(completionRate / 20), 4);

      const dueToday = sortAndFilterTasks({
        filter: "today",
        sort: "",
      }).length;

      setMetricsData({
        metrics: {
          completed,
          inProgress,
          pending,
          total,
          completionRate,
          dueToday,
        },
        level: userLevel,
        levelMessage: levelMessages[userLevel],
        isCalculated: true,
      });

      calculatedRef.current = true;
    }
  }, [tasks, sortAndFilterTasks, levelMessages]);

  return {
    metrics: metricsData.metrics,
    level: metricsData.level,
    levelMessage: metricsData.levelMessage,
    isCalculated: metricsData.isCalculated,
    recalculateMetrics,
  };
};
