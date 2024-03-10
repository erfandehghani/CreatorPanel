import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Catgories from "./components/Catgories";
import Content from "./components/Content";
import Users from "./components/Users";
import Profile from "./components/Profile";

const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Dashboard />} />
			<Route path="/Catgories" element={<Catgories />} />
			<Route path="/Content" element={<Content />} />
			<Route path="/Users" element={<Users />} />
			<Route path="/Profile" element={<Profile />} />
		</Routes>
	);
};

export default Router;
