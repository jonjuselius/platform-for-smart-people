import React, {useState} from "react";
import {Alert} from "react-bootstrap";

export default function AlertSaveActivityConfirmation(props: any) {
	const [show, setShow] = useState(props.show);

	return (
		<>
			<Alert show={show} className="alert alert-success alert-dismissible fade show w-100">
				<button type="button" className="btn-close" onClick={() => setShow(false)}></button>
				En ny aktivitet har lagts till.
			</Alert>
		</>
	)
}
