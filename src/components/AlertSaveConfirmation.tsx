import React, {useState} from "react";
import {Alert} from "react-bootstrap";

function AlertSaveConfirmation() {
	const [show, setShow] = useState(true);

	return (
		<>
			<Alert show={show} className="alert alert-success alert-dismissible fade show m-3 w-100">
				<button type="button" className="btn-close" onClick={() => setShow(false)}></button>
				En ny deltagare har lagts till.
			</Alert>
		</>
	)
}

export default AlertSaveConfirmation;
