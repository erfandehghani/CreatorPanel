import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Catgories from "./components/Catgories";
import Content from "./components/Content";

const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Dashboard />} />
			<Route path="/Catgories" element={<Catgories />} />

			<Route path="/Content" element={<Content />} />
		</Routes>
	);
};

export default Router;
