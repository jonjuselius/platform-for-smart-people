import src from "assets/Pictogram.png";
import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import empty from 'assets/img/empty.png'
import 'assets/calendar.scss'
import { Link } from "react-router-dom";
import Fika from "../assets/img/pictogram/activities/fika.png";
import Diska from "../assets/img/pictogram/activities/diska.png";
import CalendarItemDiska from "./CalendarItemDiska";

export default function CalendarDayView2() {
	return (
		<div className="calendar">
			<div className="column">
				<div className="label rounded-top-left"><Link to={"../calendarweek"}>v. 23</Link></div>
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
				<div className="timeslot rounded-bottom-left">
					<div className="text">15:00–<br/>16:00</div>
				</div>
			</div>
			<div className="column">
				<div className="label monday weekday rounded-top-right">Måndag</div>
				<div className="timeslot">
					<CalendarItemDiska/>
				</div>
				<div className="timeslot"></div>
				<div className="timeslot">
					<Image src={Fika} alt={"Fika"} roundedCircle={true} height={80}/>
				</div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot"></div>
				<div className="timeslot weekday rounded-bottom-right"></div>
			</div>
		</div>
	)
}
