import {Command, FolderOpen, LayoutDashboard, PieChart, Settings, UserRound} from "lucide-react";
import SidebarLink from "./SidebarLink.tsx";
import {StorageWidget} from "./StorageWidget.tsx";

const NAV_ITEMS = [
    {label: 'Overview', path: '/', icon: LayoutDashboard},
    {label: 'File Browser', path: '/files', icon: FolderOpen},
    {label: 'Analytics', path: '/analytics', icon: PieChart},
    {label: 'Settings', path: '/settings', icon: Settings},
];

function Sidebar() {
    return (
        <aside className = 'sidebar flex flex-col w-64   h-screen bg-white border-r border-slate-200 justify-start'>
            <div className = "flex h-16 items-center gap-3 border-b border-slate-100 px-6">
                <div
                    className = "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200"
                >
                    <Command size = {18}/>
                </div>
                <div className = "flex flex-col leading-none">
                    <span className = "font-bold text-slate-900">CloudOps</span>
                    <span className = "text-[10px] uppercase tracking-wider text-slate-500 font-medium">Dashboard</span>
                </div>
            </div>
            <div className = "flex flex-1 flex-col overflow-y-auto px-3 py-6">
                <nav className = "space-y-1">
                    {NAV_ITEMS.map((item) => (
                        <SidebarLink
                            key = {item.path}
                            to = {item.path}
                            icon = {item.icon}
                        >
                            {item.label}
                        </SidebarLink>
                    ))}
                </nav>
            </div>
            <div className = "border-t border-slate-100 p-4">
                <StorageWidget/>
                <div
                    className = "flex items-center gap-3 rounded-lg bg-slate-50 p-3 hover:bg-slate-100 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                >
                    <div
                        className = "flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500"
                    >
                        <UserRound size = {16}/>
                    </div>

                    <div className = "flex flex-col overflow-hidden">
                        <span className = "truncate text-sm font-semibold text-slate-700">John Doe</span>
                        <span className = "truncate text-xs text-slate-500">Admin Workspace</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;