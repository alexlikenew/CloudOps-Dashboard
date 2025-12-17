import {MOCK_FILES} from "../../../entities/file/lib/mock-data.ts";
import FileCard from "../../../entities/file/ui/FileCard.tsx";


export default function FileList() {
    return (
        <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_FILES.map((file) => {
                return <FileCard key = {file.id} file = {file}/>
            })}
        </div>
    )
}