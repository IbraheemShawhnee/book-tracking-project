import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Card from "../../Components/HomeComponents/Card";
import Icon from "../../Components/Icon";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

const Home = () => {
	return (
		<Box className="flex-1 dark:bg-gray-700 grid place-items-center bg-wave dark:bg-wave-dark bg-no-repeat bg-scroll bg-cover bg-center">
			<Box className="mx-auto max-w-max px-4 py-12 sm:px-6 lg:px-8">
				<Box className="mx-auto max-w-lg text-center">
					<Typography
						className="text-3xl font-bold sm:text-4xl dark:text-white"
						variant="h2"
					>
						BookBite
					</Typography>
					<Typography
						className="mt-4 text-base font-semibold tracking-wide text-blue-600 dark:text-blue-300 uppercase"
						variant="p"
					>
						Storing books made easier
					</Typography>
				</Box>
				<Box className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
					<Card
						title={"Discover"}
						description={"Explore the vast collection of books available"}
					>
						<Icon
							icon={<ManageSearchIcon fontSize="large" color="primary" />}
						/>
					</Card>
					<Card
						title={"Manage"}
						description={
							"Give books a status, set your rating, leave your thoughts in notes"
						}
					>
						<Icon icon={<NewspaperIcon fontSize="large" color="primary" />} />
					</Card>
					<Card
						title={"Track"}
						description={"View your statistics wrapped in nice visual charts"}
					>
						<Icon icon={<GroupsIcon fontSize="large" color="primary" />} />
					</Card>
					<Card
						title={"Share"}
						description={
							"View other people's library and let them view yours, or set your profile private"
						}
					>
						<Icon
							icon={<DataSaverOffIcon fontSize="large" color="primary" />}
						/>
					</Card>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
