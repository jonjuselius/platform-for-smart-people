import React, {useState} from 'react';
import {Col, Container, Form, Image, Row} from 'react-bootstrap';

import imgAnna from "../assets/img/persona/anna.png";
import imgBob from "../assets/img/persona/bob.png";
import imgCarol from "../assets/img/persona/carol.png";
import imgDave from "../assets/img/persona/dave.png";
import imgEmily from "../assets/img/persona/emily.png";
import imgEvelina from "../assets/img/persona/evelina.png";
import imgHeidi from "../assets/img/persona/heidi.png";
import imgIvan from "../assets/img/persona/ivan.png";
import imgJudy from "../assets/img/persona/judy.png";
import imgMike from "../assets/img/persona/mike.png";
import imgNadja from "../assets/img/persona/nadja.png";
import imgOscar from "../assets/img/persona/oscar.png";
import imgPat from "../assets/img/persona/pat.png";
import imgRupert from "../assets/img/persona/rupert.png";
import imgSybil from "../assets/img/persona/sybil.png";
import {diskbank, diskborste, diskmedel, tallrik} from "./Item";
import {diska, baka, yoga} from "./Activity";

export const anna = {name: "Anna", age: 24, img: imgAnna, description: "Anna använder appen för att få mer struktur.", group: 2, items: [diskborste, diskbank, diskmedel, tallrik], activities: [diska, baka, yoga]}
export const bob = {name: "Bob", age: 25, img: imgBob, description: "Har nyligen flyttat till Stockholm. Går på yoga.", group: 1, items: [diskborste], activities: [diska]}
export const carol = {name: "Carol", age: 24, img: imgCarol, description: "Bakar och går på yogapass regelbundet.", group: 1, items: [diskborste], activities: [diska]}
export const dave = {name: "Dave", age: 25, img: imgDave, description: "Besväras av färgblindhet. Går på yoga.", group: 1, items: [diskborste], activities: [diska]}
export const emily = {name: "Emily", age: 25, img: imgEmily, description: "Emilys favoritfärg är röd.", group: 1, items: [diskborste], activities: [diska]}
export const evelina = {name: "Evelina", age: 25, img: imgEvelina, description: "Evelina är ansvarig för att ta hand om växterna.", group: 1, items: [diskborste], activities: [diska]}
export const heidi = {name: "Heidi", age: 25, img: imgHeidi, description: "Ansvarig för försäljningen på Hangar 5. Dansar.", group: 1, items: [diskborste], activities: [diska]}
export const ivan = {name: "Ivan", age: 25, img: imgIvan, description: "Tycker om kontraster.", group: 1, items: [diskborste], activities: [diska]}
export const judy = {name: "Judy", age: 25, img: imgJudy, description: "Är ny på verksamheten. Gillar att dansa.", group: 1, items: [diskborste], activities: [diska]}
export const mike = {name: "Mike", age: 25, img: imgMike, description: "Ogillar kontraster.", group: 1, items: [diskborste], activities: [diska]}
export const nadja = {name: "Nadja", age: 25, img: imgNadja, description: "Hjälpsam och omtänksam.", group: 1, items: [diskborste], activities: [diska]}
export const oscar = {name: "Oscar", age: 25, img: imgOscar, description: "Har svårt att läsa, synen har försämrats det senaste året.", group: 1, items: [diskborste], activities: [diska]}
export const pat = {name: "Pat", age: 25, img: imgPat, description: "Intressen är bland annat datorer och fotografering.", group: 1, items: [diskborste], activities: [diska]}
export const rupert = {name: "Rupert", age: 25, img: imgRupert, description: "Är proffs på att sticka, sy, virka och väva.", group: 1, items: [diskborste], activities: [diska]}
export const sybil = {name: "Sybil", age: 25, img: imgSybil, description: "Tycker om att sjunga och lyssna på musik. Spelar gitarr.", group: 2, items: [diskborste], activities: [diska]}

export const personas = [ anna, bob, carol, dave, emily, evelina, heidi, ivan, judy, mike, nadja, oscar, pat, rupert, sybil ]

function Persona(props: any) {
	const name = props.persona.name
	const age = props.persona.age
	const img = props.persona.img
	const width = props.size
	const height = props.size
	const showName = props.showName

	return (
		<div style={{width: width, padding: 0, margin: 0, backgroundColor: "transparent", textAlign: "center", wordWrap: "break-word"}}>
			<Image src={img} style={{width: width, height: height, objectFit: "cover", backgroundColor: "transparent"}}/>
			{showName &&
				<header style={{fontSize: "1.5em"}}>{name}</header>
			}
		</div>
	);
}

export default Persona;
