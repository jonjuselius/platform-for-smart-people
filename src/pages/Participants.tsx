/* eslint-disable */
import React from 'react'
import {Container} from 'react-bootstrap'
import ParticipantList from 'components/ParticipantList'
import ModalAddParticipant from '../components/ModalAddParticipant'
import Persona, {personas} from '../components/Persona'
import {useNavigate} from 'react-router-dom'

function Participants() {
	const navigate = useNavigate();
	return (
		<Container className={"my-5 d-flex flex-column gap-5"}>
			<div className={"d-flex flex-column align-items-center col-lg-10 mx-auto"}>
				<div className={"d-flex flex-row flex-wrap gap-4 p-0 w-100 m-auto justify-content-evenly"}>
					{personas.map(persona => (
						<div onClick={() => navigate('../userprofile', { state: persona })} style={{cursor: "pointer"}}>
							<Persona persona={persona} size={100} showName={true}/>
						</div>
					))}
				</div>
			</div>
			<ModalAddParticipant/>
		</Container>
	);
}

export default Participants;
