"use client";
import { useAuthContext } from "@/context/auth-provider";
import ProtectedPage from "@/components/ProtectedPage";

export default function Dashboard() {
  const { user } = useAuthContext();

  return (
    <ProtectedPage>
      <div>Hello, {user?.email}!</div>
    </ProtectedPage>
  );
}
