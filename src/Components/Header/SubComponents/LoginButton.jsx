import Dropdown from "./Dropdown";
import React from "react";
import { signIn } from "../../../Firebase";
import useUserData from "../../../hooks/useUserData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button } from "@mui/material";
import Icon from "../../Icon/index";
const LoginButton = () => {
	const [name, profilePic] = useUserData();
	return (
		<>
			{name ? (
				<Box className="relative group">
					<Box className="flex items-center gap-1 hover:cursor-pointer text-black dark:text-white">
						<img
							className="w-9 h-9 rounded-sm"
							src={profilePic}
							alt="Profile Picture"
							referrerPolicy="no-referrer"
						/>
						<Icon icon={<KeyboardArrowDownIcon />} />
					</Box>
					<Box className="hidden group-hover:block absolute right-0 top-0 bg-white rounded-md shadow-lg">
						<Dropdown name={name} />
					</Box>
				</Box>
			) : (
				<Button
					className="px-6 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					onClick={signIn}
				>
					Login/Register
				</Button>
			)}
		</>
	);
};

export default LoginButton;
