import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

const Layout = () => {
	return (
		<div>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
