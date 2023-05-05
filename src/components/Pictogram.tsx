import React from "react";
import src from "assets/Pictogram.png";

export default function Pictogram() {
	return (
		<>
			<img src={src} className={"Pictogram"} alt="Pictogram" draggable="true"/>
			{/*<img src={src} className={"Pictogram"} alt="Pictogram" draggable="false"/>*/}
		</>
	)
}
