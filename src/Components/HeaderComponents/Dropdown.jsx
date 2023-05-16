import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Icon from "../Icon/index";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Dropdown = ({ name }) => {
	return (
		<motion.div
			className={`hidden xl:block absolute origin-top-right top-9 right-0 py-2 z-10 min-w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-3 ring-white focus:outline-none`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Box className="py-1">
				<Link
					to={`/profile/${name}`}
					className="flex items-center gap-1 w-full px-4 p-2 text-left text-sm  dark:text-white hover:text-gray-500 dark:hover:text-gray-300 "
				>
					hh
					<Icon icon={<Person2Icon />} />
					<Typography>Profile</Typography>
				</Link>
				<Link
					to={`/profile/${name}/statistics`}
					className="flex items-center gap-1 w-full px-4 py-2 text-left text-black text-sm dark:text-white  hover:text-gray-500 dark:hover:text-gray-300"
				>
					<Icon icon={<StackedLineChartIcon />} />
					<Typography>Statistics</Typography>
				</Link>
				<Link
					to={`/settings`}
					className="flex items-center gap-1 w-full px-4 py-2 text-left text-black text-sm dark:text-white  hover:text-gray-500 dark:hover:text-gray-300"
				>
					<Icon icon={<SettingsApplicationsIcon />} />
					<Typography>Settings</Typography>
				</Link>
			</Box>
		</motion.div>
	);
};

Dropdown.propTypes = {
	name: PropTypes.string,
};

export default Dropdown;
