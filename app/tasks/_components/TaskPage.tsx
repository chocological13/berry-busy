"use client";
import React, { useEffect, useState } from "react";
import TaskForm from "@/app/tasks/_components/TaskForm";
import { useTasks } from "@/hooks/useTasks";
import { useFloaties } from "@/hooks/useFloaties";
import FloatingStrwbry from "@/components/FloatingStrwbry";
import TaskHeader from "@/app/tasks/_components/TaskHeader";
import { motion } from "framer-motion";
import {
  Calendar1,
  CircleX,
  HomeIcon,
  ListChecks,
  PlusIcon,
} from "lucide-react";
import TaskList from "@/app/tasks/_components/TaskList";
import { Button } from "@/components/ui/button";
import { Task } from "@/constants/types";
import LoaderSpinner from "@/components/LoaderSpinner";
import GoToButton from "@/components/GoToButton";

const TaskPage = () => {
  const {
    tasks,
    loading,
    fetchLoading,
    createTask,
    // updateTask,
    updateTaskStatus,
    deleteTask,
    sortAndFilterTasks,
  } = useTasks();

  const { floaties } = useFloaties({ amount: 10 });
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");
  // const [sort, setSort] = useState<"priority_asc" | "priority_desc" | "">("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filtered = sortAndFilterTasks({ filter, sort: "" });
    setFilteredTasks(filtered);
  }, [filter, tasks, sortAndFilterTasks]);

  const handleCancel = () => {
    setIsAddingTask(false);
  };

  const getFilterButton = (filterOption: string) => {
    switch (filterOption) {
      case "today":
        return <Calendar1 className="mr-1" />;
      case "incomplete":
        return <CircleX className="mr-1" />;
      case "completed":
        return <ListChecks className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-strawberry-50 to-cream-100 dark:bg-gradient-to-tr dark:from-strawberry-800 dark:to-background p-4 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floaties.map((float) => (
          <FloatingStrwbry floaties={float} key={float.id} />
        ))}
      </div>

      {/* Task Header */}
      <TaskHeader className="flex flex-col items-center mb-8 pt-10" />

      <GoToButton
        className="flex justify-end mb-4"
        icon={HomeIcon}
        buttonName="Back To Home"
        href="/dashboard"
      />

      {/* Add Task Area */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        {!isAddingTask ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsAddingTask(true)}
            className="w-full p-4 rounded-2xl bg-white/70 dark:bg-background/50 backdrop-blur-sm border-2 border-dashed border-strawberry-200 dark:border-strawberry-700 flex items-center justify-center text-strawberry-500 dark:text-strawberry-300 font-medium hover:bg-white/90 dark:hover:bg-strawberry-800/70 transition-all"
          >
            <PlusIcon size={20} className="mr-2" />
            Add new berry task~
          </motion.button>
        ) : (
          <TaskForm
            isEditing={false}
            loading={loading}
            onCreate={createTask}
            onCancel={handleCancel}
          />
        )}
      </motion.div>

      {/* TODO: Add sorting here */}
      {/* Filter buttons */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-6 overflow-x-auto gap-1 md:gap-2"
      >
        {["all", "today", "incomplete", "completed"].map((filterOption, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="ghost"
              onClick={() => setFilter(filterOption)}
              className={`rounded-full px-4 whitespace-nowrap ${
                filterOption === filter
                  ? "bg-strawberry-200 dark:bg-mint-700 text-strawberry-700 dark:text-cream-50"
                  : "text-strawberry-500 dark:text-strawberry-300 hover:bg-strawberry-100 dark:hover:bg-strawberry-800"
              }`}
            >
              {getFilterButton(filterOption)}
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Task list */}
      {fetchLoading ? (
        <LoaderSpinner />
      ) : (
        <TaskList
          tasks={filteredTasks}
          loading={fetchLoading}
          updateStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default TaskPage;
