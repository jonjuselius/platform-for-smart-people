import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmRemove(props: any) {
	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Ta bort aktivitet
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Är du säker på att du vill ta bort aktiviteten?
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} variant={"secondary"}>Avbryt</Button>
				<Button onClick={props.onHide} variant={"danger"}>Ta bort</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalConfirmRemove;
