import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Task, TaskMetrics } from "@/constants/types";
import { ArrowRight, CirclePlus, ListTodo, ScanEye } from "lucide-react";
import GoToButton from "@/components/GoToButton";

interface DueTodayProps {
  metrics: TaskMetrics;
  tasks: Task[];
}

const DueToday: React.FC<DueTodayProps> = ({ metrics, tasks }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="border-strawberry-300 dark:border-strawberry-700 rounded-xl bg-cream-100/50 dark:bg-strawberry-800/30">
        <CardHeader>
          <CardTitle className="text-xl text-strawberry-600 dark:text-strawberry-300">
            Today&apos;s Focus
          </CardTitle>
        </CardHeader>
        <CardContent>
          {metrics.dueToday > 0 ? (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center text-strawberry-500 dark:text-strawberry-200 gap-1">
                <ScanEye />
                <p>
                  You have <span className="font-bold">{metrics.dueToday}</span>{" "}
                  tasks due today
                </p>
              </div>
              <div className="space-y-1 mb-2 text-strawberry-400 dark:text-strawberry-100 border border-dashed rounded-xl p-3">
                <h3 className="text-strawberry-400 dark:text-strawberry-100">
                  Overview:
                </h3>
                {tasks.map((task, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex flex-row gap-1 items-center">
                      <ArrowRight className="w-5 h-5 font-bold" />
                      {task.task}
                    </div>
                  </motion.div>
                ))}
              </div>
              <GoToButton
                icon={ListTodo}
                buttonName="View All Tasks"
                href="/tasks"
              />
            </motion.div>
          ) : (
            <div>
              <p>No tasks due for today! Rest time? 😴</p>
              <GoToButton
                icon={CirclePlus}
                buttonName="Have something to do?"
                href="/tasks"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DueToday;
