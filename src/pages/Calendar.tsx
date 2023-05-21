import React from 'react'
import CalendarMonthView from 'components/CalendarMonthView'
import CalendarWeekView from 'components/CalendarWeekView'
import { Container } from 'react-bootstrap'

function Calendar() {
	return (
		// <CalendarMonthView/>
		<Container className={'py-4'}>
			<CalendarWeekView/>
		</Container>
	)
}

export default Calendar
