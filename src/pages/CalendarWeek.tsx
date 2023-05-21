import CalendarWeekView from 'components/CalendarWeekView'
import React from 'react'
import {Stack} from 'react-bootstrap'

function CalendarWeek() {
	return (
		<Stack className={""}>
			<CalendarWeekView/>
		</Stack>
	);
}

export default CalendarWeek;
