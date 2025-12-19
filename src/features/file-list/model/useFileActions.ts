import {supabase} from "../../../shared/api/supabase.ts";
import {useAuth} from "../../../app/providers/AuthProvider.tsx";

export function useFileActions() {
    const {session} = useAuth()

    const downloadFile = async (storagePath: string, fileName: string) => {
        if (!session) return
        try {

            const {data, error} = await supabase.storage.from('cloud-files').download(storagePath)
            if (error) throw new Error('There was a problem downloading your file')
            // Crete object in the RAM
            const url = URL.createObjectURL(data)
            // Create link with file url and set attribute to download
            const link = document.createElement("a")
            link.href = url
            link.setAttribute('download', fileName)
            document.body.appendChild(link);
            link.click()
            // Remove link and object from the RAM
            link.remove()
            URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Download error', error)
        }
    }
    const deleteFile = async (fileId: string, storagePath: string) => {
        if (!session) return
        try {
            const {error: storageError} = await supabase.storage.from('cloud-files').remove([storagePath])
            if (storageError) throw new Error('There was a problem with removing your file from storage')
            const {error: databaseError} = await supabase.from('files').delete().eq('id', fileId)
            if (databaseError) throw new Error('There was a problem with removing your file from database')
            return true
        } catch (error) {
            if (error instanceof Error) throw new Error(error.message)
            console.log(error)
        }
    }

    return {downloadFile, deleteFile}
}