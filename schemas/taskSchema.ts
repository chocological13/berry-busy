import { z } from "zod";

export const createTaskFormSchema = z.object({
  task: z.string().min(1, "Must provide what you need to do!"),
  priority: z.enum(["low", "medium", "high"]),
  due_date: z.date().min(new Date(), "Must be tomorrow onwards!").optional(),
});

export type CreateTaskFormSchemaType = z.infer<typeof createTaskFormSchema>;
