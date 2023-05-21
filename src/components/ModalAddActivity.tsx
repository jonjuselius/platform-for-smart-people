import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {personas} from './Persona'
import FilePicker from './FilePicker'
import Activity, {diska} from '../components/Activity'
import SettingsActivity from './SettingsActivity'
import AlertSaveActivityConfirmation from './AlertSaveActivityConfirmation'
import {useNavigate} from 'react-router-dom'

function ModalAddActivity() {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [saved, setSave] = useState(false);
	const activity = diska;

	const handleClose = () => {
		setSave(false);
		setShow(false);
	}
	const handleShow = () => {
		setSave(false);
		setShow(true);
	}
	const handleSave = () => {
		navigate('../activities')
		setSave(true);
		setShow(false);
	}

	return (
		<div className={"d-flex flex-column align-items-center gap-3"}>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>
						<Form.Control type="text" placeholder={"Aktivitetens namn"} autoFocus plaintext={true}/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3 d-flex flex-row gap-3">
							<Form.Group>
								<FilePicker element={<Activity activity={activity} size={100} roundedCircle={true}/>} size={100} roundedCircle={true}/>
							</Form.Group>
							<Form.Group className="w-100">
								<Form.Control as="textarea" rows={4} placeholder={"Beskrivning av aktiviteten"} style={{resize: "none"}}/>
							</Form.Group>
						</Form.Group>

						<SettingsActivity/>

						<Form.Group className="mb-3">
							<Form.Label>Deltagare:</Form.Label>
							<select className="form-select" multiple>
								{personas.map(persona => (
									<option>{persona.name}</option>
								))}
							</select>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Stäng</Button>
					<Button variant="primary" onClick={handleSave}>Lägg till aktivitet</Button>
				</Modal.Footer>
			</Modal>

			<Button variant="primary" onClick={handleShow}>Lägg till aktivitet</Button>

			{saved &&
				<AlertSaveActivityConfirmation/>
			}
		</div>
	);
}

export default ModalAddActivity;
