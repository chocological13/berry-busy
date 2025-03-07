"use client";
import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Auth from "@/app/auth/_components/Auth";
import { Loader2 } from "lucide-react";

export default function AuthPage() {
  const { user, loading } = useAuthContext();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/dashboard";
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthChecked(true);
      setTimeout(() => {
        router.push(redirectPath);
      }, 3000);
    }
  }, [user, router, redirectPath]);

  if (loading) {
    console.log("Loading state active...");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  } else if (authChecked) {
    return null;
  }

  return (
    <div>
      <Auth />
    </div>
  );
}
