import {useFiles} from "../../../features/file-list/model/useFiles.ts";
import FileCard from "../../../entities/file/ui/FileCard.tsx";


export default function FileList() {
    const {files, loading, refetch} = useFiles()


    console.log(files)
    return (
        <>
            {loading && <div>Your data is loading</div>}
            {files &&
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {files.map((file) => {
                        return <FileCard onDelete = {refetch} key = {file.id} file = {file}/>
                    })}
                </div>}

        </>
    )
}