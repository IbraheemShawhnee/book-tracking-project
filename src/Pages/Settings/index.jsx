import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { Link } from "react-router-dom";
import { signOutUser, deleteAllBooks } from "../../Firebase";
import { AnimatePresence } from "framer-motion";
import { Grid, Button, Typography, Box } from "@mui/material";
import Loading from "../../Components/SearchResultsComponents/Loading";
import Name from "../../Components/SettingsComponents/Name";
import ProfilePicture from "../../Components/SettingsComponents/ProfilePicture";
import Privacy from "../../Components/SettingsComponents/Privacy";
import SuccessPopup from "../../Components/Popups/SuccessPopup";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Settings = () => {
	const navigate = useNavigate();
	const [name, profilePic, privateStatus] = useUserData();
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [popupText, setPopupText] = useState("");

	const showPopup = (text) => {
		setPopupText(text);
		setIsPopupOpen(true);

		setTimeout(() => {
			setIsPopupOpen(false);
			setPopupText("");
		}, 2000);
	};

	const handleBooksDelete = () => {
		deleteAllBooks();
		showPopup("Books deleted successfully");
	};

	if (name === undefined) navigate("/");

	if (!name) {
		return (
			<main className="flex-1 flex items-center justify-center dark:bg-gray-700">
				<Loading />
			</main>
		);
	}

	return (
		<main className="flex-1 md:grid content-start grid-cols-4 dark:bg-gray-700">
			<Grid
				item
				xs={12}
				md={8}
				lg={6}
				xl={4}
				className="bg-gray-200 dark:bg-gray-800 col-start-2 col-span-2 p-6 rounded-lg m-3 md:my-6"
			>
				<Name name={name} showPopup={showPopup} />
				<ProfilePicture profilePic={profilePic} showPopup={showPopup} />
				<Privacy privateStatus={privateStatus} showPopup={showPopup} />

				<hr className="my-8 h-0.5 bg-white border-0 dark:bg-gray-600" />

				<Box className="mt-3">
					<Typography variant="h6" color="textPrimary" gutterBottom>
						Delete all library entries
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Warning! This will permanently delete all books in your library.
					</Typography>
					<Button
						variant="contained"
						color="error"
						size="large"
						startIcon={<DeleteOutlineIcon />}
						onClick={handleBooksDelete}
						className="mt-2"
					>
						Delete all library entries
					</Button>
				</Box>

				<hr className="my-8 h-0.5 bg-white border-0 dark:bg-gray-600" />

				<Box className="mt-3">
					<Typography variant="h6" color="textPrimary" gutterBottom>
						Sign Out
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Warning! This will sign you out.
					</Typography>
					<Link to="/" onClick={signOutUser}>
						<Button
							variant="contained"
							color="error"
							size="large"
							startIcon={<ExitToAppIcon />}
							className="mt-2"
						>
							Sign Out
						</Button>
					</Link>
				</Box>
			</Grid>

			<AnimatePresence initial={false} mode="wait">
				{isPopupOpen && <SuccessPopup text={popupText} />}
			</AnimatePresence>
		</main>
	);
};

export default Settings;
