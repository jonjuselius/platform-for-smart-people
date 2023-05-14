import ModalConfirmSave from "components/ModalConfirmSave";
import React from "react";
import { Button } from "react-bootstrap";

export default function SaveButton(props: any) {
	const [modalShow, setModalShow] = React.useState(false);
	const name = props.name;

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>{name}</Button>
			<ModalConfirmSave
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}
