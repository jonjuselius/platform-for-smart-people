/* eslint-disable */
import React from 'react';
import {Col, Container, Figure, Row} from 'react-bootstrap';
import ParticipantList from "components/ParticipantList";

function Participants() {
	return (
		<Container className={"my-5"}>
			<ParticipantList/>
		</Container>
	);
}

export default Participants;
