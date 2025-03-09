"use client";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthForm from "@/app/auth/_components/AuthForm";
import { authFormSchema, AuthFormSchemaType } from "@/schemas/authSchema";
import { motion } from "framer-motion";
import BeegStrwbry from "@/components/BeegStrwbry";
import { useFloaties } from "@/hooks/useFloaties";
import FloatingStrwbry from "@/components/FloatingStrwbry";

const Auth = () => {
  const { loading, handleAuth } = useAuth();
  const { floaties } = useFloaties({ amount: 10 });
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleTabChange = (value: string) => {
    setAuthMode(value as "signin" | "signup");
  };

  const form = useForm<AuthFormSchemaType>({
    resolver: zodResolver(authFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (values: AuthFormSchemaType) => {
    handleAuth(authMode, values.email, values.password);
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen items-center gap-20 bg-gradient-to-br from-strawberry-100 to-cream-100 dark:bg-gradient-to-tr dark:from-strawberry-600 dark:to-strawberry-900 p-4">
      <div className="absolute inset-0 overflow-hidden">
        {floaties.map((float) => (
          <FloatingStrwbry key={float.id} floaties={float} />
        ))}
      </div>

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggleButton />
      </div>

      <BeegStrwbry className="relative z-10" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="w-full max-w-md relative"
      >
        <Card className="w-full max-w-md bg-white/90 dark:bg-strawberry-900/90 backdrop-blur-sm border-1 border-strawberry-200 dark:border-strawberry-700 shadow-lg rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-strawberry-300 dark:from-mint-700 via-pink-400 to-strawberry-300 dark:to-mint-700 animate-pulse"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-2xl text-strawberry-600 dark:text-strawberry-300">
              Welcome to Berry Busy!! 🍓
            </CardTitle>
            <CardDescription className="text-center text-strawberry-500 dark:text-strawberry-400">
              Your delightfully sweet to-do app~
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs
              defaultValue="signin"
              value={authMode}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="rounded-full grid w-full grid-cols-2 mb-6 bg-strawberry-100 dark:bg-strawberry-800">
                <TabsTrigger
                  value="signin"
                  className="rounded-full data-[state=active]:shadow-md data-[state=active]:bg-cream-50 dark:data-[state=active]:bg-mint-800 transition-all"
                >
                  I have an account 🤓
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="rounded-full data-[state=active]:shadow-md data-[state=active]:bg-cream-50 dark:data-[state=active]:bg-mint-800 transition-all"
                >
                  No account yet 😔
                </TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <AuthForm
                  loading={loading}
                  handleSubmit={handleSubmit}
                  form={form}
                  authMode="signin"
                />
              </TabsContent>
              <TabsContent value="signup">
                <AuthForm
                  loading={loading}
                  handleSubmit={handleSubmit}
                  form={form}
                  authMode="signup"
                />
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-xs text-strawberry-400 dark:text-strawberry-500">
                Made with ❤️ for berry busy people
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;
