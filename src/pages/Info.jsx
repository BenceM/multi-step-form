import React from "react";

const Info = () => {
	return (
		<>
			<h1>Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
			<label htmlFor="">Name:</label>
			<input type="text" />
			<label htmlFor="">Email Address:</label>
			<input type="text" />
			<label htmlFor="">Phone Number:</label>
			<input type="text" />
		</>
	);
};

export default Info;
