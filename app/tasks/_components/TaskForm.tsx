import React from "react";
import { useForm } from "react-hook-form";
import {
  createTaskFormSchema,
  CreateTaskFormSchemaType,
} from "@/schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskData, Task } from "@/constants/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Calendar1Icon,
  CalendarIcon,
  ClockAlert,
  NotebookPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface TaskFormProps {
  isEditing: boolean;
  loading: boolean;
  task?: Task;
  onCreate?: (createTaskData: CreateTaskData) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  isEditing,
  loading,
  task,
  onCreate,
  onCancel,
}) => {
  let defaultValues = {};

  if (isEditing && task) {
    defaultValues = {
      task: task.task,
      priority: task.priority,
      due_date: task.due_date,
    };
  } else {
    defaultValues = {
      task: "",
      priority: "medium",
      due_date: undefined,
    };
  }

  const form = useForm<CreateTaskFormSchemaType>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: CreateTaskFormSchemaType) => {
    if (onCreate) {
      onCreate({
        task: values.task,
        priority: values.priority,
        due_date: values.due_date ? values.due_date.toDateString() : undefined,
      });
    }
    form.reset();
  };
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="p-5 rounded-2xl bg-cream-100/80 dark:bg-background/80 backdrop-blur-sm border-2 border-strawberry-200 dark:border-strawberry-700 shadow-lg"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <NotebookPen className="absolute z-1 left-3 top-1/2 transform -translate-y-1/2 text-gray-300 dark:text-gray-400" />
                    <Input
                      placeholder="What do you need to do?"
                      {...field}
                      className="pl-10 z-0 bg-cream-50 dark:bg-strawberry-800/60 backdrop-blur-sm border-2 border-strawberry-200 dark:border-strawberry-700 shadow-lg focus-visible:ring-strawberry-400 dark:focus-visible:ring-mint-800"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400 font-bold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem className="flex flex-wrap gap-3">
                <FormLabel className="flex-1 min-w-[200px]">
                  <label className="flex flex-row gap-x-0.5 align-middle items-center text-sm text-strawberry-500 dark:text-strawberry-300 mb-1">
                    <ClockAlert className="w-4 h-4" />
                    <span>Priority</span>
                  </label>
                </FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    {["low", "medium", "high"].map((p, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button
                          key={p}
                          type="button"
                          onClick={() => field.onChange(p)}
                          className={`flex-1 py-2 rounded-lg text-sm backdrop-blur-sm shadow-lg ${
                            field.value === p
                              ? `${
                                  p === "high"
                                    ? "bg-strawberry-200 dark:bg-red-700 text-strawberry-800 dark:text-strawberry-100"
                                    : p === "medium"
                                      ? "bg-cream-200 dark:bg-cream-700 text-cream-800 dark:text-cream-100"
                                      : "bg-mint-200 dark:bg-mint-700 text-mint-800 dark:text-mint-100"
                                }`
                              : "bg-cream-50 dark:bg-strawberry-800/60 text-strawberry-500 dark:text-strawberry-300"
                          }`}
                        >
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="due_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex-1 min-w-[200px]">
                  <label className="flex flex-row gap-x-0.5 align-middle items-center text-sm text-strawberry-500 dark:text-strawberry-300 mb-1">
                    <Calendar1Icon className="w-4 h-4" />
                    <span>Due Date</span>
                  </label>
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start pl-3 text-left bg-cream-50 dark:bg-strawberry-800/60 backdrop-blur-sm border-2 border-strawberry-200 dark:border-strawberry-700 focus-visible:ring-strawberry-400 dark:focus-visible:ring-mint-800",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                    <div className="flex justify-end pr-3 pb-3">
                      <Button
                        variant="link"
                        onClick={() => field.onChange(undefined)}
                        className="text-red-400 underline-offset-2 font-bold"
                      >
                        Reset
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage className="text-red-400 font-bold" />
              </FormItem>
            )}
          />
          <div className="flex space-x-3 pt-2">
            {onCancel && (
              <Button
                onClick={onCancel}
                variant="ghost"
                className="flex-1 w-full border-2 border-strawberry-200 dark:border-strawberry-700"
              >
                Cancel
              </Button>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-strawberry-400 hover:strawberry-500 dark:bg-strawberry-600 dark:hover:bg-strawberry-500 text-white font-bold"
              >
                Add Task
              </Button>
            </motion.div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default TaskForm;
