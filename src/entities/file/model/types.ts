export type FileType = 'image' | 'video' | 'audio' | 'document' | 'other';

export interface FileNode {
    id: string,
    name: string,
    type: FileType,
    size: number,
    updatedAt: string,
    starred: boolean,
    storage_path: string
}