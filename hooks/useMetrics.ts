import { useTasks } from "@/hooks/useTasks";
import { TaskMetrics } from "@/constants/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const useMetrics = () => {
  const { tasks, sortAndFilterTasks, fetchLoading } = useTasks();
  const [metrics, setMetrics] = useState<TaskMetrics>({
    completed: 0,
    inProgress: 0,
    pending: 0,
    total: 0,
    completionRate: 0,
    dueToday: 0,
  });
  const [level, setLevel] = useState<number>(0);
  const [levelMessage, setLevelMessage] = useState<string>("");
  const hasCalculated = useRef<boolean>(false);

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

  // Only calculate metrics once after tasks are loaded
  useEffect(() => {
    // Only calculate if we haven't already and tasks are loaded
    if (!hasCalculated.current && !fetchLoading && tasks.length > 0) {
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

      setMetrics({
        completed,
        inProgress,
        pending,
        total,
        completionRate,
        dueToday,
      });

      setLevel(userLevel);
      setLevelMessage(levelMessages[userLevel]);

      // Mark that we've calculated metrics
      hasCalculated.current = true;
    }
  }, [tasks, fetchLoading, sortAndFilterTasks, levelMessages]);

  // Recalculate only when explicitly asked to
  const recalculateMetrics = () => {
    hasCalculated.current = false;
  };

  return {
    metrics,
    level,
    levelMessage,
    recalculateMetrics,
  };
};
