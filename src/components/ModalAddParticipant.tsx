import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Persona, {sybil} from './Persona'
import FilePicker from './FilePicker'
import {activities} from './Activity'
import AlertSaveParticipantConfirmation from './AlertSaveParticipantConfirmation'

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
					<Modal.Title>
						<Form.Control type="text" placeholder={"Deltagarens namn"} autoFocus plaintext={true}/>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3 d-flex flex-row gap-3">
							<Form.Group>
								<FilePicker element={<Persona persona={sybil} size={100}/>} size={100}
								            rounded={true}/>
							</Form.Group>
							<Form.Group className="w-100">
								<Form.Control as="textarea" rows={4} placeholder={"Beskrivning av deltagaren"} style={{resize: "none"}}/>
							</Form.Group>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Grupp:</Form.Label>
							<select className="form-select">
								<option value="0" selected={true}>Ingen grupp vald</option>
								<option value="1">Grupp 1: Media</option>
								<option value="2">Grupp 2: Färg & Form</option>
								<option value="3">Grupp 3: Harmoni & Rytmik</option>
								<option value="4">Grupp 4: Skapande</option>
								<option value="5">Grupp 5: Butiksgruppen</option>
							</select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Aktiviteter:</Form.Label>
							<select className="form-select" multiple>
								{activities.map(activity => (
									<option>{activity.name}</option>
								))}
							</select>
						</Form.Group>

						<Row>
							<Col xs={12} md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Färgschema:</Form.Label>
									<select className="form-select">
										<option value="default">Standard</option>
										<option value="highcontrast">Hög kontrast</option>
										<option value="lowcontrast">Låg kontrast</option>
										<option value="colorblindness">Anpassat för färgblindhet</option>
									</select>
								</Form.Group>
							</Col>
							<Col xs={12} md={5} lg={4}>
								<Form.Group className="mb-3">
									<Form.Label>AR-inställningar:</Form.Label>
									<Form.Check type="checkbox" name="mono-stereo" label="Förstärkt AR"/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3">
									<Form.Label>Textstorlek:</Form.Label>
									<Form.Range value={25}/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={4}>
								<Form.Group className="mb-3">
									<Form.Label>Ljudkanaler:</Form.Label>
									<Form.Check type="radio" name="mono-stereo" label="Mono"/>
									<Form.Check type="radio" name="mono-stereo" label="Stereo" defaultChecked/>
								</Form.Group>
							</Col>
							<Col xs={12} md={5} lg={4}>
								<Form.Group className="mb-3 ms-auto">
									<Form.Label>Anpassningar:</Form.Label>
									<Form.Check type="switch" label="Röstuppläsning"/>
									<Form.Check type="switch" label="Haptisk feedback"/>
									<Form.Check type="switch" label="Specialeffekter"/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3 ms-auto">
									<Form.Label>Ljudvolym:</Form.Label>
									<Form.Range value={50}/>
								</Form.Group>
							</Col>
						</Row>

					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Stäng</Button>
					<Button variant="primary" onClick={handleSave}>Lägg till deltagare</Button>
				</Modal.Footer>
			</Modal>

			<Button variant="primary" onClick={handleShow}>Lägg till deltagare</Button>

			{saved &&
				<AlertSaveParticipantConfirmation/>
			}
		</div>
	);
}

export default ModalAddParticipant;
