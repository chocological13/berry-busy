import { useEffect, useState } from "react";
import { CreateTaskData, Task, UpdateTaskData } from "@/constants/types";
import { useAuthContext } from "@/context/auth-provider";
import { supabase } from "@/utils/supabase/client";
import { toast } from "sonner";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const { user } = useAuthContext();

  // initial fetch
  useEffect(() => {
    if (user) {
      try {
        setFetchLoading(true);
        fetchTasks();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
        }
      } finally {
        setFetchLoading(false);
      }
    }
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: true });

      if (error) throw error;
      if (data) setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
      toast.error("Error fetching tasks 😔");
    }
  };

  // Create a new task
  const createTask = async (taskData: CreateTaskData) => {
    try {
      setLoading(false);

      const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...taskData, user_id: user?.id }])
        .select();

      if (error) {
        throw error;
      } else {
        toast.success("New task created! 🩷");
      }
      fetchTasks();
      return data;
    } catch (error) {
      console.error("Error creating task: ", error);
      toast.error("Error creating task 😔");
    } finally {
      setLoading(false);
    }
  };

  // Update task
  const updateTask = async ({
    id,
    taskData,
  }: {
    id: string;
    taskData: UpdateTaskData;
  }) => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from("tasks")
        .update({ ...taskData })
        .eq("id", id)
        .eq("user_id", user?.id);

      if (error) {
        throw error;
      } else {
        toast.success("Task updated! 🩷");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error updating task: ", error);
      toast.error("Error updating task 😔");
    } finally {
      setLoading(false);
    }
  };

  // Update task status
  const updateTaskStatus = async ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    try {
      const { error } = await supabase
        .from("tasks")
        .update({ status, updated_at: new Date() })
        .eq("id", id)
        .eq("user_id", user?.id);

      if (error) {
        throw error;
      } else {
        if (status === "in_progress") status = "in progress";
        toast.success("Task status updated to " + status + " 🩷");
      }
      fetchTasks();
    } catch (error) {
      console.error("Error updating task status: ", error);
      toast.error("Error updating task status 😔");
    }
  };

  // Delete task
  const deleteTask = async (id: string) => {
    try {
      setLoading(true);

      const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
        .eq("user_id", user?.id);

      if (error) {
        throw error;
      } else {
        toast.success("Task successfully deleted! 🩷");
      }
    } catch (error) {
      console.error("Error deleting task: ", error);
      toast.error("Error deleting task 😔");
    } finally {
      setLoading(false);
    }
  };

  const sortAndFilterTasks = ({
    filter,
    sort,
  }: {
    filter?: string;
    sort?: string;
  }) => {
    // filters
    if (filter === "today") {
      const today = new Date().toISOString().split("T")[0];
      setTasks(tasks.filter((task) => task.due_date === today));
    } else if (filter === "incomplete") {
      setTasks(tasks.filter((task) => task.status !== "completed"));
    } else if (filter === "completed") {
      setTasks(tasks.filter((task) => task.status === "completed"));
    } else {
      // do nothing
    }

    // sorting priority
    const priorityMap: Record<"low" | "medium" | "high", number> = {
      low: 1,
      medium: 2,
      high: 3,
    };

    // sort
    if (sort === "priority_asc") {
      setTasks(
        tasks.sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]),
      );
    } else if (sort === "priority_desc") {
      setTasks(
        tasks.sort((a, b) => priorityMap[b.priority] - priorityMap[a.priority]),
      );
    } else {
      // do nothing
    }
  };

  return {
    tasks,
    loading,
    fetchLoading,
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    sortAndFilterTasks,
  };
};
