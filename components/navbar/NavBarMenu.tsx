import React from 'react';
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";
import {menuRoutes} from "@/constants/Routes";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

const NavBarMenu = () => {
    return (
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
                            {route.icon && React.createElement(route.icon, { className: "mr-1 h-4 w-4" })}
                            {route.label}
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavBarMenu;