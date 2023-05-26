import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

const BookList = ({ books, title, sort, openModal }) => {
	const filtered = books
		.filter((book) => book.status === title)
		.sort((prevBook, book) => {
			return (
				book[sort.toLowerCase()] - prevBook[sort.toLowerCase()] ||
				(book[sort.toLowerCase()] < prevBook[sort.toLowerCase()] ? 1 : -1)
			);
		});

	if (filtered.length === 0) return <></>;

	return (
		<Box>
			<Typography variant="h5" className="pl-6 mb-2">
				{title}
			</Typography>
			<Box>
				{filtered.map((book) => {
					return (
						<Box
							key={book.id}
							className="relative flex items-center p-3 pr-6 gap-3 hover:bg-gray-800 hover:text-white text-base sm:text-lg"
						>
							<Box className="w-11 h-11 sm:w-12 sm:h-12 shrink-0">
								<img
									className={`rounded object-cover object-center w-full max-h-full group-hover:bg-gray-700`}
									src={book.imageUrl}
									alt="Book Cover"
									onClick={() => openModal(book)}
								/>
							</Box>
							<Typography className="mr-auto line-clamp-2">
								{book.title}
							</Typography>
							{book.notes ? (
								<Box className="relative group">
									<MessageIcon />
									<Typography className="z-10 hidden md:hidden group-hover:block absolute rounded text-base p-4 -right-1/2 w-max max-w-xs bg-gray-800">
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
						</Box>
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
