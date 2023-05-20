import React, {useState} from 'react';
import {Col, Container, Form, Image, Row} from 'react-bootstrap';

import imgDiskborste from "../assets/img/pictogram/items/diskborste.png";
import imgDiskbank from "../assets/img/pictogram/items/diskbänk.png";
import imgDiskmedel from "../assets/img/pictogram/items/diskmedel.png";
import imgTallrik from "../assets/img/pictogram/items/tallrik.png";
import imgGympasko from "../assets/img/pictogram/items/gympasko.png";
import imgKavel from "../assets/img/pictogram/items/kavel.png";
import imgBakplat from "../assets/img/pictogram/items/bakplåt.png";
import imgBakpulver from "../assets/img/pictogram/items/bakpulver.png";
import imgSlickepott from "../assets/img/pictogram/items/slickepott.png";
import imgBakform from "../assets/img/pictogram/items/bakform.png";
import imgElvisp from "../assets/img/pictogram/items/elvisp.png";
import imgBullform from "../assets/img/pictogram/items/bullform.png";
import imgPepparkaksformar from "../assets/img/pictogram/items/pepparkaksformar.png";
import imgMjol from "../assets/img/pictogram/items/mjöl.png";
import imgRecept from "../assets/img/pictogram/items/recept.png";
import imgSlev from "../assets/img/pictogram/items/slev.png";
import imgSkal from "../assets/img/pictogram/items/skål.png";
import imgGarn from "../assets/img/pictogram/items/garn.png";
import imgSynal from "../assets/img/pictogram/items/synål.png";
import imgTradrulle from "../assets/img/pictogram/items/trådrulle.png";
import imgStaffli from "../assets/img/pictogram/items/staffli.png";
import imgPensel from "../assets/img/pictogram/items/pensel.png";
import imgKritor from "../assets/img/pictogram/items/kritor.png";
import imgVattenfarger from "../assets/img/pictogram/items/vattenfärger.png";
import imgKaffe from "../assets/img/pictogram/items/kaffe.png";
import imgTe from "../assets/img/pictogram/items/te.png";
import imgBulle from "../assets/img/pictogram/items/bulle.png";

export const diskborste = {name: "Diskborste", img: imgDiskborste}
export const diskbank = {name: "Diskborste", img: imgDiskbank}
export const diskmedel = {name: "Diskborste", img: imgDiskmedel}
export const tallrik = {name: "Diskborste", img: imgTallrik}
export const gympasko = {name: "Gympasko", img: imgGympasko}
export const kavel = {name: "Kavel", img: imgKavel}
export const bakplat = {name: "Bakplåt", img: imgBakplat}
export const bakpulver = {name: "Bakpulver", img: imgBakpulver}
export const slickepott = {name: "Slickepott", img: imgSlickepott}
export const bakform = {name: "Bakform", img: imgBakform}
export const elvisp = {name: "Elvisp", img: imgElvisp}
export const bullform = {name: "Bullform", img: imgBullform}
export const pepparkaksformar = {name: "Pepparkaksformar", img: imgPepparkaksformar}
export const mjol = {name: "Mjöl", img: imgMjol}
export const recept = {name: "Recept", img: imgRecept}
export const slev = {name: "Slev", img: imgSlev}
export const skal = {name: "Skål", img: imgSkal}
export const garn = {name: "Garn", img: imgGarn}
export const synal = {name: "Synål", img: imgSynal}
export const tradrulle = {name: "Trådrulle", img: imgTradrulle}
export const staffli = {name: "Staffli", img: imgStaffli}
export const kritor = {name: "Kritor", img: imgKritor}
export const vattenfarger = {name: "Vattenfärger", img: imgVattenfarger}
export const pensel = {name: "Pensel", img: imgPensel}
export const kaffe = {name: "Kaffe", img: imgKaffe}
export const te = {name: "Te", img: imgTe}
export const bulle = {name: "Bulle", img: imgBulle}

export const items = [ diskborste, diskbank, diskmedel, tallrik, gympasko, kavel, bakplat, bakpulver, slickepott, bakform, elvisp, bullform, pepparkaksformar, mjol, recept, slev, skal, garn, synal, tradrulle, pensel, kritor, vattenfarger, staffli, kaffe, te, bulle ]

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
