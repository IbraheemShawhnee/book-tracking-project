import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import Book from "../../Components/SearchResultsComponents/Book";
import BookEditModal from "../../Components/SearchResultsComponents/BookEditModal";
import SuccessPopup from "../../Components/Popups/SuccessPopup";
import { Request } from "../../Utils/APIUtils";
import Loading from "../../Components/Shared/Loading";

const SearchResults = () => {
	const { query } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [currentBook, setCurrentBook] = useState(null);
	const [results, setResults] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const currentPageRef = useRef(1);

	const itemsPerPage = 10; // Number of items to display per page

	const fetchResults = async () => {
		const startIndex = (currentPageRef.current - 1) * itemsPerPage;
		const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${itemsPerPage}`;

		const Resp = await Request(url, "GET");
		const fetchedItems = Resp.items || [];
		const fetchedTotalItems = Resp.totalItems || 0;

		setResults(fetchedItems);
		setTotalItems(fetchedTotalItems);
	};

	useEffect(() => {
		currentPageRef.current = 1;
		fetchResults();
	}, [query]);

	useEffect(() => {
		fetchResults();
	}, [currentPageRef.current]);

	const openModal = (book) => {
		setCurrentBook({
			id: book.id,
			title: book.volumeInfo.title,
			imageUrl: book.volumeInfo.imageLinks?.thumbnail.replace(
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

	const handleNextPage = () => {
		currentPageRef.current += 1;
		fetchResults();
	};

	const handlePrevPage = () => {
		currentPageRef.current -= 1;
		fetchResults();
	};

	if (results.length === 0) {
		// While data isn't returned
		return (
			<Box className="flex-1 flex items-center justify-center dark:bg-gray-700">
				<Loading />
			</Box>
		);
	}

	if (!totalItems) {
		// When there are no books
		return (
			<Box className="flex-1 dark:bg-gray-700 text-gray-800 dark:text-white py-4 px-6 lg:px-32 2xl:px-72">
				<Loading />
			</Box>
		);
	}

	return (
		<Box className="flex-1 dark:bg-gray-700 text-gray-800 dark:text-white flex flex-col gap-6 py-4 px-6 lg:px-32 2xl:px-72">
			<Typography className="flex justify-center gap-4 mt-4">
				Total Results:{" "}
				{totalItems -
					Math.min(totalItems, currentPageRef.current * itemsPerPage)}
				. Showing {Math.min(totalItems, currentPageRef.current * itemsPerPage)}{" "}
				results
			</Typography>
			<ul className="flex flex-col items-center gap-6 m-0">
				{results.map((item) => (
					<Book
						item={item}
						openModal={openModal}
						key={item.id}
						sameSiteAttribute="None"
					/>
				))}
			</ul>
			<Box className="flex justify-center gap-4 mt-4">
				{currentPageRef.current > 1 && (
					<Button
						variant="outlined"
						onClick={handlePrevPage}
						className="bg-white text-gray-800 hover:bg-gray-200"
					>
						Previous
					</Button>
				)}
				{currentPageRef.current * itemsPerPage < totalItems && (
					<Button
						variant="outlined"
						onClick={handleNextPage}
						className="bg-white text-gray-800 hover:bg-gray-200"
					>
						Next
					</Button>
				)}
			</Box>
			<AnimatePresence initial={false} mode="wait">
				{isModalOpen && (
					<BookEditModal
						book={currentBook}
						closeModal={closeModal}
						showPopup={showPopup}
						key="modal"
					/>
				)}
				{isPopupOpen && <SuccessPopup text="Book edited successfully" />}
			</AnimatePresence>
		</Box>
	);
};

export default SearchResults;
