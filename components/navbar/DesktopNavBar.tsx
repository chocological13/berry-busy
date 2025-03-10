"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import StrwbryIcon from "@/components/StrwbryIcon";
import { useAuthContext } from "@/context/auth-provider";
import NavBarMenu from "@/components/navbar/NavBarMenu";
import LogOutButton from "@/components/navbar/LogOutButton";

const DesktopNavBar = ({ className }: { className?: string }) => {
  const { user } = useAuthContext();

  return (
    <div className={cn(className || "", "flex flex-row justify-between")}>
      {/* Left Side Menu */}
      <div className="flex flex-row align-middle">
        {/* Logo */}
        <StrwbryIcon className="container h-14" />

        {/* Navigation Menu */}
        <NavBarMenu />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-2 mr-4">
        {user && <LogOutButton desktop />}
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default DesktopNavBar;
