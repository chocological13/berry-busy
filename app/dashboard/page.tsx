"use client";
import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function Dashboard() {
  const { user, loading } = useAuthContext();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/auth";
  const router = useRouter();
  useEffect(() => {
    if (!user && !loading) {
      setTimeout(() => {
        router.replace(redirectPath);
      }, 2000);
    }
  }, [user, loading, router, redirectPath]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  } else {
    return <div>Hello, {user?.email}!</div>;
  }
}
