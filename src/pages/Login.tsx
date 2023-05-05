import React from 'react';
import LoginForm from "components/LoginForm";
import {Container, Row, Col} from 'react-bootstrap';

function Login() {
	return (
		<div className="py-5 my-5">
			<Container>
				<Row className="align-items-center justify-content-center">
					<Col md={6}>
						<h1 className={"pb-3 text-center"}>Logga in</h1>
						<LoginForm/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Login;
