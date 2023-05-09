import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Anna from "../assets/img/persona/anna.png";
import Carol from "../assets/img/persona/carol.png";
import Dave from "../assets/img/persona/dave.png";
import Heidi from "../assets/img/persona/heidi.png";
import Ivan from "../assets/img/persona/ivan.png";
import Mike from "../assets/img/persona/mike.png";
import Pat from "../assets/img/persona/pat.png";
import Rupert from "../assets/img/persona/rupert.png";
import Sybil from "../assets/img/persona/sybil.png";

export default function ParticipantList() {
	return (
		<Container className={"my-5 d-flex flex-row justify-content-evenly align-items-start gap-0 flex-wrap"}>
			<Link to={"../userprofile"}>
				<Image src={Anna} className={"persona"}/>
			</Link>
			<Image src={Carol} className={"persona"}/>
			<Image src={Dave} className={"persona"}/>
			<Image src={Heidi} className={"persona"}/>
			<Image src={Ivan} className={"persona"}/>
			<Image src={Mike} className={"persona"}/>
			<Image src={Pat} className={"persona"}/>
			<Image src={Rupert} className={"persona"}/>
			<Image src={Sybil} className={"persona"}/>
		</Container>
	)
}
