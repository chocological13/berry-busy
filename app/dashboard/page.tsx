"use client";
import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useAuthContext();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/auth";
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(redirectPath);
    }
  }, [user, router, redirectPath]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return <div>Hello, {user?.email}!</div>;
}
