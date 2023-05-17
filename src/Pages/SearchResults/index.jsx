import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useQueryResults from "../../Hooks/useQueryResults";
import { Box, Container, Typography } from "@mui/material";
import Loading from "../../Components/SearchResultsComponents/Loading";
import Book from "../../Components/SearchResultsComponents/Book";
import BookEditModal from "../../Components/SearchResultsComponents/BookEditModal";
import SuccessPopup from "../../Components/Popups/SuccessPopup";
const SearchResults = () => {
	const query = useParams().query;
	const results = useQueryResults(query);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [currentBook, setCurrentBook] = useState(null);

	const openModal = (book) => {
		setCurrentBook({
			id: book.id,
			title: book.volumeInfo.title,
			imageUrl: book.volumeInfo.imageLinks.thumbnail.replace(
				/^http:\/\//i,
				"https://"
			),
		});
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setCurrentBook(null);
		setIsModalOpen(false);
	};

	const showPopup = () => {
		setIsPopupOpen(true);

		setTimeout(() => setIsPopupOpen(false), 2000);
	};

	if (results === undefined) {
		//while data isn't returned
		return (
			<Box className="flex-1 flex items-center justify-center dark:bg-gray-700">
				<Loading />
			</Box>
		);
	}

	if (!results?.totalItems) {
		//when there are no books
		return (
			<Box className="flex-1 dark:bg-gray-700 text-gray-800 dark:text-white py-4 px-6 lg:px-32 2xl:px-72">
				<Typography>No results found. Try changing your request</Typography>
			</Box>
		);
	}

	return (
		<Container className="flex-1 dark:bg-gray-700 text-gray-800 dark:text-white flex flex-col gap-6 py-4 px-6 lg:px-32 2xl:px-72">
			<Typography>Total Results: {results.totalItems}. Showing first 10 results</Typography>
			<ul className="flex flex-col items-center gap-6 m-0">
				{results.items.map((item) => (
					<Book item={item} openModal={openModal} key={item.id} />
				))}
			</ul>
			<AnimatePresence initial={false} mode="wait">
				{isModalOpen && (
					<BookEditModal
						book={currentBook}
						closeModal={closeModal}
						showPopup={showPopup}
						key="modal"
					/>
				)}
				{isPopupOpen && <SuccessPopup text="Book edited succesfully" />}
			</AnimatePresence>
		</Container>
	);
};

export default SearchResults;
