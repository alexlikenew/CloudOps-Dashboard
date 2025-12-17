import {Archive, File, Folder, Image, type LucideIcon, Video} from "lucide-react";
import type {FileType} from "../model/types"; // Upewnij się co do ścieżki

interface FileIconProps {
    type: FileType;
}

export default function FileIcon({type}: FileIconProps) {
    // Mapa ikon: Typ -> Komponent + Kolor
    const iconMap: Record<FileType, { icon: LucideIcon; color: string }> = {
        folder: {icon: Folder, color: "text-blue-500"},
        image: {icon: Image, color: "text-purple-500"},
        video: {icon: Video, color: "text-red-500"},
        document: {icon: File, color: "text-slate-500"},
        archive: {icon: Archive, color: "text-amber-500"},
    };
    
    const {icon: Icon, color} = iconMap[type] || iconMap.document;

    return <Icon className = {`h-6 w-6 ${color}`}/>;
}