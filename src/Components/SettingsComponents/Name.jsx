import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Typography, Box } from "@mui/material";
import { updateUserDoc } from "../../Firebase";

const Name = ({ name, showPopup }) => {
	const [inputName, setInputName] = useState(name);

	const changeName = (e) => {
		if (!e.target.value) return;

		setInputName(e.target.value);
	};

	const handleNewName = () => {
		updateUserDoc("name", inputName);
		showPopup("Name changed successfully");
	};

	return (
		<Box className="flex flex-col">
			<Typography
				variant="subtitle1"
				color="textPrimary"
				className="mb-2"
				component="label"
				htmlFor="username"
			>
				Username
			</Typography>
			<TextField
				value={inputName}
				onChange={changeName}
				name="username"
				id="username"
				type="text"
				autoComplete="off"
				className="mb-2"
			/>
			<Button
				variant="contained"
				color="primary"
				className={`${inputName === name ? "hidden" : ""} mb-3`}
				onClick={handleNewName}
			>
				Save
			</Button>
		</Box>
	);
};

Name.propTypes = {
	name: PropTypes.string,
	showPopup: PropTypes.func,
};

export default Name;
