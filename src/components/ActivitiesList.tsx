import React from "react";
import Image from "react-bootstrap/Image";
import Baka from 'assets/img/pictogram/activities/baka.png'
import Diska from 'assets/img/pictogram/activities/diska.png'
import Fika from 'assets/img/pictogram/activities/fika.png'
import Måla from 'assets/img/pictogram/activities/måla.png'
import Sticka from 'assets/img/pictogram/activities/sticka.png'
import Yoga from 'assets/img/pictogram/activities/yoga.png'
import Bil from 'assets/img/pictogram/activities/bil.png'
import Blomma from 'assets/img/pictogram/activities/blomma.png'
import Dansa from 'assets/img/pictogram/activities/dansa.png'
import Halsband from 'assets/img/pictogram/activities/halsband.png'
import Hantverk from 'assets/img/pictogram/activities/hantverk.png'
import Musik from 'assets/img/pictogram/activities/musik.png'
import Sy from 'assets/img/pictogram/activities/sy.png'
import Sälja from 'assets/img/pictogram/activities/sälja.png'
import Virka from 'assets/img/pictogram/activities/virka.png'
import Väva from 'assets/img/pictogram/activities/väva.png'
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Anna from "../assets/img/persona/anna.png";

export default function ActivitiesList() {
	return (
		<Container className={"d-flex flex-row justify-content-evenly align-items-start gap-5 flex-wrap"}>
			<Link to={"../activityprofile"}>
				<Image src={Baka} className={"pictogram"} roundedCircle={true}/>
			</Link>
			<Image src={Diska} className={"pictogram"} roundedCircle={true}/>
			<Image src={Fika} className={"pictogram"} roundedCircle={true}/>
			<Image src={Måla} className={"pictogram"} roundedCircle={true}/>
			<Image src={Sticka} className={"pictogram"} roundedCircle={true}/>
			<Image src={Yoga} className={"pictogram"} roundedCircle={true}/>
			<Image src={Bil} className={"pictogram"} roundedCircle={true}/>
			<Image src={Blomma} className={"pictogram"} roundedCircle={true}/>
			<Image src={Dansa} className={"pictogram"} roundedCircle={true}/>
			<Image src={Halsband} className={"pictogram"} roundedCircle={true}/>
			<Image src={Hantverk} className={"pictogram"} roundedCircle={true}/>
			<Image src={Musik} className={"pictogram"} roundedCircle={true}/>
			<Image src={Sy} className={"pictogram"} roundedCircle={true}/>
			<Image src={Sälja} className={"pictogram"} roundedCircle={true}/>
			<Image src={Virka} className={"pictogram"} roundedCircle={true}/>
			<Image src={Väva} className={"pictogram"} roundedCircle={true}/>
		</Container>
	)
}
