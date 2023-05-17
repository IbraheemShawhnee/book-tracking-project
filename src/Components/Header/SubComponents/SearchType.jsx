import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Icon from "../../Icon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

const SearchType = ({ setSearchType, searchType }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Box className="relative">
			<Button
				className="flex-shrink-0 z-10 flex justify-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 capitalize"
				type="button"
				onClick={() => setIsOpen((status) => !status)}
				onBlur={() => setIsOpen(false)}
			>
				{searchType}
				<Icon icon={<KeyboardArrowDownIcon />} />
			</Button>
			<Box
				className={`${
					isOpen ? "" : "hidden"
				} z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-full dark:bg-gray-700`}
			>
				<ListItemText className="py-1 text-sm dark:text-gray-200">
					<ListItemText onMouseDown={() => setSearchType("books")}>
						<Button
							type="button"
							className="inline-flex text-black w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
						>
							Books
						</Button>
					</ListItemText>
					<ListItemText onMouseDown={() => setSearchType("user")}>
						<Button
							type="button"
							className="inline-flex w-full text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
						>
							User
						</Button>
					</ListItemText>
				</ListItemText>
			</Box>
		</Box>
	);
};

SearchType.propTypes = {
	setSearchType: PropTypes.func,
	searchType: PropTypes.string,
};

export default SearchType;
