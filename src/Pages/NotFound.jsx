import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const NotFound = () => {
	return (
		<Box className="flex-1 h-screen flex flex-col items-center justify-center text-gray-800 dark:text-white dark:bg-gray-700 text-center px-8">
			<Typography variant="h2" component="h2" gutterBottom>
				404
			</Typography>
			<Typography variant="h4" component="h4" gutterBottom>
				Oops! That page can’t be found
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				The page you are looking for doesn’t exist
			</Typography>
			<Button component={Link} to="/" variant="contained" color="primary">
				Go to Homepage
			</Button>
		</Box>
	);
};

export default NotFound;
