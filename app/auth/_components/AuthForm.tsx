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
import { Loader2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "@/schemas/authSchema";

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
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-cream-50 dark:bg-strawberry-100 border-strawberry-200 dark:border-gray-500 dark:text-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-danger" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-strawberry-500 dark:text-strawberry-200">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  className="bg-cream-50 dark:bg-strawberry-100 border-strawberry-200 dark:border-gray-500 dark:text-gray-600"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-danger" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-strawberry-200 dark:bg-strawberry-500 text-gray-500 dark:text-cream-50 text-md"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : authMode === "signin" ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
