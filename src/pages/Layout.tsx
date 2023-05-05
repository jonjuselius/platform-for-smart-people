import React from 'react';
import {Outlet, Link} from "react-router-dom";
import {Container, Nav, Navbar, Col, Row, Stack} from "react-bootstrap";
import Navigation from "components/Navigation";

function Layout() {
    return <>
        <Stack>
            <Navigation/>
            <Stack>
                <Outlet/>
            </Stack>
        </Stack>
    </>
}

export default Layout;
