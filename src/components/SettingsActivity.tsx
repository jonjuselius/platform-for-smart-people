import {Col, Form, Row} from "react-bootstrap";
import React from "react";

export default function SettingsActivity() {
	return <Form>
		<Row className={"mb-3"}>
			<Col md={3}>
				<Form.Group>
					<Form.Label>Datum:</Form.Label>
					<Form.Control type="date" value={"2023-06-07"}/>
				</Form.Group>
			</Col>
			<Col>
				<Form.Group>
					<Form.Label>Starttid:</Form.Label>
					<Form.Control type="time" value={"13:00"}/>
				</Form.Group>
			</Col>
			<Col>

				<Form.Group>
					<Form.Label>Antal minuter:</Form.Label>
					<Form.Control type="number" value={60} min={0} max={580} step={5}/>
				</Form.Group>
			</Col>
			<Col>
				<Form.Group>
					<Form.Label>Typ:</Form.Label>
					<Form.Check type="checkbox" label={"Stående aktivitet"}/>
				</Form.Group>
			</Col>
		</Row>
		<Row>
			<Col md={3}>
				<Form.Group className="mb-3">
					<Form.Label>Upprepa:</Form.Label>
					<Form.Check type={"radio"} name={"repeat"} label={"Varje dag"}
					            defaultChecked/>
					<Form.Check type={"radio"} name={"repeat"} label={"Varje vecka"}/>
					<Form.Check type={"radio"} name={"repeat"} label={"Varje månad"}/>
					<Form.Check type={"radio"} name={"repeat"} label={"Varje år"}/>
				</Form.Group>
			</Col>
			<Col md={3}>
				<Form.Group className="mb-3">
					<Form.Label>Veckodag:</Form.Label>
					<Form.Check type="checkbox" label={"Måndag"}/>
					<Form.Check type="checkbox" label={"Tisdag"}/>
					<Form.Check type="checkbox" label={"Onsdag"}/>
					<Form.Check type="checkbox" label={"Torsdag"}/>
					<Form.Check type="checkbox" label={"Fredag"}/>
				</Form.Group>
			</Col>
			<Col md={"auto"}>
				<Form.Group className="mb-3">
					<Form.Label>Månad:</Form.Label>
					<Form.Control type="month" value={"2023-06"}/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Vecka:</Form.Label>
					<Form.Control type="week" value={"2023-W23"}/>
				</Form.Group>
			</Col>
		</Row>
	</Form>
}
