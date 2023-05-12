import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
export const Cards = [
	{
		id: 0,
		title: "Discover",
		description: "Explore the vast collection of books available",
		icon: <ManageSearchIcon fontSize="large" color="primary" />,
	},
	{
		id: 1,
		title: "Manage",
		description:
			"Give books a status, set your rating, leave your thoughts in notes",
		icon: <NewspaperIcon fontSize="large" color="primary" />,
	},
	{
		id: 2,
		title: "Track",
		description: "View your statistics wrapped in nice visual charts",
		icon: <GroupsIcon fontSize="large" color="primary" />,
	},
	{
		id: 3,
		title: "Share",
		description:
			"View other people's library and let them view yours, or set your profile private",
		icon: <DataSaverOffIcon fontSize="large" color="primary" />,
	},
];
