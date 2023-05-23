import React from "react";
import PropTypes from "prop-types";
import { Typography, Button, Box } from "@mui/material";
import { auth, isUserSignedIn } from "../../Firebase";
import MessageIcon from "@mui/icons-material/Message";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BookList = ({ books, title, sort, openModal, username }) => {
	const filtered = books
		.filter((book) => book.status === title)
		.sort((prevBook, book) => {
			// if property is a number uses 1st method, else uses 2nd
			return (
				book[sort.toLowerCase()] - prevBook[sort.toLowerCase()] ||
				(book[sort.toLowerCase()] < prevBook[sort.toLowerCase()] ? 1 : -1)
			);
		});
	const authorized =
		isUserSignedIn() && username === auth.currentUser.displayName;

	if (filtered.length === 0) return <></>;

	return (
		<Box>
			<Typography variant="h5" className="pl-6 mb-2">
				{title}
			</Typography>
			<Box>
				{filtered.map((book) => {
					return (
						<div
							key={book.id}
							className="relative group-one flex items-center p-3 pr-6 gap-3 hover:bg-gray-800 hover:text-white text-base sm:text-lg"
						>
							{/* full image on hover */}
							<img
								src={book.imageUrl}
								className="hidden lg:group-one-hover:block absolute -left-36 rounded"
								alt="Book Cover"
							/>
							<Box className="w-11 h-11 sm:w-12 sm:h-12 shrink-0">
								{/* small image for list */}
								<img
									className={`rounded object-cover object-center w-full max-h-full group-one-hover:hidden`}
									src={book.imageUrl}
									alt="Book Cover"
								/>
								{/* Edit button on hover */}
								{authorized && (
									<Button
										className="rounded w-full h-full hidden bg-gray-700 group-one-hover:flex items-center justify-center"
									>
										<MoreHorizIcon />
									</Button>
								)}
							</Box>
							<Typography className="mr-auto line-clamp-2">
								{book.title}
							</Typography>
							{book.notes ? (
								<Box className="group-two relative">
									<MessageIcon />
									<Typography className="z-10 hidden md:group-two-hover:block absolute rounded text-base p-4 -right-1/2 w-max max-w-xs bg-gray-800">
										{book.notes}
									</Typography>
								</Box>
							) : null}
							{book.rating ? (
								<Typography className="whitespace-nowrap ml-1">
									<span className="hidden sm:inline-block mr-1">Rating:</span>
									<span>{book.rating}/10</span>
								</Typography>
							) : null}
						</div>
					);
				})}
			</Box>
		</Box>
	);
};

BookList.propTypes = {
	books: PropTypes.array,
	title: PropTypes.string,
	sort: PropTypes.string,
	openModal: PropTypes.func,
	username: PropTypes.string,
};

export default BookList;
