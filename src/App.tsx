import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "Layout";
import Home from "pages/Home";
import Participants from "pages/Participants";
import Activities from "pages/Activities";
import NoPage from "pages/NoPage";
import Login from 'pages/Login';
import UserProfile from 'pages/UserProfile';
import Calendar from 'pages/Calendar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Calendar />} />
					<Route path="participants" element={<Participants />} />
					<Route path="activities" element={<Activities />} />
					<Route path="userprofile" element={<UserProfile />} />
					<Route path="calendar" element={<Calendar />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
