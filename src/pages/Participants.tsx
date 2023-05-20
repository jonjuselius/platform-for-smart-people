/* eslint-disable */
import React from 'react';
import {Col, Container, Figure, Row} from 'react-bootstrap';
import ParticipantList from "components/ParticipantList";
import Persona, {personas} from "../components/Persona";
import ModalAddParticipant from "../components/ModalAddParticipant";

function Participants() {
	return (
		<Container className={"my-5 d-flex flex-column gap-5"}>
			<ParticipantList/>
			<ModalAddParticipant/>
		</Container>
	);
}

export default Participants;
