import React from "react";
import { Task } from "@/constants/types";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CalendarClock,
  CalendarOff,
  CheckIcon,
  CircleDashed,
  Ellipsis,
  Sparkles,
  Trash2,
} from "lucide-react";
import { format } from "date-fns";

interface TaskListProps {
  tasks: Task[];
  updateStatus: ({ id, status }: { id: string; status: string }) => void;
  deleteTask: (id: string) => void;
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  updateStatus,
  deleteTask,
}) => {
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
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-strawberry-400 dark:bg-strawberry-600";
      case "medium":
        return "bg-cream-400 dark:bg-cream-600";
      default:
        return "bg-mint-400 dark:bg-mint-600";
    }
  };

  const getStatusBorderColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-mint-200 dark:border-mint-700";
      case "in-progress":
        return "border-cream-200 darl:border-cream-700";
      default:
        return "border-strawberry-200 dark:border-strawberry-700";
    }
  };

  const getStatusToggleButtonColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-mint-400 dark:bg-mint-600";
      case "in_progress":
        return "bg-cream-500 dark:bg-cream-700";
      default:
        return "border-2 border-strawberry-300 dark:border-strawberry-600 bg-transparent";
    }
  };

  const getStatusToggleButtonIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckIcon className="text-white text-lg font-bold" />;
      case "in_progress":
        return <Ellipsis className="text-white text-lg font-bold" />;
      default:
        return (
          <CircleDashed className="text-black dark:text-white text-lg font-bold" />
        );
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
              <motion.div
                whileHover={{ y: -2 }}
                className={`p-4 rounded-2xl bg-white/80 dark:bg-background/50 backdrop-blur-sm shadow-md border-2 ${getStatusBorderColor(
                  task.status,
                )}`}
              >
                <div className="flex items-center">
                  {/* Status toggle */}
                  <Button
                    onClick={() =>
                      handleStatusChange({
                        id: task.id,
                        prevStatus: task.status,
                      })
                    }
                    className={`mt-1 mr-3 min-1-3 min-h-3 flex flex-shrink-0 items-center justify-center transition-colors ${getStatusToggleButtonColor(
                      task.status,
                    )}`}
                  >
                    {getStatusToggleButtonIcon(task.status)}
                  </Button>

                  {/* Task Content */}
                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-[7fr_1fr_3fr_1fr] items-center md:gap-2 gap-3">
                      <h3
                        className={`font-medium text-lg text-strawberry-800 dark:text-strawberry-200 text-wrap ${
                          task.status === "completed" ? "line-through" : ""
                        }`}
                      >
                        {task.task}
                      </h3>

                      {/* Priority color */}
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${getPriorityColor(task.priority)}`}
                      />

                      {/* Due Date */}
                      <div className="flex flex-row items-center justify-center text-xs text-strawberry-500 dark:text-strawberry-300">
                        {task.due_date ? (
                          <>
                            <CalendarClock className="mr-1" />
                            {format(new Date(task.due_date), "PPP")}
                          </>
                        ) : (
                          <CalendarOff className="w-4 h-4 text-gray-300" />
                        )}
                      </div>

                      {/* Action */}
                      <Button
                        onClick={() => deleteTask(task.id)}
                        className="p-1.5 w-10 rounded-full bg-transparent text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Task completion effect */}
              {task.status === "completed" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 bg-mint-300 dark:bg-mint-700 rounded-full p-0.5 shadow-sm z-10"
                >
                  <Sparkles size={14} className="text-white" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default TaskList;
