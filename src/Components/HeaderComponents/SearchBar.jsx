import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchType from "./SearchType";
import { Box, FormControl, Input } from "@mui/material";


const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [searchType, setSearchType] = useState("books");
	const navigate = useNavigate();

	const handleQuery = (event) => {
		if (!query) return;
		if (event) event.preventDefault();

		if (searchType === "books") {
			navigate(`/${searchType}/search/${query}`);
		} else if (searchType === "user") {
			navigate(`/profile/${query}`);
		}
	};

	return (
		<Box className="flex order-last sm:order-none mr-auto w-full sm:w-auto">
			<SearchType setSearchType={setSearchType} searchType={searchType} />
			<Box className="relative flex w-full max-w-lg">
				<form onSubmit={handleQuery} className="w-full">
					<FormControl>
						<Input
							className=" relative  z-10 flex items-center py-1.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 capitalize text-gray-700 bg-white border rounded-r-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
							placeholder="Search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</FormControl>
				</form>
			</Box>
		</Box>
	);
};

export default SearchBar;
