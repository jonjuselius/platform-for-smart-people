import ModalConfirmRemove from "components/ModalConfirmRemove";
import React from "react";
import { Button } from "react-bootstrap";

export default function RemoveButton(props: any) {
	const [modalShow, setModalShow] = React.useState(false);
	const name = props.name;

	return (
		<>
			<Button variant="danger" onClick={() => setModalShow(true)}>{name}</Button>
			<ModalConfirmRemove show={modalShow} onHide={() => setModalShow(false)}
			/>
		</>
	);
}
