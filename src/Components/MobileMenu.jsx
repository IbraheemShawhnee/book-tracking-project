import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import { motion } from "framer-motion";
import { isUserSignedIn } from "../Firebase";
import { Box, Typography } from "@mui/material";
import Icon from "./Icon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const MobileMenu = () => {
	const [name] = useUserData();
	const [isOpen, setIsOpen] = useState(false);

	if (isUserSignedIn())
		return (
			<motion.div
				layout
				className="fixed xl:hidden bottom-5 right-5 dark:bg-gray-800 shadow-md rounded-md"
			>
				{isOpen ? (
					<Box className="py-1">
						<Link
							to={`/profile/${name}`}
							className="flex items-center gap-1 w-full px-4 p-2 text-left text-black text-sm dark:text-white hover:text-gray-500 dark:hover:text-gray-300 "
						>
							<Icon icon={<AccountBoxIcon />} />
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
							to="/settings"
							className="flex items-center gap-1 w-full px-4 py-2 text-left text-black text-sm dark:text-white  hover:text-gray-500 dark:hover:text-gray-300"
						>
							<Icon icon={<SettingsIcon />} />
							<Typography>Settings</Typography>
						</Link>
						<button
							className="p-1 w-14 aspect-square"
							onClick={() => setIsOpen(false)}
						>
							<Icon icon={<CloseIcon className="fill-blue-500" />} />
						</button>
					</Box>
				) : (
					<button
						className="p-1 w-14 aspect-square"
						onClick={() => setIsOpen(true)}
					>
						<Icon icon={<MenuIcon className="fill-blue-500" />} />
					</button>
				)}
			</motion.div>
		);
};

export default MobileMenu;
