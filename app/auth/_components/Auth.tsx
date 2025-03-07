"use client";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
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
import { formSchema, FormSchemaType } from "@/schemas/authSchema";

const Auth = () => {
  const { loading, handleAuth } = useAuth();
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleTabChange = (value: string) => {
    setAuthMode(value as "signin" | "signup");
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (values: FormSchemaType) => {
    handleAuth(authMode, values.email, values.password);
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen items-center gap-20 bg-gradient-to-br from-strawberry-100 to-cream-100 dark:bg-gradient-to-tr dark:from-strawberry-600 dark:to-strawberry-900 p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 relative mb-2">
          <Image src="/icons/strwbry-icon.svg" alt="icon" fill priority />
        </div>
        <h1 className="text-2xl md:text-3xl font-display text-strawberry-600 dark:text-strawberry-200">
          Berry Busy
        </h1>
      </div>

      <Card className="w-full max-w-md bg-white/90 dark:bg-strawberry-900/90 backdrop-blur-sm dark:border-strawberry-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl text-strawberry-600 dark:text-strawberry-300">
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
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-strawberry-100 dark:bg-strawberry-800">
              <TabsTrigger
                value="signin"
                className="data-[state=active]:shadow-md data-[state=active]:bg-cream-50 dark:data-[state=active]:bg-strawberry-700"
              >
                I have an account 🤓
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:shadow-md data-[state=active]:bg-cream-50 dark:data-[state=active]:bg-strawberry-700"
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
