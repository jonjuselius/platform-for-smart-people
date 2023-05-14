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
import CalendarDay from 'pages/CalendarDay';
import CalendarWeek from 'pages/CalendarWeek';
import CalendarMonth from 'pages/CalendarMonth';
import ActivityProfile from "./pages/ActivityProfile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/~joju4839/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="participants" element={<Participants />} />
					<Route path="activities" element={<Activities />} />
					<Route path="userprofile" element={<UserProfile />} />
					<Route path="activityprofile" element={<ActivityProfile />} />
					<Route path="calendar" element={<Calendar />} />
					<Route path="calendarday" element={<CalendarDay />} />
					<Route path="calendarweek" element={<CalendarWeek />} />
					<Route path="calendarmonth" element={<CalendarMonth />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
