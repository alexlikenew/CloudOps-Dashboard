// Helper do zgadywania typu na podstawie rozszerzenia
import type {FileNode, FileType} from "../model/types.ts";

function getTypeFromExtension(filename: string): FileType {
    const ext = filename.split('.').pop()?.toLowerCase();

    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext || '')) return 'image';
    if (['mp4', 'mov', 'avi', 'mkv'].includes(ext || '')) return 'video';
    if (['mp3', 'wav', 'ogg'].includes(ext || '')) return 'audio';
    if (['pdf', 'doc', 'docx', 'txt', 'xls'].includes(ext || '')) return 'document';

    return 'other';
}

// Główny Mapper: Supabase Row -> FileNode
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapSupabaseFileToNode(row: any): FileNode {
    return {
        id: row.id,
        name: row.name,
        size: row.size,
        // Tłumaczymy created_at na updatedAt
        updatedAt: new Date(row.created_at).toLocaleDateString(),
        // Wyliczamy typ
        type: getTypeFromExtension(row.name),
        // Hardcodujemy false, bo jeszcze nie mamy funkcji "gwiazdkowania" w bazie
        starred: false,
        storage_path: row.storage_path
    };
}