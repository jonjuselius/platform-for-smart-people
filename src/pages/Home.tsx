import React from 'react';
import Landing from "assets/img/landing.png";
import Image from "react-bootstrap/Image";
import {Button, Carousel, Container, Row} from 'react-bootstrap';
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<Carousel variant="dark" indicators={false} controls={true} className="vw-100 vh-100 d-flex flex-column justify-content-between">
				<Carousel.Item>
					<div className="container col-8 px-4 py-5">
						<div className="row flex-lg-row-reverse align-items-center g-5">
							<div className="col-10 col-sm-8 col-lg-6">
								<img src={Landing} className="d-block mx-lg-auto img-fluid text-center" width="700" height="500" loading="lazy"></img>
							</div>
							<div className="col-lg-6">
								<h1 className="display-5 fw-bold lh-1 mb-3">Platform for Smart People</h1>
								<p className="lead">Augmented Reality Web UI for Personalization</p>
								<div className="d-grid gap-2 d-md-flex justify-content-md-start my-5">
									<Link to="login"><Button variant="primary" className={"px-4 gap-3 me-md-2"} size="lg">Logga in</Button></Link>
								</div>
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<Container className="py-5 my-5 text-center">
						<Row className="align-items-center justify-content-center">
							<Col lg={6}>
								<h1 className="display-2 fw-bold">Platform for<br/>Smart People</h1>
								<p className="lead mb-4">Augmented Reality Web UI for Personalization</p>
								<div className="d-grid gap-2 d-sm-flex justify-content-sm-center alig">
									<Link to="login"><Button variant="primary" className={"px-4 gap-3"} size="lg">Logga in</Button></Link>
								</div>
							</Col>
						</Row>
					</Container>
				</Carousel.Item>
			</Carousel>
		</>
		// <div className={"d-flex flex-column flex-sm-row gap-0"}>
		// 	<div className="order-2 p-2 my-3 d-flex flex-wrap flex-column gap-3 mx-3">
		// 		<h1 className={"display-1 lh-1 m-0 p-0 fw-bold"}>Platform for Smart People</h1>
		// 		<h2 className={"h1 lh-4 fw-lighter"}>Augmented Reality Web UI for Personalization</h2>
		// 	</div>
		// 	<div className={"order-1 my-3"}>
		// 		<Image src={Landing} fluid={true}/>
		// 	</div>
		// </div>
	);
}

export default Home;
