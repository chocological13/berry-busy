"use client";
import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Auth from "@/app/auth/_components/Auth";

export default function AuthPage() {
  const { user } = useAuthContext();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/dashboard";
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(redirectPath);
    }
  }, [user, router, redirectPath]);

  return (
    <div>
      <Auth />
    </div>
  );
}
