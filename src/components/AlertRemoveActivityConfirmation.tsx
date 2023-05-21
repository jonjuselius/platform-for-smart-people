import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'

export default function AlertRemoveActivityConfirmation(props: any) {
	const [show, setShow] = useState(props.show);

	return (
		<>
			<Alert show={show} className="alert alert-danger alert-dismissible fade show w-100">
				<button type="button" className="btn-close" onClick={() => setShow(false)}></button>
				Aktiviteten har tagits bort.
			</Alert>
		</>
	)
}
