import type {FileNode} from "../model/types.ts";
import FileIcon from "./FileIcon.tsx";
import {Download, Star, Trash2} from "lucide-react";
import {formatBytes} from "../lib/format-bytes.ts";
import {useFileActions} from "../../../features/file-list/model/useFileActions.ts";
import {Button} from "../../../shared/ui/button/Button.tsx";

interface FileCardProps {
    file: FileNode,
    onDelete: () => void
}

export default function FileCard({file, onDelete}: FileCardProps) {
    const {downloadFile, deleteFile} = useFileActions()

    console.log(file)
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
            <div className = "flex gap-2 mt-4">
                <Button
                    variant = "outline"
                    size = "sm"
                    className = "flex-1 text-xs"
                    onClick = {() => downloadFile(file.storage_path, file.name)}
                >
                    <Download className = "w-3 h-3 mr-1"/> Download
                </Button>

                <Button
                    variant = "outline"
                    size = "sm"
                    className = "flex-1 text-xs hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                    onClick = {async () => {
                        const success = await deleteFile(file.id, file.storage_path)
                        if (success) onDelete()
                    }}
                >
                    <Trash2 className = "w-3 h-3 mr-1"/> Delete
                </Button>
            </div>
        </div>
    )
}