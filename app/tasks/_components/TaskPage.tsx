import React, { useState } from "react";
import TaskForm from "@/app/tasks/_components/TaskForm";
import { useTasks } from "@/hooks/useTasks";
import { useFloaties } from "@/hooks/useFloaties";
import FloatingStrwbry from "@/components/FloatingStrwbry";
import TaskHeader from "@/app/tasks/_components/TaskHeader";
import { motion } from "framer-motion";
import { Loader2, PlusIcon } from "lucide-react";
import TaskList from "@/app/tasks/_components/TaskList";

const TaskPage = () => {
  const {
    tasks,
    loading,
    fetchLoading,
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    sortAndFilterTasks,
  } = useTasks();

  const { floaties } = useFloaties({ amount: 10 });
  const [isAddingTask, setIsAddingTask] = useState<boolean>(false);
  const [filter, setFilter] = useState<
    "all" | "today" | "incomplete" | "completed"
  >("all");
  const [sort, setSort] = useState<"priority_asc" | "priority_desc" | "">("");

  const handleCancel = () => {
    setIsAddingTask(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-strawberry-50 to-cream-100 dark:bg-gradient-to-tr dark:from-strawberry-800 dark:to-strawberry-900 p-4 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floaties.map((float) => (
          <FloatingStrwbry floaties={float} key={float.id} />
        ))}
      </div>

      {/* Task Header */}
      <TaskHeader className="flex flex-col items-center mb-8 pt-10" />

      {/* TODO: Add filter and sorting here */}

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

      {/* Task list */}
      {fetchLoading ? (
        <div>
          <Loader2 className="w-8 h-8 animate-spin text-strawberry-400" />
        </div>
      ) : (
        <TaskList tasks={tasks} updateStatus={updateTaskStatus} />
      )}
    </div>
  );
};

export default TaskPage;
