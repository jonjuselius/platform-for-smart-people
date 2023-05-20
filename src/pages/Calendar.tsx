import React from 'react';
import CalendarDayView from "components/CalendarDayView";
import {Button, ButtonGroup, Col, Container, Row} from 'react-bootstrap';
import {Bucket} from 'components/Bucket';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {ButtonToolbar} from 'reactstrap';
import ModalConfirmSave from "components/ModalConfirmSave";
import ButtonSave from "components/ButtonSave";
import CalendarWeekView from "../components/CalendarWeekView";

function Calendar() {
	return (
		<>
			<div className={"my-3 mx-3"}>
				<h1 className={"h1 lh-1"}>Kalender</h1>
				<h2 className={"h5 fw-light lh-1"}>Dagvy</h2>
			</div>

			<DndProvider backend={HTML5Backend}>
				<Bucket hideSourceOnDrag={false}/>
				<Row>
					<Col xs={8} md={6}>
						<CalendarDayView/>

						<ButtonToolbar>
							<ButtonGroup className="m-3">
								<ButtonSave/>
							</ButtonGroup>
						</ButtonToolbar>
					</Col>
				</Row>
			</DndProvider>
		</>
	);
}

export default Calendar;
