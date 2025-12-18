import FileList from "./FileList.tsx";

export default function FilesPage() {
    return (
        <div className = "space-y-6">
            <div>
                <h1 className = "text-2xl font-bold text-slate-900">Files Overview</h1>
                <p className = "text-slate-500">Welcome back to your files overview.</p>
            </div>
            <FileList/>
        </div>
    )
}