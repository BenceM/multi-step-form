import { useState } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Info, { action } from "./pages/Info";
import Plan from "./pages/Plan";
import Extras from "./pages/Extras";
import Summary from "./pages/Summary";
import Layout from "./components/Layout";

// figure out the best way to use state/ pass info + needs summary at the end (redux store maybe)
//navigation navbar + buttons
//css

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Info />} action={action} />
			<Route path="2" element={<Plan />} />
			<Route path="3" element={<Extras />} />
			<Route path="4" element={<Summary />} />
		</Route>,
	),
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
