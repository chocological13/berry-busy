"use client";
import { useAuthContext } from "@/context/auth-provider";
import ProtectedPage from "@/components/ProtectedPage";
import BerryGarden from "@/app/dashboard/_components/BerryGarden";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";

export default function Dashboard() {
  const { user } = useAuthContext();

  return (
    <ProtectedPage>
      <div>Hello, {user?.email}!</div>
      <DashboardHeader />
      <div>
        <BerryGarden />
      </div>
    </ProtectedPage>
  );
}
