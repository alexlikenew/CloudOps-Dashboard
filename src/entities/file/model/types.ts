export type FileType = 'folder' | 'image' | 'video' | 'document' | 'archive'

export interface FileNode {
    id: string,
    name: string,
    type: FileType,
    size: number,
    updatedAt: string,
    starred: boolean
}