import src from "assets/Pictogram.png";
import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";

export default function CalendarDayView() {
	return (
		<Container className={"m-0 p-0 border"}>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h5 m-0 fw-light"}>v 16</Col>
				<Col className={"monday p-3 border-bottom border-end h5 m-0 fw-light"}>Måndag</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>09:00-10:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>10:00-11:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>11:00-12:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>12:00-13:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>13:00-14:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>14:00-15:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-light"}>15:00-16:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={80} src="img/empty.png"/>
				</Col>
			</Row>
		</Container>
	)
}
