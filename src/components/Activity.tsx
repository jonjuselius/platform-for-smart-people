import React, {useState} from 'react';
import {Col, Container, Form, Image, Row} from 'react-bootstrap';

import imgDiska from "../assets/img/pictogram/activities/diska.png";
import imgBaka from "../assets/img/pictogram/activities/baka.png";
import imgYoga from "../assets/img/pictogram/activities/yoga.png";

export const diska = {name: "Diskborste", img: imgDiska}
export const baka = {name: "Diskborste", img: imgBaka}
export const yoga = {name: "Diskborste", img: imgYoga}

export const activities = [ diska, baka, yoga ]

function Activity(props: any) {
	const name = props.item.name
	const img = props.item.img
	const width = props.size
	const height = props.size
	const showName = props.showName
	const rounded = props.rounded

	return (
		<div style={{width: width, padding: 0, margin: 0, backgroundColor: "transparent", textAlign: "center", wordWrap: "break-word"}}>
			<Image src={img} style={{width: width, height: height, objectFit: "cover", backgroundColor: "transparent"}} rounded={rounded}/>
			{showName &&
				<header style={{fontSize: "1.5em"}}>{name}</header>
			}
		</div>
	);
}

export default Activity;
