import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
const Loading = () => {
	return (
		<Box className="text-center h-full w-full inline-flex items-center justify-center">
			<Box className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
				<CircularProgress size={20} />
				Loading...
			</Box>
		</Box>
	);
};

export default Loading;
