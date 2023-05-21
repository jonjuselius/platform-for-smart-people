import React from 'react'
import {Accordion, Button, Col, Form, Row, Stack} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import QR from 'assets/img/qr.png'
import Persona, {anna} from '../components/Persona'
import FilePicker from '../components/FilePicker'
import Item from '../components/Item'
import ButtonRemoveParticipant from '../components/ButtonRemoveParticipant'

function UserProfile() {
	const {state} = useLocation();
	const persona = state === undefined ? anna : state;

	return (
		<div className={"d-sm-flex flex-row gap-3"}>
			<div className="order-1 p-2 my-3">
				<FilePicker element={<Persona persona={persona} size={200} roundedCircle={true}/>} size={200} roundedCircle={true}/>
				{/*<Image src={persona.img} alt={persona.name} className={"persona-profile"} roundedCircle/>*/}
			</div>
			<Col className="order-2 d-flex flex-column gap-3 my-3 mx-3">
				<div className={"d-flex flex-row justify-content-between align-items-end"}>
					<div>
						<h1 className={"display-2 lh-1"}>{persona.name}</h1>
						<h2 className={"display-6 fw-lighter lh-1"}>Grupp {persona.group}</h2>
					</div>

					<Stack direction="horizontal">
						<Image src={QR} width={96}/>
					</Stack>
				</div>

				<Accordion defaultActiveKey={[""]} alwaysOpen>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Anteckningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							{persona.description}
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Kalender</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<section className={"d-flex flex-column flex-wrap gap-2"}>
								<header>Idag</header>
								<div className={"d-flex flex-row flex-wrap gap-3"}>
									{persona.activities.map((activity: any) => (
										<Item item={activity} size={100} rounded={true}/>
									))}
								</div>
							</section>
							<section className={"d-flex flex-column flex-wrap gap-2 align-items-start"}>
								<Link to={"../calendar"}>
									<Button variant={"primary"}>Öppna kalender</Button>
								</Link>
							</section>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Bildbank</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<section className={"d-flex flex-column flex-wrap gap-2"}>
								<header>Aktiviteter</header>
								<div className={"d-flex flex-row flex-wrap gap-3"}>
									{persona.activities.map((activity: any) => (
										<FilePicker element={<Item item={activity} size={100} rounded={true}/>} size={100} rounded={true}/>
									))}
								</div>
							</section>
							<section className={"d-flex flex-column flex-wrap gap-2"}>
								<header>Föremål</header>
								<div className={"d-flex flex-row flex-wrap gap-3"}>
									{persona.items.map((item: any) => (
										<FilePicker element={<Item item={item} size={100} rounded={true}/>}/>
									))}
								</div>
							</section>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Appinställningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							<Form>
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
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<div className={"my-3"}>
					<ButtonRemoveParticipant/>
				</div>
			</Col>
		</div>
	);
}

export default UserProfile;
