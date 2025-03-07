import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Lock, Mail } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "@/schemas/authSchema";
import { motion } from "framer-motion";

interface AuthFormProps {
  loading: boolean;
  handleSubmit: (values: FormSchemaType) => void;
  form: UseFormReturn<FormSchemaType>;
  authMode: "signin" | "signup";
}
const AuthForm: React.FC<AuthFormProps> = ({
  loading,
  handleSubmit,
  form,
  authMode,
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-strawberry-500 dark:text-strawberry-200">
                <Mail size={16} className="text-strawberry-400" />
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-cream-50 dark:bg-strawberry-800/60 border-2 border-strawberry-200 dark:border-strawberry-700 dark:text-strawberry-100 rounded-lg h-12 pl-4 focus-visible:ring-strawberry-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-strawberry-500 dark:text-strawberry-200">
                <Lock size={16} className="text-strawberry-400" />
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  className="bg-cream-50 dark:bg-strawberry-800/60 border-2 border-strawberry-200 dark:border-strawberry-700 dark:text-strawberry-100 rounded-lg h-12 pl-4 focus-visible:ring-strawberry-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-strawberry-200 dark:bg-strawberry-500 hover:bg-strawberry-600 text-gray-800 dark:text-cream-50 text-md font-bold h-12 rounded-lg shadow-md transition-all"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : authMode === "signin" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default AuthForm;
