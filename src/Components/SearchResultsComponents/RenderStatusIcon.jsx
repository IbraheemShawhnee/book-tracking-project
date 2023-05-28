import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Icon from "../Icon";
import AutoStoriesIcon from "@mui/icons-material/AutoStories"; //reading
import AddTaskIcon from "@mui/icons-material/AddTask"; // completed
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault"; //dropped
import PauseIcon from "@mui/icons-material/Pause"; //paused
import GradeIcon from "@mui/icons-material/Grade";
const StatusIcon = ({ status, openModal }) => {
	if (status) {
		return (
			<>
				{status === "Reading" ? (
					<Button
						variant="contained"
						className="bg-white text-gray-800 hover:bg-gray-200"
						onClick={openModal}
					>
						<Icon icon={<AutoStoriesIcon />} />
					</Button>
				) : status === "Completed" ? (
					<Button
						variant="contained"
						className="bg-white text-gray-800 hover:bg-gray-200"
						onClick={openModal}
					>
						<Icon icon={<AddTaskIcon />} />
					</Button>
				) : status === "Dropped" ? (
					<Button
						variant="contained"
						className="bg-white text-gray-800 hover:bg-gray-200"
						onClick={openModal}
					>
						<Icon icon={<DisabledByDefaultIcon />} />
					</Button>
				) : status === "Paused" ? (
					<Button
						variant="contained"
						className="bg-white text-gray-800 hover:bg-gray-200"
						onClick={openModal}
					>
						<Icon icon={<PauseIcon />} />
					</Button>
				) : status === "Planning" ? (
					<Button
						variant="contained"
						className="bg-white text-gray-800 hover:bg-gray-200"
						onClick={openModal}
					>
						<Icon icon={<GradeIcon />} />
					</Button>
				) : (
					""
				)}
			</>
		);
	} else {
		return (
			<Button
				variant="contained"
				className="bg-white text-gray-800 hover:bg-gray-200"
				onClick={openModal}
			>
				<Icon icon={<AddIcon />} />
			</Button>
		);
	}
};

StatusIcon.propTypes = {
	status: PropTypes.string,
	openModal: PropTypes.func,
};

export default StatusIcon;
