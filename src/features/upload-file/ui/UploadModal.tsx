import { useRef, useState } from 'react'
import { Modal } from '../../../shared/ui/modal/Modal.tsx'
import { Button } from '../../../shared/ui/button/Button.tsx'
import { CloudUpload, File as FileIcon, X } from 'lucide-react'
import { useFileUpload } from '../../../features/upload-file/model/useFileUpload.ts'

interface UploadModalProps {
	isOpen: boolean
	onClose: () => void
	onUploadSuccess?: () => void
}

export function UploadModal({ isOpen, onClose, onUploadSuccess }: UploadModalProps) {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const { uploadFile, uploading } = useFileUpload()
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedFile(e.target.files[0])
		}
	}

	const handleUploadClick = async () => {
		if (!selectedFile) return

		await uploadFile(selectedFile)

		if (onUploadSuccess) onUploadSuccess()
		handleClose()
	}

	const handleClose = () => {
		setSelectedFile(null)
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={handleClose} title='Upload New File'>
			<div className='flex flex-col gap-6'>
				<input type='file' ref={fileInputRef} onChange={handleFileSelect} className='hidden' />

				{!selectedFile ? (
					<div
						onClick={() => fileInputRef.current?.click()}
						className='flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 p-10 text-center hover:bg-slate-100 transition-colors cursor-pointer group'>
						<div className='rounded-full bg-white p-3 shadow-sm ring-1 ring-slate-200 group-hover:scale-105 transition-transform'>
							<CloudUpload className='h-6 w-6 text-blue-600' />
						</div>
						<div className='space-y-1'>
							<p className='text-sm font-medium text-slate-700'>Click to upload or drag and drop</p>
							<p className='text-xs text-slate-500'>SVG, PNG, JPG or PDF (max. 10MB)</p>
						</div>
					</div>
				) : (
					<div className='flex items-center justify-between p-4 border border-blue-200 bg-blue-50 rounded-lg'>
						<div className='flex items-center gap-3'>
							<div className='p-2 bg-white rounded-md text-blue-600'>
								<FileIcon size={20} />
							</div>
							<div className='text-sm'>
								<p className='font-medium text-slate-900 truncate max-w-[200px]'>{selectedFile.name}</p>
								<p className='text-slate-500'>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
							</div>
						</div>
						<button
							onClick={() => setSelectedFile(null)}
							className='text-slate-400 hover:text-red-500 transition-colors'>
							<X size={20} />
						</button>
					</div>
				)}

				<div className='flex justify-end gap-3'>
					<Button variant='outline' onClick={handleClose} disabled={uploading}>
						Cancel
					</Button>
					<Button variant='default' onClick={handleUploadClick} disabled={!selectedFile || uploading}>
						{uploading ? 'Uploading...' : 'Upload'}
					</Button>
				</div>
			</div>
		</Modal>
	)
}
