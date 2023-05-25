// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { motion } from "framer-motion";
// import { saveBook, getBookbyId, deleteBookById } from "../../Firebase";
// import Backdrop from "./Backdrop";
// import {
// 	Button,
// 	InputLabel,
// 	MenuItem,
// 	Select,
// 	TextField,
//   Box
// } from "@mui/material";

// const BookEditModal = ({ book, closeModal, showPopup }) => {
// 	const [status, setStatus] = useState("");
// 	const [rating, setRating] = useState("");
// 	const [notes, setNotes] = useState("");

// 	useEffect(() => {
// 		(async () => {
// 			const data = await getBookbyId(book.id);
// 			if (data) {
// 				setStatus(data.status);
// 				setRating(data.rating);
// 				setNotes(data.notes);
// 			}
// 		})();
// 	}, []);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const bookObject = {
// 			status,
// 			rating,
// 			notes,
// 			title: book.title,
// 			imageUrl: book.imageUrl,
// 		};

// 		saveBook(book.id, bookObject);
// 		closeModal();
// 		showPopup();
// 	};

// 	const handleRemove = () => {
// 		deleteBookById(book.id);
// 		closeModal();
// 	};

// 	return (
// 		<Backdrop onClick={closeModal}>
// 			<motion.div
// 				onClick={(e) => e.stopPropagation()}
// 				className="relative overflow-hidden rounded-lg sm:my-8 sm:w-full sm:max-w-lg"
// 				initial={{ scale: 0 }}
// 				animate={{ scale: 1 }}
// 				exit={{ scale: 0 }}
// 			>
// 				<form
// 					onSubmit={handleSubmit}
// 					className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-700 text-gray-800 dark:text-white"
// 				>
// 					<Box className="flex flex-col gap-5 px-4 py-4 sm:p-6 dark:bg-gray-700 text-gray-800 dark:text-white">
// 						<Box className="flex flex-col gap-1">
// 							<InputLabel htmlFor="status" className="block font-medium">
// 								Status
// 							</InputLabel>
// 							<Select
// 								id="status"
// 								name="status"
// 								autoComplete="Status"
// 								className="block w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800"
// 								value={status}
// 								onChange={(e) => setStatus(e.target.value)}
// 								required
// 							>
// 								<MenuItem value="">-- Select status -- </MenuItem>
// 								<MenuItem value="Reading">Reading</MenuItem>
// 								<MenuItem value="Completed">Completed</MenuItem>
// 								<MenuItem value="Dropped">Dropped</MenuItem>
// 								<MenuItem value="Paused">Paused</MenuItem>
// 								<MenuItem value="Planning">Planning</MenuItem>
// 							</Select>
// 						</Box>
// 						<Box className="flex flex-col gap-1">
// 							<InputLabel htmlFor="rating" className="block">
// 								Rating
// 							</InputLabel>
// 							<TextField
// 								type="number"
// 								name="rating"
// 								id="rating"
// 								className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800"
// 								placeholder="0 - 10"
// 								inputProps={{
// 									min: 1,
// 									max: 10,
// 								}}
// 								value={rating}
// 								onChange={(e) => setRating(e.target.value)}
// 							/>
// 						</Box>
// 						<Box className="flex flex-col gap-1">
// 							<InputLabel htmlFor="notes" className="block">
// 								Notes
// 							</InputLabel>
// 							<TextField
// 								name="notes"
// 								id="notes"
// 								multiline
// 								rows={3}
// 								className="min-h-[80px] w-full rounded-md border border-gray-300 px-4 py-4 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800 resize-y"
// 								value={notes}
// 								onChange={(e) => setNotes(e.target.value)}
// 							/>
// 						</Box>
// 					</Box>
// 					<Box className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-gray-800 dark:text-white dark:bg-gray-700">
// 						<Button
// 							type="submit"
// 							className="mb-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
// 						>
// 							Confirm
// 						</Button>
// 						{status ? (
// 							<Button
// 								type="button"
// 								className="mb-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
// 								onClick={handleRemove}
// 							>
// 								Delete
// 							</Button>
// 						) : null}
// 						<Button
// 							type="button"
// 							className="mb-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// 							onClick={closeModal}
// 						>
// 							Cancel
// 						</Button>
// 					</Box>
// 				</form>
// 			</motion.div>
// 		</Backdrop>
// 	);
// };

// BookEditModal.propTypes = {
// 	book: PropTypes.object,
// 	closeModal: PropTypes.func,
// 	showPopup: PropTypes.func,
// };

// export default BookEditModal;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { saveBook, getBookbyId, deleteBookById } from "../../Firebase";
import Backdrop from "./Backdrop";
import {
	Button,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Box,
} from "@mui/material";

const BookEditModal = ({ book, closeModal, showPopup }) => {
	const [status, setStatus] = useState("");
	const [rating, setRating] = useState("");
	const [notes, setNotes] = useState("");
	const [initialData, setInitialData] = useState({});

	useEffect(() => {
		(async () => {
			const data = await getBookbyId(book.id);
			if (data) {
				setStatus(data.status);
				setRating(data.rating);
				setNotes(data.notes);
				setInitialData(data);
			}
		})();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const bookObject = {
			status,
			rating,
			notes,
			title: book.title,
			imageUrl: book.imageUrl,
		};

		if (
			status === initialData.status &&
			rating === initialData.rating &&
			notes === initialData.notes
		) {
			closeModal();
			return;
		}

		saveBook(book.id, bookObject);
		closeModal();
		showPopup();
	};

	const handleRemove = () => {
		deleteBookById(book.id);
		closeModal();
	};

	return (
		<Backdrop onClick={closeModal}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="relative overflow-hidden rounded-lg sm:my-8 sm:w-full sm:max-w-lg"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
			>
				<form
					onSubmit={handleSubmit}
					className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-700 text-gray-800 dark:text-white"
				>
					<Box className="flex flex-col gap-5 px-4 py-4 sm:p-6 dark:bg-gray-700 text-gray-800 dark:text-white">
						<Box className="flex flex-col gap-1">
							<InputLabel htmlFor="status" className="block font-medium">
								Status
							</InputLabel>
							<Select
								id="status"
								name="status"
								autoComplete="Status"
								className="block w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800"
								value={status}
								onChange={(e) => setStatus(e.target.value)}
								required
							>
								<MenuItem value="">-- Select status -- </MenuItem>
								<MenuItem value="Reading">Reading</MenuItem>
								<MenuItem value="Completed">Completed</MenuItem>
								<MenuItem value="Dropped">Dropped</MenuItem>
								<MenuItem value="Paused">Paused</MenuItem>
								<MenuItem value="Planning">Planning</MenuItem>
							</Select>
						</Box>
						<Box className="flex flex-col gap-1">
							<InputLabel htmlFor="rating" className="block">
								Rating
							</InputLabel>
							<TextField
								type="number"
								name="rating"
								id="rating"
								className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800"
								placeholder="0 - 10"
								inputProps={{
									min: 1,
									max: 10,
								}}
								value={rating}
								onChange={(e) => setRating(e.target.value)}
							/>
						</Box>
						<Box className="flex flex-col gap-1">
							<InputLabel htmlFor="notes" className="block">
								Notes
							</InputLabel>
							<TextField
								name="notes"
								id="notes"
								multiline
								rows={3}
								className="min-h-[80px] w-full rounded-md border border-gray-300 px-4 py-4 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 sm:text-sm shadow-sm text-gray-800 resize-y"
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
							/>
						</Box>
					</Box>
					<Box className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-gray-800 dark:text-white dark:bg-gray-700">
						<Button
							type="submit"
							className="mb-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
						>
							Confirm
						</Button>
						{status ? (
							<Button
								type="button"
								className="mb-3 inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
								onClick={handleRemove}
							>
								Delete
							</Button>
						) : null}
						<Button
							type="button"
							className="mb-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={closeModal}
						>
							Cancel
						</Button>
					</Box>
				</form>
			</motion.div>
		</Backdrop>
	);
};

BookEditModal.propTypes = {
	book: PropTypes.object,
	closeModal: PropTypes.func,
	showPopup: PropTypes.func,
};

export default BookEditModal;
