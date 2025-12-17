import {Bell, CloudUpload, Search} from "lucide-react";
import {Button} from "../../../shared/ui/button/Button.tsx";


export default function Header() {
    return (
        <header className = "flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">

            <div className = "relative w-96">
                <div className = "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className = "h-4 w-4 text-slate-400"/>
                </div>
                <input
                    type = "text"
                    placeholder = "Search files..."
                    className = "block h-9 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div className = "flex items-center gap-3">
                <Button variant = "ghost" size = "icon">
                    <Bell className = "h-5 w-5 text-slate-600 bg-slate-600"/>
                </Button>

                <Button>
                    <CloudUpload className = "mr-2 h-4 w-4"/>
                    Upload file
                </Button>
            </div>
        </header>
    );
}