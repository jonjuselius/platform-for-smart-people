import React, {createContext, useState, useContext} from 'react';
import {Col, Container, Form, Image, Row} from 'react-bootstrap';

import imgDiska from "../assets/img/pictogram/activities/diska.png";
import imgBaka from "../assets/img/pictogram/activities/baka.png";
import imgYoga from "../assets/img/pictogram/activities/yoga.png";
import imgDansa from "../assets/img/pictogram/activities/dansa.png";
import imgFika from "../assets/img/pictogram/activities/fika.png";
import imgMåla from "../assets/img/pictogram/activities/måla.png";
import imgSticka from "../assets/img/pictogram/activities/sticka.png";
import imgSy from "../assets/img/pictogram/activities/sy.png";
import imgSalja from "../assets/img/pictogram/activities/sälja.png";
import imgVava from "../assets/img/pictogram/activities/väva.png";
import {bakform, bakplat, bakpulver, bulle, bullform, diskbank, diskborste, diskmedel, elvisp, garn, gympasko, kaffe, kavel, kritor, mjol, pensel, pepparkaksformar, recept, skal, slev, slickepott, staffli, synal, tallrik, te, tradrulle, vattenfarger} from '../components/Item';
import {anna, personas} from '../components/Persona';

export const diska = {name: "Diska", img: imgDiska, description: "Varje dag klockan 13:00.", participants: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], items: [diskborste, diskbank, diskmedel, tallrik], calendar: [new Date(2023,5,7, 13, 0), new Date(2023,5,8, 13, 0), new Date(2023,5,9, 13, 0)]}
export const baka = {name: "Baka", img: imgBaka, description: "Varje fredag klockan 10:00.", participants: [4,8,11,12,13], items: [bakform, bakplat, bakpulver, bullform, elvisp, kavel, mjol, pepparkaksformar, recept, skal, slev, slickepott], calendar: [new Date(2023,5,9, 10, 0), new Date(2023,5,16, 10, 0), new Date(2023,5,23, 10, 0)]}
export const yoga = {name: "Yoga", img: imgYoga, description: "Varje måndag klockan 14:00.", participants: [1,2,3], items: [gympasko], calendar: [new Date(2023,5,12, 14, 0), new Date(2023,5,19, 14, 0), new Date(2023,5,26, 14, 0)]}
export const fika = {name: "Fika", img: imgFika, description: "Stående aktivitet.", participants: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], items: [kaffe, te, bulle], calendar: [new Date(2023,5, 7, 16, 0)]}
export const mala = {name: "Måla", img: imgMåla, description: "Stående aktivitet.", participants: [1,4,7,8,9], items: [vattenfarger, pensel, staffli, kritor], calendar: [new Date(2023,5, 7, 10, 30)]}
export const sticka = {name: "Sticka", img: imgSticka, description: "Stående aktivitet.", participants: [13,14], items: [garn, synal, tradrulle], calendar: [new Date(2023,5, 9, 9, 0)]}

export const activities = [ diska, baka, yoga, fika, mala, sticka ]

function Activity(props: any) {
	const name = props.activity.name
	const img = props.activity.img
	const width = props.size
	const height = props.size
	const showName = props.showName
	const rounded = props.rounded
	const roundedCircle = props.roundedCircle

	return (
		<div style={{width: width, padding: 0, margin: 0, backgroundColor: "transparent", textAlign: "center", wordWrap: "break-word"}}>
			<Image src={img} style={{width: width, height: height, objectFit: "cover", backgroundColor: "transparent"}} rounded={rounded} roundedCircle={roundedCircle}/>
			{showName &&
				<header style={{fontSize: "1.5em"}}>{name}</header>
			}
		</div>
	);
}

export default Activity;
