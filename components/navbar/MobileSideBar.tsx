"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, LogOutIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import StrwbryIcon from "@/components/StrwbryIcon";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { menuRoutes } from "@/constants/Routes";
import { User } from "@supabase/auth-js";
import { supabase } from "@/utils/supabase/client";
import LogOutButton from "@/components/navbar/LogOutButton";

const MobileSideBar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setOpen(true);
    },
    trackMouse: true,
  });

  const [user, setUser] = useState<User | null>(null);

  return (
    <div className={`${className} md:hidden`}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <SheetHeader>
            <SheetTitle className="sr-only">Open Menu</SheetTitle>
            {!open && (
              <div
                {...swipeHandlers}
                style={{
                  position: "fixed",
                  top: "50%",
                  right: 0,
                  transform: "translateY(-50%)",
                  width: "10px",
                  height: "100px",
                  borderTopLeftRadius: 7,
                  borderBottomLeftRadius: 7,
                  backgroundColor: "rgba(200, 200, 200, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <ChevronLeft className="text-pink-600 font-bold" />
              </div>
            )}
          </SheetHeader>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <StrwbryIcon />
          </SheetHeader>

          {menuRoutes.map((route, i) => (
            <Link
              href={route.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-strawberry-600 hover:bg-strawberry-100 dark:hover:bg-strawberry-900",
              )}
              onClick={() => setOpen(false)}
              key={i}
            >
              <SheetDescription className="sr-only">
                {route.label}
              </SheetDescription>
              <route.icon className="mr-1 h-4 w-4" />
              {route.label}
            </Link>
          ))}
          <div className="mx-auto flex flex-row gap-2 text-xs">
            <LogOutButton desktop={false} onSignOut={() => setOpen(false)} />
          </div>
          <SheetFooter>
            <div className="flex justify-end">
              <ThemeToggleButton />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
