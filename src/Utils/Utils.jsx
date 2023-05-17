import React from "react";
import { lazy } from "react";
import Home from "../Pages/Home/index.jsx";
const Profile = lazy(() => import("../Pages/Profile/index.jsx"));
const Settings = lazy(() => import("../Pages/Settings/index.jsx"));
const Statistics = lazy(() => import("../Pages/Statistics/index.jsx"));
const SearchResults = lazy(() => import("../Pages/SearchResults/index.jsx"));
// const Home = lazy(() => import("../Pages/Home"));
export const routeName = {
	Home: "Home",
	Profile: "Profile",
	Settings: "Settings",
	Statistics: "Statistics",
};

export const routes = [
	{
		path: "/",
		title: routeName.Home,
		component: <Home />,
	},
	{
		path: "/Statistics",
		title: routeName.Statistics,
		component: <Statistics />,
	},
	{
		path: "/Profile",
		title: routeName.Profile,
		component: <Profile />,
	},
	{
		path: "/Settings",
		title: routeName.Settings,
		component: <Settings />,
	},
	{
		path: "/books/search/:query",
		title: routeName.SearchResults,
		component: <SearchResults />,
	},
];
