import { Outlet, Form } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

const Layout = () => {
	const data = {};
	return (
		<div className="flex">
			<NavBar />
			<Form>
				<Outlet />
			</Form>
		</div>
	);
};

export default Layout;
