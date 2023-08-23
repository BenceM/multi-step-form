import { Outlet, Form } from "react-router-dom";
import NavBar from "./NavBar";
import React, { useState } from "react";
const INITIAL_DATA = {
	name: "",
	email: "",
	number: "",
	plan: "1",
	yearly: false,
	adds: [false, false, false],
};

const Layout = () => {
	//https://youtu.be/uDCBSnWkuH0?t=1181
	const [data, setData] = useState(INITIAL_DATA);
	return (
		<div className="flex flex-row">
			<NavBar />

			<Outlet />
		</div>
	);
};

export default Layout;
