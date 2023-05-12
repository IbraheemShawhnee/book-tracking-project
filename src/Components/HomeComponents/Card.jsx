import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
const Card = ({ title, description, children }) => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			className="block rounded-xl border border-blue-500 p-8 shadow-xl dark:bg-gray-800 bg-white"
		>
			{children}
			<Typography
				className="mt-4 text-xl font-bold text-gray-900 dark:text-white"
				variant="h2"
			>
				{title}
			</Typography>
			<Typography
				className="mt-1 text-sm text-gray-700 dark:text-gray-300"
				variant="p"
			>
				{description}
			</Typography>
		</motion.div>
	);
};

export default Card;
