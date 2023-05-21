import React from 'react'
import {Accordion, Button, Col, Stack} from 'react-bootstrap'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import QR from 'assets/img/qr.png'
import FilePicker from '../components/FilePicker'
import Activity, {diska} from '../components/Activity'
import Item from '../components/Item'
import Persona, {personas} from '../components/Persona'
import ButtonRemoveActivity from '../components/ButtonRemoveActivity'
import SettingsActivity from '../components/SettingsActivity'

function ActivityProfile() {
	const navigate = useNavigate();
	const {state} = useLocation();
	const activity = state === undefined ? diska : state;

	return (
		<div className={"d-sm-flex flex-row gap-3"}>
			<div className="order-1 p-2 my-3">
				<FilePicker element={<Activity activity={activity} size={200} roundedCircle={true}/>} size={200}
				            roundedCircle={true}/>
			</div>
			<Col className="order-2 d-flex flex-column gap-3 my-3 mx-3">
				<div className={"d-flex flex-row justify-content-between align-items-end"}>
					<div>
						<h1 className={"display-2 lh-1"}>{activity.name}</h1>
						<h2 className={"display-6 fw-lighter lh-1"}>Aktivitet</h2>
					</div>

					<Stack direction="horizontal">
						<Image src={QR} width={96}/>
					</Stack>
				</div>

				<Accordion defaultActiveKey={[""]} alwaysOpen>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Anteckningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							{activity.description}
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Kalender</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<section className={"d-flex flex-column flex-wrap gap-3"}>
								<header>Kommande tillfällen:</header>
								<div className={"d-flex flex-column flex-wrap gap-3"}>
									{activity.calendar && activity.calendar.map((date: any) =>
										<div className={"d-flex flex-row flex-wrap gap-3"}>
											<Activity activity={activity} size={100} rounded={true}/>
											<Stack>
												<h5>{activity.name}</h5>
												{date.getDate()} {date.toLocaleString('default', {month: 'long'})} {date.getFullYear()} kl {String(date.getHours()).padStart(2, '0')}:{String(date.getMinutes()).padStart(2, '0')}
											</Stack>
										</div>
									)}
								</div>
							</section>
							<section>
								<Link to={"../calendar"}>
									<Button variant={"primary"}>Öppna kalender</Button>
								</Link>
							</section>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Föremål</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<div className={"d-flex flex-row flex-wrap gap-3"}>
								{activity.items.map((item: any) => <FilePicker
									element={<Item item={item} size={100} rounded={true}/>} size={100}
									rounded={true}/>)}
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Deltagare</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<div className={"d-flex flex-row flex-wrap gap-3"}>
								{activity.participants.map((index: any) =>
									<>
										<div onClick={() => navigate('../userprofile', {state: personas[index]})}
										     style={{cursor: "pointer"}}>
											<Persona persona={personas[index]} size={100} rounded={true}/>
										</div>
									</>
								)}
							</div>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Inställningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column flex-wrap gap-4"}>
							<SettingsActivity/>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				<div className={"my-3"}>
					<ButtonRemoveActivity/>
				</div>
			</Col>
		</div>
	);
}

export default ActivityProfile;
