import React from "react";
import Persona, {anna, personas} from "./Persona";
import Image from "react-bootstrap/Image";
import Anna from "../assets/img/persona/anna.png";
import {Link, useNavigate} from "react-router-dom";

export default function ParticipantList() {
	const navigate = useNavigate();

	return (
		<div className={"d-flex flex-column align-items-center col-lg-10 mx-auto"}>
			<div className={"d-flex flex-row flex-wrap gap-4 p-0 w-100 m-auto justify-content-evenly"}>
				{personas.map(persona => (
					<div onClick={() => navigate('../userprofile', { state: persona })} style={{cursor: "pointer"}}>
						<Persona persona={persona} size={100} showName={true}/>
					</div>
				))}
			</div>
		</div>
	)
}
