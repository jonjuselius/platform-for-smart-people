import React, {useState, createContext} from "react";
import Persona, {anna, personas} from "./Persona";
import Image from "react-bootstrap/Image";
import {Link, useNavigate} from "react-router-dom";
import Activity, { activities } from "./Activity";

export default function ActivitiesList() {
	const navigate = useNavigate();

	return (
		<div className={"d-flex flex-column align-items-center col-lg-10 mx-auto"}>
			<div className={"d-flex flex-row flex-wrap gap-4 p-0 w-100 m-auto justify-content-evenly"}>
				{activities.map(activity => (
					<div onClick={() => navigate('../activityprofile', { state: activity })} style={{cursor: "pointer"}}>
					 	<Activity activity={activity} size={100} showName={true} roundedCircle={true}/>
					</div>
				))}
			</div>
		</div>
	)
}
