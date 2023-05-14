import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { Cards } from "./Utils/utils";
import Card from "../../Components/HomeComponents/Card";
import Icon from "../../Components/Icon";
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
					{Cards.map(({ title, description, icon }, index) => (
						<Card key={index} title={title} description={description}>
							<Icon icon={icon} />
						</Card>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
