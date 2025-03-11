import { useAuthContext } from "@/context/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function ProtectedPage({
  children,
}: {
  children: React.ReactNode;
}) {
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
    return <LoaderSpinner />;
  }

  return <>{children}</>;
}
