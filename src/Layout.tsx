import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {Container, Nav, Navbar, Col, Row, Stack} from "react-bootstrap";
import Navigation from "components/Navigation";
import UserProfile from "pages/UserProfile";
import Calendar from 'pages/Calendar';

function Layout() {
	return <>
		<Navigation/>
		<Calendar/>
		<Outlet/>
	</>
}

export default Layout;
