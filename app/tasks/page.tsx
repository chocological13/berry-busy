"use client";
import ProtectedPage from "@/components/ProtectedPage";
import TaskPage from "@/app/tasks/_components/TaskPage";

export default function Tasks() {
  return (
    <ProtectedPage>
      <TaskPage />
    </ProtectedPage>
  );
}
