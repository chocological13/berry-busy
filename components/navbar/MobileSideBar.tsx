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
import { ChevronLeft } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import StrwbryIcon from "@/components/StrwbryIcon";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { menuRoutes } from "@/constants/Routes";
import LogOutButton from "@/components/navbar/LogOutButton";

const MobileSideBar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setOpen(true);
    },
    trackMouse: true,
  });

  return (
    <div className={`${className} md:hidden absolute overflow-hidden`}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <SheetHeader>
            <SheetTitle className="sr-only">Open Menu</SheetTitle>
            {!open && (
              <div
                {...swipeHandlers}
                className="fixed top-1/2 right-0 -translate-y-1/2 w-[12px] h-[100px] rounded-l-lg bg-gray-700/20 dark:bg-gray-700/50 flex items-center justify-center z-[1000]"
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
