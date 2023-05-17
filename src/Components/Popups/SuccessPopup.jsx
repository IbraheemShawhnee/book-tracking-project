import React from "react";
import PropTypes from "prop-types";
import Popup from "./Popup";
import CheckIcon from "@mui/icons-material/Check";
import Icon from "../Icon";
import { Box } from "@mui/material";

const SuccessPopup = ({ text }) => {
	return (
		<Popup text={text}>
			<Box className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-300">
				<Icon icon={<CheckIcon />} />
			</Box>
		</Popup>
	);
};

SuccessPopup.propTypes = {
	text: PropTypes.string,
};

export default SuccessPopup;
