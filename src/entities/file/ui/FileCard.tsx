import type {FileNode} from "../model/types.ts";
import FileIcon from "./FileIcon.tsx";
import {Star} from "lucide-react";
import {formatBytes} from "../lib/format-bytes.ts";

interface FileCardProps {
    file: FileNode
}

export default function FileCard({file}: FileCardProps) {
    return (
        <div className = "bg-white border border-slate-200 rounded-xl hover:border-blue-500 p-4 flex flex-col">
            <div className = "flex justify-between">
                <FileIcon type = {file.type}/>
                {file.starred ? <Star className = "h-4 w-4 fill-yellow-400 text-yellow-400"/> : ''}
            </div>
            <div className = "mt-4 flex flex-col gap-1">
                <span className = "truncate font-medium">{file.name}</span>
                <div className = "flex justify-between text-slate-500 text-xs">
                    <span>{formatBytes(file.size)}</span><span>{file.updatedAt}</span>
                </div>
            </div>
        </div>
    )
}