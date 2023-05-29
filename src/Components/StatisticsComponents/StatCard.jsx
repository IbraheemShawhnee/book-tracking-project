import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Icon from "../../Components/Icon/index";
import { PropTypes } from "prop-types";

const StatCard = ({ icon, value, label }) => {
	return (
		<Paper className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:text-black">
			<Box className="flex items-center p-2 sm:p-4 ">
				<Icon icon={icon} />
			</Box>
			<Box className="flex flex-col justify-center">
				<Typography variant="h4" className="font-semibold leading-none">
					{value}
				</Typography>
				<Typography variant="subtitle1" className="capitalize">
					{label}
				</Typography>
			</Box>
		</Paper>
	);
};

export default StatCard;

StatCard.propTypes = {
	icon: PropTypes.icon,
	value: PropTypes.value,
	label: PropTypes.array,
};
