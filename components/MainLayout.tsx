"use client";
import DesktopNavBar from "@/components/navbar/DesktopNavBar";
import MobileSideBar from "@/components/navbar/MobileSideBar";
import { useAuthContext } from "@/context/auth-provider";
import React from "react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();

  if (user) {
    return (
      <div className="flex flex-col max-w-screen min-h-screen bg-background text-foreground">
        {/*Top NavBar*/}
        <header className="hidden md:block sticky top-0 w-full z-40 p-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <DesktopNavBar />
        </header>
        <main>
          <MobileSideBar />
          {children}
        </main>
        <footer>footer</footer>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}
