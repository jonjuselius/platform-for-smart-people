import React, {useState} from "react";
import {Alert} from "react-bootstrap";

export default function AlertRemoveParticipantConfirmation() {
	const [show, setShow] = useState(true);

	return (
		<>
			<Alert show={show} className="alert alert-danger alert-dismissible fade show m-3 w-100">
				<button type="button" className="btn-close" onClick={() => setShow(false)}></button>
				En deltagare har tagits bort.
			</Alert>
		</>
	)
}
