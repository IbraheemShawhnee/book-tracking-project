import { Suspense } from "react";
import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Loading from "./Pages/Loading";
import { routes } from "./Utils/Utils";
import React from "react";
import NotFound from "./Pages/NotFound";
import Layout from "./Layouts/Layout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />} errorElement={<NotFound />}>
				{routes.map((route, idx) => (
					<Route path={route.path} key={idx} element={route.component} />
				))}
			</Route>
		)
	);

	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
