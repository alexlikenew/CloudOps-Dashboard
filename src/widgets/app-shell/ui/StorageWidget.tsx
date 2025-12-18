import { Database } from "lucide-react";
import {Button} from "../../../shared/ui/button/Button.tsx";

export function StorageWidget() {
    return (
        <div className="mx-4 mb-4 rounded-xl bg-slate-50 p-4 border border-slate-100">

            <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                    <Database className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">Storage</p>
                    <p className="text-xs text-slate-500">7.6 GB of 10 GB</p>
                </div>
            </div>

            <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-[76%] bg-blue-600 rounded-full transition-all" />
            </div>
            <Button className="mt-4">Upgrade Plan</Button>
        </div>
    );
}