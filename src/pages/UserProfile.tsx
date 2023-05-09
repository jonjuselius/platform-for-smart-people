import React from 'react';
import {Accordion, Col, Container, Stack} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Anna from "assets/img/persona/anna.png";
import Image from "react-bootstrap/Image";
import {Calendar4Week} from 'react-bootstrap-icons';
import {Camera} from 'react-bootstrap-icons';
import QR from "assets/img/qr.png";
import ParticipantList from "../components/ParticipantList";
import ActivitiesList from "../components/ActivitiesList";

function UserProfile() {
	return (
		<div className={"d-sm-flex flex-row gap-3"}>
			<div className="order-1 p-2 my-3">
				<Image src={Anna} className={"persona-profile"} roundedCircle/>
			</div>
			<Col className="order-2 d-flex flex-column gap-3 my-3 mx-3">
				<div className={"d-flex flex-row justify-content-between align-items-end"}>
					<div>
						<h1 className={"display-2 lh-1"}>Anna</h1>
						<h2 className={"display-6 fw-lighter lh-1"}>Grupp 2</h2>
					</div>

					<Stack direction="horizontal">
						<Image src={QR} width={96}/>
					</Stack>
				</div>

				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Anteckningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
							<Link to={"../login"}>Kontaktuppgifter</Link>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Stående aktiviteter</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							<ActivitiesList/>
							<Link to={"../calendar"}>Öppna kalender</Link>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Kommande aktiviteter</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
							<Link to={"../calendar"}>Öppna kalender</Link>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Bilder</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							Anna har ännu inga bilder sparade.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Appinställningar</Accordion.Header>
						<Accordion.Body className={"d-flex flex-column gap-3"}>
							<Link to={"../"}>Färgschema</Link>
							<Link to={"../"}>Kontrast</Link>
							<Link to={"../"}>Textstorlek</Link>
							<Link to={"../"}>Haptisk feedback</Link>
							<Link to={"../"}>Röstuppläsning</Link>
							<Link to={"../"}>Ljudvolym</Link>
							<Link to={"../"}>Mono-stereo</Link>
							<Link to={"../"}>AR-inställningar</Link>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>

				<Stack direction="horizontal" gap={5} className={"mx-3 my-4"}>
					<Link to={"../calendar"}>
						<Calendar4Week size={48}/>
					</Link>
					<Camera size={48}/>
				</Stack>
			</Col>
		</div>
	);
}

export default UserProfile;
