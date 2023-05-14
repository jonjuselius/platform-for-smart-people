import src from "assets/Pictogram.png";
import React from "react";
import {Col, Container, Row, Image, Figure} from "react-bootstrap";
import empty from 'assets/img/empty.png'
import 'assets/calendar.scss'
import {Link} from "react-router-dom";
import Diska from 'assets/img/pictogram/diska.png'
import Fika from 'assets/img/pictogram/fika.png'

export default function CalendarWeekView() {
	return (
		<div className="calendar">
			<div className="column">
				<div className="label rounded-top-left"><Link to={"../calendarmonth"}>v. 23</Link></div>
				<div className="timeslot">
					<div className="text">09:00–<br/>10:00</div>
				</div>
				<div className="timeslot">
					<div className="text">10:00–<br/>11:00</div>
				</div>
				<div className="timeslot">
					<div className="text">11:00–<br/>12:00</div>
				</div>
				<div className="timeslot">
					<div className="text">12:00–<br/>13:00</div>
				</div>
				<div className="timeslot">
					<div className="text">13:00–<br/>14:00</div>
				</div>
				<div className="timeslot">
					<div className="text">14:00–<br/>15:00</div>
				</div>
				<div className="timeslot">
					<div className="text">15:00–<br/>16:00</div>
				</div>
			</div>
			<div className="column">
				<div className="label weekday monday">Måndag</div>
				<div className="timeslot">
					<Image src={Diska} alt={"Diska"} roundedCircle={true} height={80}/>
				</div>
				<div className="timeslot"></div>
				<div className="timeslot">
					<Image src={Fika} alt={"Fika"} roundedCircle={true} height={80}/>
				</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
			</div>
			<div className="column">
				<div className="label weekday tuesday">Tisdag</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
			</div>
			<div className="column">
				<div className="label weekday wednesday">Onsdag</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
			</div>
			<div className="column">
				<div className="label weekday thursday">Torsdag</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
			</div>
			<div className="column">
				<div className="label friday weekday rounded-top-right">Fredag</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
			</div>
		</div>
	)
}
