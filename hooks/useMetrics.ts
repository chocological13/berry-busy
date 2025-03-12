import { useTasks } from "@/hooks/useTasks";
import { TaskMetrics } from "@/constants/types";
import { useEffect, useState } from "react";

export const useMetrics = () => {
  const { tasks, sortAndFilterTasks } = useTasks();
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

  const levelMessages = [
    "Plant the seeds of productivity today!",
    "You're making progress! Keep growing!",
    "Your berry garden is blooming!",
    "Wow! Your productivity is berry impressive!",
    "Amazing job! Your garden is thriving!",
  ];
  useEffect(() => {
    if (tasks.length > 0) {
      const completed = tasks.filter(
        (task) => task.status === "completed",
      ).length;
      const inProgress = tasks.filter(
        (task) => task.status === "in_progress",
      ).length;
      const pending = tasks.filter((task) => task.status === "pending").length;
      const total = tasks.length;

      // completion rate
      const completionRate =
        total > 0 ? Math.round((completed / total) * 100) : 0;

      // due today
      const dueToday = sortAndFilterTasks({
        filter: "today",
        sort: "",
      }).length;

      // set level
      const userLevel = Math.min(Math.floor(completionRate / 20), 4); // level 0 - 4

      setMetrics({
        completed,
        inProgress,
        pending,
        total,
        completionRate,
        dueToday,
      });

      setLevel(userLevel);

      setLevelMessage(levelMessages[level]);
    }
  }, [tasks]);

  return {
    metrics,
    level,
    levelMessage,
  };
};
