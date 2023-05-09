import React from 'react';
import {Accordion, Col, Container, Stack} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Baka from "assets/img/pictogram/baka.png";
import Image from "react-bootstrap/Image";
import {Calendar4Week} from 'react-bootstrap-icons';
import {Camera} from 'react-bootstrap-icons';
import QR from "assets/img/qr.png";
import ParticipantList from "../components/ParticipantList";

function ActivityProfile() {
	return (
		<div className={"d-sm-flex flex-row gap-3"}>
			<div className="order-1 p-2 my-3">
				<Image src={Baka} className={"pictogram-profile"} roundedCircle/>
			</div>
			<Col className="order-2 d-flex flex-column gap-3 my-3 mx-3">
				<div className={"d-flex flex-row justify-content-between align-items-end"}>
					<div>
						<h1 className={"display-2 lh-1"}>Baka</h1>
						<h2 className={"display-6 fw-lighter lh-1"}>Stående aktivitet</h2>
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
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Datum och tid</Accordion.Header>
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
					<Accordion.Item eventKey="2">
						<Accordion.Header>Kommande tillfällen</Accordion.Header>
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
						<Accordion.Header>Deltagare</Accordion.Header>
						<Accordion.Body>
							<ParticipantList/>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>

				<Stack direction="horizontal" gap={5} className={"mx-3 my-4"}>
					<Calendar4Week size={48}/>
					<Camera size={48}/>
				</Stack>
			</Col>
		</div>
	);
}

export default ActivityProfile;
