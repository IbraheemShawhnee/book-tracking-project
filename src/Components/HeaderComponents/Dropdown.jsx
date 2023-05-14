import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Icon from "../Icon/index";

const Dropdown = ({ name }) => {
	return (
		<motion.div>
			<Box className="py-1">
				<Link
					to={`/profile/${name}`}
					className="flex items-center gap-1 w-full px-4 p-2 text-left text-sm dark:text-white hover:text-gray-500 dark:hover:text-gray-300 "
				>
					<Icon icon={<Person2Icon />} />
				</Link>
				<Link
					to={`/profile/${name}/statistics`}
					className="flex items-center gap-1 w-full px-4 py-2 text-left text-sm dark:text-white  hover:text-gray-500 dark:hover:text-gray-300"
				>
					<Icon icon={<StackedLineChartIcon />} />
				</Link>
				<Link
					to={`/settings`}
					className="flex items-center gap-1 w-full px-4 py-2 text-left text-sm dark:text-white  hover:text-gray-500 dark:hover:text-gray-300"
				>
					<Icon icon={<SettingsApplicationsIcon />} />
				</Link>
			</Box>
		</motion.div>
	);
};

export default Dropdown;
