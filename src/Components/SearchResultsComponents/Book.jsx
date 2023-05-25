// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Typography, CardMedia, Box } from "@mui/material";
// import StatusIcon from "./RenderStatusIcon";
// import { getBookbyId } from "../../Firebase";
// import { useEffect } from "react";
// const Book = ({ item, openModal }) => {
// 	const [status, setStatus] = useState(null);
// 	if (!item.volumeInfo.imageLinks) {
// 		return "";
// 	}
// 	useEffect(() => {
// 		async function fetchBookData(bookId) {
// 			try {
// 				const bookData = await getBookbyId(bookId);
// 				if (bookData) {
// 					setStatus(bookData.status);
// 				} else {
// 					// Book data doesn't exist or couldn't be found
// 					console.log("Book not found");
// 				}
// 			} catch (error) {
// 				// Handle any errors that occurred during the retrieval
// 				console.error("Error fetching book data:", error);
// 			}
// 		}
// 		const bookId = item.id;
// 		fetchBookData(bookId);
// 	});

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
// 						<StatusIcon status={status} openModal={() => openModal(item)} />
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
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, CardMedia, Box } from "@mui/material";
import StatusIcon from "./RenderStatusIcon";
import { getBookbyId } from "../../Firebase";

const Book = ({ item, openModal }) => {
	const [status, setStatus] = useState(null);

	if (!item.volumeInfo.imageLinks) {
		return null;
	}

	useEffect(() => {
		async function fetchBookData(bookId) {
			try {
				const bookData = await getBookbyId(bookId);
				if (bookData) {
					setStatus(bookData.status);
				}
			} catch (error) {
				// Handle any errors that occurred during the retrieval
				console.error("Error fetching book data:", error);
			}
		}

		const bookId = item.id;
		fetchBookData(bookId);
	}, [item.id]);

	return (
		<li className="w-full">
			<Box className="flex flex-col gap-3 sm:gap-6 sm:flex-row">
				<CardMedia
					component="img"
					alt="Book Cover"
					className="w-full h-auto object-contain rounded sm:w-40 h-56 md:w-52 md:h-72"
					src={item.volumeInfo?.imageLinks?.thumbnail.replace(
						/^http:\/\//i,
						"https://"
					)}
					sizes="(max-width: 480px) 40px, (max-width: 768px) 56px, 72px"
				/>
				<Box className="flex flex-col flex-grow">
					<Typography
						variant="body2"
						className="line-clamp-1 text-sm text-gray-700 dark:text-gray-200"
					>
						{item.volumeInfo?.authors?.join(", ")}
					</Typography>
					<Box className="flex items-center justify-between py-1">
						<Typography
							variant="h6"
							component="h2"
							className="line-clamp-1 text-base sm:text-2xl font-bold"
						>
							{item.volumeInfo.title}
						</Typography>
						<StatusIcon status={status} openModal={() => openModal(item)} />
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
