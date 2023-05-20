import React, {useState} from 'react';
import {Alert, Col, Container, Form, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Persona, {personas, sybil} from './Persona';
import FilePicker from "./FilePicker";
import AlertSaveConfirmation from './AlertSaveConfirmation';

function ModalAddParticipant() {
	const [show, setShow] = useState(false);
	const [saved, setSave] = useState(false);

	const handleClose = () => {
		setSave(false);
		setShow(false);
	}
	const handleShow = () => {
		setSave(false);
		setShow(true);
	}
	const handleSave = () => {
		setSave(true);
		setShow(false);
	}

	return (
		<div className={"d-flex flex-column align-items-center gap-3"}>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Lägg till deltagare</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<FilePicker element={<Persona persona={sybil} size={100}/>}/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Namn</Form.Label>
							<Form.Control type="text" placeholder={sybil.name} autoFocus/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Grupp</Form.Label>
							<select className="form-select" value={sybil.group}>
								<option value="0">Ingen grupp</option>
								<option value="1">Grupp 1: Media</option>
								<option value="2">Grupp 2: Färg & Form</option>
								<option value="3">Grupp 3: Harmoni & Rytmik</option>
								<option value="4">Grupp 4: Skapande</option>
								<option value="5">Grupp 5: Butiksgruppen</option>
							</select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Beskrivning</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder={sybil.description}/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Stäng</Button>
					<Button variant="primary" onClick={handleSave}>Lägg till deltagare</Button>
				</Modal.Footer>
			</Modal>

			<Button variant="primary" onClick={handleShow}>Lägg till deltagare</Button>

			{saved &&
				<AlertSaveConfirmation/>
			}
		</div>
	);
}

export default ModalAddParticipant;
