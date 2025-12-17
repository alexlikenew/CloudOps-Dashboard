import * as React from "react";
import {NavLink} from "react-router-dom";
import {cn} from "../../../shared/lib/cn.ts";
import {cva} from "class-variance-authority";
import type {LucideIcon} from "lucide-react";

const sidebarLinkVariant = cva("flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors", {
    variants: {
        status: {
            active: "bg-blue-50 text-blue-700",
            default: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
        }
    }
})

interface SidebarLinkType {
    to: string,
    classes?: string,
    children: React.ReactNode,
    icon?: LucideIcon
}

export default function SidebarLink({to, children, icon: Icon, classes}: SidebarLinkType) {
    return (
        <NavLink
            to = {to}
            className = {({isActive}: any) => cn(isActive ? sidebarLinkVariant({status: "active"}) : sidebarLinkVariant({status: "default"}), classes)}
        >
            {Icon && <Icon className = 'h-4 w-4 shrink-0'/>}
            {children}
        </NavLink>
    )
}