import React from 'react'
import { useFileManagement } from '../../hooks/useFileManagement'
import FileCard from './File.Card'

interface Props {
	files: any,
	deleteFileCard: any
}

const FileCardList: React.FC<Props> = ({ files }) => {
	const { deleteFile } = useFileManagement()
	if (!files) return <div></div>

	return (
		<div onClick={() => console.log(files)}>
			{files.map((file: any, index: number) => {
				return (
					<FileCard
						key={index}
						title={file.title}
						author={file.author}
						category={file.category}
						fileId={file._id}
						onDelete={(fileId: string) => deleteFile(fileId)}
					/>
				)
			})}
		</div>
	)
}

export default FileCardList
