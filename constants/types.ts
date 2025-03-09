export type Floaties = {
  id: number;
  size: number;
  delay: number;
  duration: number;
  left: number;
  top: number;
};

export type Task = {
  id: string;
  user_id: string;
  task: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  due_date: string;
  color: string;
  created_at: string;
  updated_at: string;
};

export type CreateTaskData = {
  task: string;
  priority?: string;
  due_date?: string;
  color?: string;
};

export type UpdateTaskData = {
  task?: string;
  priority?: string;
  due_date?: string;
  color?: string;
};

export type Category = {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
};
