"use client";
import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Tasks() {
  const { user } = useAuthContext();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/auth";
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(redirectPath);
    }
  }, [user, router, redirectPath]);

  return <div>This is where your tasks will be displayed</div>;
}
