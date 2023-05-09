import ConfirmModal from "components/ConfirmModal";
import React from "react";
import { Button } from "react-bootstrap";

export default function SaveButton() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>Spara ändringar</Button>
			<ConfirmModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}
