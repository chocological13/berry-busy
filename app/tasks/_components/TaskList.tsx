import React from "react";
import { Task } from "@/constants/types";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, CheckIcon, CircleDashed, Ellipsis } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  updateStatus: ({ id, status }: { id: string; status: string }) => {};
}
const TaskList: React.FC<TaskListProps> = ({ tasks, updateStatus }) => {
  const handleStatusChange = ({
    id,
    prevStatus,
  }: {
    id: string;
    prevStatus: string;
  }) => {
    switch (prevStatus) {
      case "pending":
        updateStatus({ id: id, status: "in_progress" });
        return;
      case "in_progress":
        updateStatus({ id: id, status: "completed" });
        return;
      default:
        updateStatus({ id: id, status: "pending" });
        return;
    }
  };
  const getPriorityColor = (priority: "low" | "madium" | "high") => {
    switch (priority) {
      case "high":
        return "bg-strawberry-400 dark:bg-strawberry-600";
    }
  };
  return (
    <AnimatePresence>
      {tasks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative text-center py-10 bg-white/60 dark:bg-background/50 rounded-lg border-1 dark:border-strawberry-600 overflow-hidden space-y-2"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-strawberry-300 dark:from-mint-700 via-pink-400 to-strawberry-300 dark:to-mint-700 animate-pulse"></div>
          <div className="text-strawberry-600 dark:text-strawberry-300 mb-2 text-5xl">
            😶‍🌫️
          </div>
          <h3 className="text-xl text-strawberry-600 dark:text-strawberry-300">
            No tasks here yet!
          </h3>
          <p className="text-strawberry-400 dark:text-strawberry-500">
            Add a task to get started with your berry productive day! 🤓👆🏻
          </p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <motion.div>
                <div className="flex items-start">
                  {/* Status toggle */}
                  <Button
                    onClick={() =>
                      handleStatusChange({
                        id: task.id,
                        prevStatus: task.status,
                      })
                    }
                    className={`mt-1 mr-3 min-1-3 min-h-3 flex flex-shrink-0 items-center justify-center transition-colors ${
                      task.status === "completed"
                        ? "bg-mint-400 dark:bg-mint-600"
                        : task.status === "in_progress"
                          ? "bg-cream-500 dark:bg-cream-700"
                          : "border-2 border-strawberry-300 dark:border-strawberry-600 bg-transparent"
                    }`}
                  >
                    {task.status === "completed" ? (
                      <CheckIcon className="text-white text-lg font-bold" />
                    ) : task.status === "in_progress" ? (
                      <Ellipsis className="text-white text-lg font-bold" />
                    ) : (
                      <CircleDashed className="text-black dark:text-white text-lg font-bold" />
                    )}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default TaskList;
