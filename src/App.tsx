import React from 'react';
import 'assets/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "pages/Layout";
import Home from "pages/Home";
import Participants from "pages/Participants";
import Activities from "pages/Activities";
import NoPage from "pages/NoPage";
import Login from 'pages/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="participants" element={<Participants />} />
					<Route path="activities" element={<Activities />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
