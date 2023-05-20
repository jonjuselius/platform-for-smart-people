import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {Form, Image, ListGroup, Stack} from "react-bootstrap";
import Diska from "../assets/img/pictogram/activities/diska.png";
import React from "react";
import {List, ListInlineItem} from "reactstrap";
import {ListOl} from "react-bootstrap-icons";
import SaveButton from "./SaveButton";
import RemoveButton from 'components/RemoveButton';

const popover = (
	<Popover id="popover-basic">
		<Popover.Header as="h3">Diska</Popover.Header>
		<Popover.Body className={"d-flex flex-column gap-3"}>
			<ListGroup>
				<ListGroup.Item className={"d-flex flex-row gap-3"}>
					<Form.Label htmlFor="startTime"><strong>Från:</strong></Form.Label>
					<Stack>
						<Form.Control type="time" id="startTime" aria-describedby="startTimeHelpBlock" value={"09:15"}/>
						<Form.Text id="startTimeHelpBlock" muted>Aktivitetens starttid.</Form.Text>
					</Stack>
				</ListGroup.Item>
				<ListGroup.Item className={"d-flex flex-row gap-3"}>
					<Form.Label htmlFor="stopTime"><strong>Till:</strong></Form.Label>
					<Stack>
						<Form.Control type="time" id="stopTime" aria-describedby="stopTimeHelpBlock" value={"09:30"}/>
						<Form.Text id="stopTimeHelpBlock" muted>Aktivitetens sluttid.</Form.Text>
					</Stack>
				</ListGroup.Item>
			</ListGroup>
			<div className={"d-flex flex-row justify-content-between"}>
				<RemoveButton name={"Ta bort"}/>
				<SaveButton name={"Spara"}/>
			</div>
		</Popover.Body>
	</Popover>
);

const CalendarItemDiska = () => (
	<OverlayTrigger trigger="click" placement="right" overlay={popover}>
		<Image src={Diska} alt={"Diska"} roundedCircle={true} height={80}/>
	</OverlayTrigger>
);

export default CalendarItemDiska
