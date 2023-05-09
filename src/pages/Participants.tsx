/* eslint-disable */
import React from 'react';
import {Col, Container, Figure, Row} from 'react-bootstrap';
import ParticipantList from "components/ParticipantList";

function Participants() {
	return (
		<>
			{/*<h1 className={"text-center mt-3"}>Deltagare</h1>*/}
			<ParticipantList/>
		</>
	);
}

export default Participants;
