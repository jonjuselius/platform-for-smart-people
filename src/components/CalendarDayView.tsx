import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import empty from 'assets/img/empty.png'

export default function CalendarDayView() {
	return (
		<Container className={"m-0 p-0 border"}>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h4 m-0 fw-lighter"}>Vecka 19</Col>
				<Col className={"monday p-3 border-bottom border-end h4 m-0 fw-lighter"}>Måndag</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>09:00-10:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>10:00-11:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>11:00-12:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>12:00-13:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>13:00-14:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
			<Row>
				<Col xs={5} md={3} xl={3} className={"bg-light p-3 border-bottom border-end text-center h6 m-0 fw-lighter"}>14:00-15:00</Col>
				<Col className={"bg-light border-bottom border-end"}>
					<Image height={100} src={empty}/>
				</Col>
			</Row>
		</Container>
	)
}
