import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmSave(props: any) {
	return (
	<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">Spara</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<p>Är du säker på att du vill spara dina ändringar?</p>
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.onHide} variant={"secondary"}>Avbryt</Button>
			<Button onClick={props.onHide} variant={"primary"}>Spara</Button>
		</Modal.Footer>
	</Modal>
	)
}

export default ModalConfirmSave;
