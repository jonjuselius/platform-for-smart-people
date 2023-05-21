import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from 'components/Navigation'

function Layout() {
	return (
		<div className={"pb-5 mb-5"}>
			<Navigation/>
			<Outlet/>
		</div>
	)
}

export default Layout;
