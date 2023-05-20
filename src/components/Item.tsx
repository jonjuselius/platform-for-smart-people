import React, {useState} from 'react';
import {Col, Container, Form, Image, Row} from 'react-bootstrap';

import imgDiskborste from "../assets/img/pictogram/items/diskborste.png";
import imgDiskbank from "../assets/img/pictogram/items/diskbänk.png";
import imgDiskmedel from "../assets/img/pictogram/items/diskmedel.png";
import imgTallrik from "../assets/img/pictogram/items/tallrik.png";

export const diskborste = {name: "Diskborste", img: imgDiskborste}
export const diskbank = {name: "Diskborste", img: imgDiskbank}
export const diskmedel = {name: "Diskborste", img: imgDiskmedel}
export const tallrik = {name: "Diskborste", img: imgTallrik}

export const items = [ diskborste, diskbank, diskmedel, tallrik ]

function Item(props: any) {
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

export default Item;
