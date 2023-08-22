import { useState } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Info from "./pages/Info";
import Plan from "./pages/Plan";
import Extras from "./pages/Extras";
import Summary from "./pages/Summary";
import Layout from "./components/Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Info />} />
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
