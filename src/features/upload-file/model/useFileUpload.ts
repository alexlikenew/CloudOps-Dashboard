import {useAuth} from "../../../app/providers/AuthProvider.tsx";
import {supabase} from "../../../shared/api/supabase.ts";
import {useState} from "react";

export function useFileUpload() {

    const [uploading, setUploading] = useState<boolean>(false)
    const {session} = useAuth();

    async function uploadFile(file: File) {

        if (!session) return

        setUploading(true)

        const userId = session.user.id;
        const filePath = userId + '/' + Date.now() + '/' + file.name;

        try {
            const {data, error: storageError} = await supabase.storage.from('cloud-files').upload(filePath, file)
            if (storageError) {
                throw new Error('There was a problem with uploading your file to storage')
            }
            const {data, error: databaseError} = await supabase.from('files').insert({
                name: file.name,
                size: file.size,
                user_id: userId,
                storage_path: filePath,
                is_folder: false
            })
            if (databaseError) {
                throw new Error('There was a problem with uploading your file to database')
            }


        } catch (error) {
            if (error instanceof Error) {
                console.log(`You have problem with uploading file:${error.message}`)
            } else {
                console.log(error)
            }
        } finally {
            setUploading(false)
        }
    }

    return {uploading, uploadFile}

}