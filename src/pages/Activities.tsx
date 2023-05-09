import React from 'react';
import ActivitiesList from "components/ActivitiesList";
import { Container } from 'react-bootstrap';

function Activities() {
	return (
		<Container className={"my-5"}>
			<ActivitiesList/>
		</Container>
	);
}

export default Activities;
