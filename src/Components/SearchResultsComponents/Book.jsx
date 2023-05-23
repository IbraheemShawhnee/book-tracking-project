// import React from "react";
// import PropTypes from "prop-types";
// import { isUserSignedIn } from "../../Firebase";
// import { Typography, Button, CardMedia, Box } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import Icon from "../Icon";

// const Book = ({ item, openModal }) => {
// 	if (!item.volumeInfo.imageLinks) {
// 		return "";
// 	}

// 	return (
// 		<li className="w-full">
// 			<Box className="flex gap-3 sm:gap-6">
// 				<CardMedia
// 					component="img"
// 					alt="Book Cover"
// 					className="w-52 h-96 object-contain rounded"
// 					image={item.volumeInfo?.imageLinks?.thumbnail.replace(
// 						/^http:\/\//i,
// 						"https://"
// 					)}
// 				/>
// 				<Box>
// 					<Typography
// 						variant="body2"
// 						className="line-clamp-1 text-sm text-gray-700 dark:text-gray-200"
// 					>
// 						{item.volumeInfo?.authors?.join(", ")}
// 					</Typography>
// 					<Box className="flex gap-2 items-center py-1">
// 						<Typography
// 							variant="h6"
// 							component="h2"
// 							className="line-clamp-1 text-base sm:text-2xl font-bold"
// 						>
// 							{item.volumeInfo.title}
// 						</Typography>
// 						{isUserSignedIn() ? (
// 							<Button
// 								variant="contained"
// 								className="bg-white text-gray-800 hover:bg-gray-200"
// 								onClick={() => openModal(item)}
// 							>
// 								<Icon icon={<AddIcon />} />
// 							</Button>
// 						) : null}
// 					</Box>
// 					<Typography
// 						variant="body1"
// 						className="leading-relaxed line-clamp-2 sm:line-clamp-5"
// 					>
// 						{item.volumeInfo.description}
// 					</Typography>
// 				</Box>
// 			</Box>
// 		</li>
// 	);
// };

// Book.propTypes = {
// 	item: PropTypes.object,
// 	openModal: PropTypes.func,
// };

// export default Book;
import React from "react";
import PropTypes from "prop-types";
import { isUserSignedIn } from "../../Firebase";
import { Typography, Button, CardMedia, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Icon from "../Icon";

const Book = ({ item, openModal }) => {
	if (!item.volumeInfo.imageLinks) {
		return "";
	}
	return (
		<li className="w-full dark:w-full dark:bg-gray-700">
			<Box className="flex gap-3 sm:gap-6">
				<CardMedia
					component="img"
					alt="Book Cover"
					className="w-52 h-96 object-contain rounded"
					image={item.volumeInfo?.imageLinks?.thumbnail.replace(
						/^http:\/\//i,
						"https://"
					)}
				/>
				<Box>
					<Typography
						variant="body2"
						className="line-clamp-1 text-sm text-gray-700 dark:text-gray-200"
					>
						{item.volumeInfo?.authors?.join(", ")}
					</Typography>
					<Box className="flex gap-2 items-center py-1">
						<Typography
							variant="h6"
							component="h2"
							className="line-clamp-1 text-base sm:text-2xl font-bold"
						>
							{item.volumeInfo.title}
						</Typography>
						{isUserSignedIn() ? (
							<Button
								variant="contained"
								className="transition-colors duration-300 transform rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:cursor-pointer"
								onClick={() => openModal(item)}
							>
								<Icon icon={<AddIcon />} />
							</Button>
						) : null}
					</Box>
					<Typography
						variant="body1"
						className="leading-relaxed line-clamp-2 sm:line-clamp-5"
					>
						{item.volumeInfo.description}
					</Typography>
				</Box>
			</Box>
		</li>
	);
};

Book.propTypes = {
	item: PropTypes.object,
	openModal: PropTypes.func,
};

export default Book;
