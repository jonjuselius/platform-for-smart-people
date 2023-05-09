import React from 'react';
import CalendarDayView from "components/CalendarDayView";
import {Button, ButtonGroup, Col, Container, Row} from 'react-bootstrap';
import {Bucket} from 'components/Bucket';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {ButtonToolbar} from 'reactstrap';
import ConfirmModal from "components/ConfirmModal";
import SaveButton from "components/SaveButton";

function Calendar() {
	return (
		<>
			<h1>Kalender</h1>
			<DndProvider backend={HTML5Backend}>
				<Bucket hideSourceOnDrag={false}/>
				<Row>
					<Col xs={8} md={6}>
						<CalendarDayView/>

						<ButtonToolbar>
							<ButtonGroup className="m-3">
								<SaveButton/>
							</ButtonGroup>
						</ButtonToolbar>
					</Col>
				</Row>
			</DndProvider>
		</>
	);
}

export default Calendar;
