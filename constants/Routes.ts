import {Home, ListTodo, LucideIcon} from "lucide-react";

export type IconRoutesType = {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const menuRoutes: IconRoutesType[] = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Tasks",
        href: "/tasks",
        icon: ListTodo
    },
]