import {Modal} from "../../../shared/ui/modal/Modal.tsx";
import {Button} from "../../../shared/ui/button/Button.tsx";
import {CloudUpload} from "lucide-react";

interface UploadModalProps {
    isOpen: boolean,
    onClose: () => void,

}

export function UploadModal({isOpen, onClose}: UploadModalProps) {
    return (
        <Modal isOpen = {isOpen} onClose = {onClose} title = "Upload New File">
            <div className = "flex flex-col gap-6">
                <div
                    className = "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 p-10 text-center hover:bg-slate-100 transition-colors cursor-pointer group"
                >
                    <div
                        className = "rounded-full bg-white p-3 shadow-sm ring-1 ring-slate-200 group-hover:scale-105 transition-transform"
                    >
                        <CloudUpload className = "h-6 w-6 text-blue-600"/>
                    </div>
                    <div className = "space-y-1">
                        <p className = "text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                        <p className = "text-xs text-slate-500">SVG, PNG, JPG or PDF (max. 10MB)</p>
                    </div>
                </div>

                <div className = "flex justify-end gap-3">
                    <Button variant = "outline" onClick = {onClose}>
                        Cancel
                    </Button>
                    <Button variant = "default" onClick = {() => console.log('Uploading...')}>
                        Upload
                    </Button>
                </div>
            </div>
        </Modal>
    )
}