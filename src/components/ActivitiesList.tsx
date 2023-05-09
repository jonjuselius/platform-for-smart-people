import React from "react";
import Image from "react-bootstrap/Image";
import Baka from 'assets/img/pictogram/baka.png'
import Diska from 'assets/img/pictogram/diska.png'
import Fika from 'assets/img/pictogram/fika.png'
import Måla from 'assets/img/pictogram/måla.png'
import Sticka from 'assets/img/pictogram/sticka.png'
import Yoga from 'assets/img/pictogram/yoga.png'
import Bil from 'assets/img/pictogram/bil.png'
import Blomma from 'assets/img/pictogram/blomma.png'
import Dansa from 'assets/img/pictogram/dansa.png'
import Halsband from 'assets/img/pictogram/halsband.png'
import Hantverk from 'assets/img/pictogram/hantverk.png'
import Musik from 'assets/img/pictogram/musik.png'
import Sy from 'assets/img/pictogram/sy.png'
import Sälja from 'assets/img/pictogram/sälja.png'
import Virka from 'assets/img/pictogram/virka.png'
import Väva from 'assets/img/pictogram/väva.png'
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
