import React, { useState } from "react";
import { Form } from "react-router-dom";

export async function action({ request }) {
	const formData = await request.formData();
	const name = formData.get("name");
	const email = formData.get("email");
	const number = formData.get("number");
	console.log(name, email, number);

	return null;
}

const Info = () => {
	const [loginFormData, setLoginFormData] = useState("");
	function handleChange(e) {
		console.log(e.target.value);
		setLoginFormData(e.target.value);
	}
	return (
		<Form method="post">
			<h1 className="text-3xl font-bold underline">Personal info</h1>
			<p>Please provide your name, email address, and phone number.</p>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				value={loginFormData.name}
				onChange={handleChange}
			/>
			<label htmlFor="email">Email Address:</label>
			<input type="text" name="email" />
			<label htmlFor="number">Phone Number:</label>
			<input type="text" name="number" />
			<button type="submit">Next</button>
		</Form>
	);
};

export default Info;
