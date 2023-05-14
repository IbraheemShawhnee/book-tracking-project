import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import useUserData from "../../Hooks/useUserData";
import { signIn } from "../../Firebase";
import Dropdown from "./Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Icon from "../Icon";
const LoginButton = () => {
	const [name, profilePic] = useUserData();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{name ? (
				<Box
					className="relative group"
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				>
					<Box className="flex items-center gap-1 hover:cursor-pointer">
						<img
							className="w-9 h-9 rounded-sm"
							src={profilePic}
							alt="Profile Picture"
						/>
						<Icon icon={<KeyboardArrowDownIcon />} />
					</Box>
					{isOpen && <Dropdown name={name} />}
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
