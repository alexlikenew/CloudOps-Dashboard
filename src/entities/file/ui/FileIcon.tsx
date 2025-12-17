import * as React from "react";
import {archive, file, Folder, Image, Video} from "lucide-react";

export default function FileIcon({type}) {
    const Icon = ({type}) => {
        switch ({type}) {
            case 'folder':
                return Folder;
            case 'image':
                return Image;
            case 'video':
                return Video
            case 'document':
                return file
            case 'archive' :
                return archive
        }
    }
    return (
        <Icon/>
    )
}