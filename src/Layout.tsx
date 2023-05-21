import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'

function Layout() {
	return (
		<div className={"pb-5 mb-5"}>
			<Navbar bg="primary" expand="md" variant={"dark"}>
				<Container>
					<Navbar.Brand as={Link} to="" className={"me-5"}>Platform for Smart People</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="./participants" className={"me-4"}>Deltagare</Nav.Link>
							<Nav.Link as={Link} to="./activities" className={"me-4"}>Aktiviteter</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link as={Link} to="./login">Logga in</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet/>
		</div>
	)
}

export default Layout;
