import {useAuth} from "../../../app/providers/AuthProvider.tsx";
import {useCallback, useEffect, useState} from "react";
import {supabase} from "../../../shared/api/supabase.ts";
import type {FileNode} from "../../../entities/file/model/types.ts";
import {mapSupabaseFileToNode} from "../../../entities/file/lib/map-file.ts";

export function useFiles() {
    const {session} = useAuth();
    const userId = session?.user.id;

    const [loading, setLoading] = useState<boolean>(true)
    const [files, setFiles] = useState<FileNode[]>()

    const fetchFiles = useCallback(async () => {
        if (!session) return

        try {
            const {
                data,
                error
            } = await supabase.from('files').select('*').eq('user_id', userId).order('created_at', {ascending: false})
            if (error) throw new Error('There was a problem downloading your files')

            const mappedFiles: FileNode[] = data.map(mapSupabaseFileToNode);
            setFiles(mappedFiles);
        } catch (error) {
            if (error instanceof Error) throw new Error(error.message)
            else alert(error)
        } finally {
            setLoading(false)
        }
    }, [session])

    useEffect(() => {
        fetchFiles()
    }, [])
    return {files, loading, refetch: fetchFiles}
}