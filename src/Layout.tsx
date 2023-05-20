import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {Container, Nav, Navbar, Col, Row, Stack} from "react-bootstrap";
import Navigation from "components/Navigation";
import UserProfile from "pages/UserProfile";
import Calendar from 'pages/Calendar';

function Layout() {
	return (
		<div className={"pb-5 mb-5"}>
			<Navigation/>
			<Outlet/>
		</div>
	)
}

export default Layout;
