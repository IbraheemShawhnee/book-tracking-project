import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Typography, Box, Tabs, Tab } from "@mui/material";

const ProfileHeader = ({ user }) => {
	const [onStats, setOnStats] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setOnStats(location.pathname.includes("statistics"));
	}, [location]);

	return (
		<>
			<Box className="bg-gray-200 dark:bg-gray-900 flex items-end pt-28 dark:text-white sm:mb-4">
				<Box className="flex items-end gap-6 px-6 pt-4 lg:px-32 2xl:px-72 mr-auto">
					<img
						className="font-bold w-32 rounded-t"
						src={user.image}
						alt="User Avatar"
					/>
					<Typography variant="h2" className="text-2xl mb-6 font-bold">
						{user.name}
					</Typography>
				</Box>
				{/* bookmark style for usual */}
				<Box className="hidden sm:inline-block">
					<Tabs
						value={onStats ? 1 : 0}
						indicatorColor="primary"
						textColor="primary"
						variant="standard"
					>
						<Tab
							label="Book List"
							component={Link}
							to={`/profile/${user.name}`}
							disableRipple
							disableFocusRipple
							className="text-gray-700 border border-b-0 border-white dark:border-gray-500 rounded-t-md dark:text-white focus:outline-none"
						/>
						<Tab
							label="Statistics"
							component={Link}
							to={`/profile/${user.name}/statistics`}
							disableRipple
							disableFocusRipple
							className="text-gray-700 border border-b-0 border-white dark:border-gray-500 rounded-t-md dark:text-white focus:outline-none"
						/>
					</Tabs>
				</Box>
			</Box>
			{/* navbar style for mobile */}
			<Box className="sm:hidden">
				<Tabs
					value={onStats ? 1 : 0}
					indicatorColor="primary"
					textColor="primary"
					variant="standard"
					centered
				>
					<Tab
						label="Book List"
						component={Link}
						to={`/profile/${user.name}`}
						disableRipple
						disableFocusRipple
						className={onStats ? "text-gray-400" : "font-bold"}
					/>
					<Tab
						label="Statistics"
						component={Link}
						to={`/profile/${user.name}/statistics`}
						disableRipple
						disableFocusRipple
						className={onStats ? "font-bold" : "text-gray-400"}
					/>
				</Tabs>
			</Box>
		</>
	);
};

ProfileHeader.propTypes = {
	user: PropTypes.object,
};

export default ProfileHeader;
