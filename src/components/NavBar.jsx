import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
	return (
		<div className="flex flex-col gap-5 bg-nav-desk-img h-screen">
			<NavLink to={"/"} className={`flex flex-row gap-1`}>
				<p>1</p>
				<p>STEP 1</p>
				<h3>YOUR INFO</h3>
			</NavLink>

			<NavLink to={"/2"} className={`flex flex-row gap-1`}>
				<p>2</p>
				<p>STEP 2</p>
				<h3>YOUR INFO</h3>
			</NavLink>

			<NavLink to={"/3"} className={`flex flex-row gap-1`}>
				<p>3</p>
				<p>STEP 3</p>
				<h3>YOUR INFO</h3>
			</NavLink>

			<NavLink to={"/4"} className={`flex flex-row gap-1`}>
				<p>4</p>
				<p>STEP 4</p>
				<h3>YOUR INFO</h3>
			</NavLink>
		</div>
	);
};

export default NavBar;
