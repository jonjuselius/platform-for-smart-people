import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {useNavigate} from 'react-router-dom'

function ModalConfirmRemoveActivity(props: any) {
	const navigate = useNavigate();
	const removeParticipant = () => {
		navigate('../participants')
	}

	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Ta bort deltagare</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Är du säker på att du vill ta bort deltagaren?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} variant={"secondary"}>Nej, avbryt</Button>
				<Button onClick={removeParticipant} variant={"danger"}>Ja, ta bort deltagaren</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalConfirmRemoveActivity;
