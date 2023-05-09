import React from 'react';
import Landing from "assets/img/landing.png";
import Image from "react-bootstrap/Image";
import {Container, Row} from 'react-bootstrap';
import { Col } from 'reactstrap';

function Home() {
	return (
		<div className={"d-flex flex-column flex-sm-row gap-0 bg-warning"}>
			<div className="order-2 p-2 my-3 d-flex flex-wrap flex-column gap-3 mx-3">
				<h1 className={"display-1 lh-1 m-0 p-0 fw-bold"}>Platform for Smart People</h1>
				<h2 className={"h1 lh-4 fw-lighter"}>Augmented Reality Web UI for Personalization</h2>
			</div>
			<div className={"order-1 my-3"}>
				<Image src={Landing} fluid={true}/>
			</div>
		</div>
	);
}

export default Home;
