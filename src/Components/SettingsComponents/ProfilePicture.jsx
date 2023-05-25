import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import { updateUserDoc, updateImageInFolder } from "../../Firebase";

const ProfilePicture = ({ profilePic, showPopup }) => {
	const handleNewProfilePic = async (e) => {
		const url = await updateImageInFolder(e.target.files[0], "profilePicture");
		if (url) updateUserDoc("image", url);

		showPopup("Profile picture changed successfully");
	};

	return (
		<Box className="flex flex-col mt-6">
			<Typography variant="h6" color="textPrimary" gutterBottom>
				Profile Picture
			</Typography>
			<Typography variant="body2" color="textSecondary" gutterBottom>
				Allowed Formats: JPEG, PNG. Max size: 1mb.
			</Typography>
			<Box className="flex gap-4">
				<label
					className="text-center flex items-center justify-center text-gray-700 dark:text-gray-400 w-32 lg:w-44 aspect-square border border-dashed border-gray-400 rounded-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none p-4 hover:cursor-pointer"
					htmlFor="profilePic"
				>
					Click here to upload
					<input
						type="file"
						accept="image/png, image/jpeg"
						id="profilePic"
						name="profilePic"
						className="hidden"
						onChange={handleNewProfilePic}
					/>
				</label>
				<Box
					component="img"
					src={profilePic}
					alt="Profile Picture"
					className="w-32 lg:w-44 aspect-square rounded-md"
				/>
			</Box>
		</Box>
	);
};

ProfilePicture.propTypes = {
	profilePic: PropTypes.string,
	showPopup: PropTypes.func,
};

export default ProfilePicture;
