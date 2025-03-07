"use client";
import React from "react";
import { supabase } from "@/utils/supabase/client";
import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const LogOutButton = ({
  className,
  desktop,
  onSignOut,
}: {
  className?: string;
  desktop: boolean;
  onSignOut?: () => void;
}) => {
  const { loading, signOut } = useAuth();
  const handleClick = () => {
    signOut();
    if (!loading && onSignOut) {
      onSignOut();
    }
  };

  return (
    <div className={className}>
      {desktop ? (
        <Button
          variant="outline"
          className="text-strawberry-600 rounded-full hover:bg-strawberry-100 dark:hover:bg-strawberry-900 border-strawberry-300 dark:border-strawberry-700"
          onClick={handleClick}
        >
          <LogOutIcon />
          Sign Out
        </Button>
      ) : (
        <Button
          variant="link"
          className="text-strawberry-600"
          onClick={handleClick}
        >
          <LogOutIcon />
          Sign Out
        </Button>
      )}
    </div>
  );
};

export default LogOutButton;
