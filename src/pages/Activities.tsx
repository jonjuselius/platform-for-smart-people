import React, {useContext, createContext, useState} from 'react';
import ActivitiesList from "components/ActivitiesList";
import {Container, Stack} from 'react-bootstrap';
import ModalAddActivity from "../components/ModalAddActivity";
import {useLocation} from "react-router-dom";
import {diska} from "../components/Activity";
import AlertRemoveParticipantConfirmation from "../components/AlertRemoveActivityConfirmation";
import AlertRemoveActivityConfirmation from "../components/AlertRemoveActivityConfirmation";
import AlertSaveActivityConfirmation from "../components/AlertSaveActivityConfirmation";

function Activities() {
	return (
		<Container className={"my-5 d-flex flex-column gap-5"}>
			<ActivitiesList/>
			<ModalAddActivity/>
			{/*<Stack>*/}
			{/*	<AlertSaveActivityConfirmation show={true}/>*/}
			{/*	<AlertRemoveActivityConfirmation show={true}/>*/}
			{/*</Stack>*/}
		</Container>
	);
}

export default Activities;
