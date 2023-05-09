import React from "react";

export default function ListOfBoxes() {
	return (
		<>
			{/*<div className={"d-md-flex flex-md-row justify-content-md-evenly align-items-md-start gap-3 flex-wrap"}>*/}
			<div className={"d-flex flex-row justify-content-evenly align-items-start gap-3 flex-wrap"}>
				<div className={"box monday"}></div>
				<div className={"box tuesday"}></div>
				<div className={"box wednesday"}></div>
				<div className={"box thursday"}></div>
				<div className={"box friday"}></div>
			</div>
		</>
	)
}
