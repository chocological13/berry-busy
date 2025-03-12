"use client";
import ProtectedPage from "@/components/ProtectedPage";
import TaskDashboard from "@/app/dashboard/_components/TaskDashboard";

export default function Dashboard() {
  return (
    <ProtectedPage>
      <TaskDashboard />
    </ProtectedPage>
  );
}
