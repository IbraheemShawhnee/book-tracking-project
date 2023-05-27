import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { updateUserDoc } from "../../Firebase";

const Privacy = ({ privateStatus, showPopup }) => {
	const handlePrivacyChange = (event) => {
		const status = event.target.value === "true";
		updateUserDoc("private", status);
		showPopup("Privacy settings changed successfully");
	};

	return (
		<div className="flex flex-col mt-6 dark:text-white">
			<Typography
				variant="h6"
				color="textPrimary"
				className="mb-2 dark:text-white"
			>
				Privacy
			</Typography>

			<RadioGroup
				name="privacy"
				value={privateStatus.toString()}
				onChange={handlePrivacyChange}
			>
				<FormControlLabel
					value="false"
					control={<Radio />}
					label={
						<div>
							<Typography
								variant="subtitle1"
								color="textPrimary"
								gutterBottom
								className="dark:text-white"
							>
								Public
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								className="dark:text-white"
							>
								Everyone can view my profile
							</Typography>
						</div>
					}
				/>
				<FormControlLabel
					value="true"
					control={<Radio />}
					label={
						<div>
							<Typography
								variant="subtitle1"
								color="textPrimary"
								gutterBottom
								className="dark:text-white"
							>
								Private
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								className="dark:text-white"
							>
								Nobody except me can view my profile
							</Typography>
						</div>
					}
				/>
			</RadioGroup>
		</div>
	);
};

Privacy.propTypes = {
	privateStatus: PropTypes.bool,
	showPopup: PropTypes.func,
};

export default Privacy;
