import { useFilePicker } from "use-file-picker";
import React from "react";
import {Image} from "react-bootstrap";

export default function FilePicker(props: any) {
	const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
		readAs: "DataURL",
		accept: "image/*",
		multiple: true,
		limitFilesConfig: { max: 1 },
		// minFileSize: 1,
		maxFileSize: 50 // in megabytes
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errors.length) {
		return <div>Error...</div>;
	}

	return (
		<div>
			{filesContent.length === 0 &&
				<div onClick={() => openFileSelector()} style={{cursor: "pointer"}}>{props.element}</div>
			}
			{filesContent.map((file, index) => (
				<div key={index}>
					<div onClick={() => openFileSelector()}>
						<Image src={file.content} alt={file.name} style={{width: 100, height: 100, objectFit: "cover", backgroundColor: "transparent", cursor: "pointer"}} rounded={true}/>
					</div>
				</div>
			))}
		</div>
	);
}
