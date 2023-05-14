import CalendarMonthView from 'components/CalendarMonthView';
import React from 'react';
import {Container, Stack} from "react-bootstrap";

function CalendarMonth() {
	return (
		<Stack className={""}>
			<CalendarMonthView/>
		</Stack>
	);
}

export default CalendarMonth;
