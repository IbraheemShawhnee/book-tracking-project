import React from "react";
import { Button } from "@mui/material";
const LoginButton = () => {
	return (
		<Button className="px-6 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
			Login/Register
		</Button>
	);
};

export default LoginButton;
