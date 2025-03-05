"use client"
import {useTheme} from "next-themes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";

export function ThemeToggleButton() {
  const {setTheme, theme} = useTheme();

  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full bg-background hover:bg-strawberry-100 dark:hover:bg-strawberry-900 border-strawberry-300 dark:border-strawberry-700">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-strawberry-500 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-strawberry-300 dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className={`text-strawberry-700 dark:text-strawberry-200 ${theme === "light" ? "font-bold" : ""}`}
              >
                  Light
              </DropdownMenuItem>
              <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className={`text-strawberry-700 dark:text-strawberry-200 ${theme === "dark" ? "font-bold" : ""}`}
              >
                  Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className={`text-strawberry-700 dark:text-strawberry-200 ${theme === "system" ? "font-bold" : ""}`}>
                  System
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}