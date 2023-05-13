import React from "react";
import { Link, Typography } from "@mui/material";
import Icon from "../Icon";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
	return (
		<footer className="flex justify-center items-center p-6 text-gray-800 dark:bg-gray-700 dark:text-white pt-10">
			<a
				href="https://github.com/IbraheemShawhnee"
				className="flex justify-center items-center gap-2 hover:underline"
			>
				<Typography className="text-lg">© Ibraheem Shawhnee</Typography>
				<Icon icon={<GitHubIcon fontSize="large" />} />
			</a>
		</footer>
	);
};

export default Footer;
