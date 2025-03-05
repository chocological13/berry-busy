"use client"
import React from 'react';
import Link from "next/link";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Home, ListTodo, LogIn, User} from "lucide-react";
import {ThemeToggleButton} from "@/components/ThemeToggleButton";
import StrwbryIcon from "@/components/navbar/StrwbryIcon";
import {menuRoutes} from "@/constants/Routes";

const DesktopNavBar = ({className} : {className?:string}) => {
    return (
        <div className={`${className} flex flex-row justify-between`}>
                {/* Left Side Menu */}
                <div className="flex flex-row align-middle">

                    {/* Logo */}
                    <StrwbryIcon className="container h-14"/>


                    {/* Navigation Menu */}
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center space-x-2">
                            {menuRoutes.map((route, i) => (
                            <NavigationMenuItem key={i}>
                                <Link
                                    href={route.href}
                                    className={cn(
                                        buttonVariants({variant: 'ghost'}),
                                        "text-strawberry-600 hover:bg-strawberry-100 dark:hover:bg-strawberry-900"
                                    )}
                                >
                                    <route.icon className="mr-1 h-4 w-4"/>
                                    {route.label}
                                </Link>
                            </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2 mr-4">
                    <ThemeToggleButton/>
                    {/*TODO : change to auth buttons*/}
                    <Link
                        href="/public"
                        className={cn(
                            buttonVariants({variant: 'outline'}),
                            "rounded-full border-strawberry-300 dark:border-strawberry-700"
                        )}
                    >
                        <LogIn className="h-4 w-4 text-strawberry-500"/>
                    </Link>
                </div>
        </div>
);
};

export default DesktopNavBar;