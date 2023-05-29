import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { getUserDoc, usersRef, isUserSignedIn } from "../../Firebase";
import ProfileHeader from "../../Components/ProfileComponents/ProfileHeader";
import Box from "@mui/material/Box";
import Loading from "../../Components/Shared/Loading";
import ChartsSection from "../../Components/StatisticsComponents/ChartsSection";
import Info from "../../Components/ProfileComponents/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PercentIcon from "@mui/icons-material/Percent";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StatCard from "../../Components/StatisticsComponents/StatCard";

const Statistics = () => {
	const navigate = useNavigate();
	const { username } = useParams();
	const [userData, setUserData] = useState();

	const [ratings, setRatings] = useState([]);
	const [statuses, setStatuses] = useState([]);

	useEffect(() => {
		(async () => {
			const userDoc = await getUserDoc(username);

			if (userDoc) {
				setUserData(userDoc.data());

				const booksRef = collection(usersRef, `${userDoc.id}/books`);
				const querySnapshot = await getDocs(booksRef);

				const documents = querySnapshot.docs.map((doc) => {
					return {
						...doc.data(),
					};
				});

				setRatings(
					documents
						.map((book) => Number(book.rating))
						.filter((rating) => rating !== 0)
				);
				setStatuses(documents.map((book) => book.status));
			} else {
				navigate("/404");
			}
		})();
	}, [username]);

	//make data for stat cards
	const getMeanRating = () => {
		const booksSum = ratings.reduce((sum, rating) => sum + Number(rating), 0);
		return (booksSum / ratings.length).toFixed(2);
	};

	const getStandardDeviation = () => {
		const mean = getMeanRating();
		return Math.sqrt(
			ratings.map((rating) => (rating - mean) ** 2).reduce((a, b) => a + b, 0) /
				ratings.length
		).toFixed(2);
	};

	const getPlanningLength = () => {
		return statuses.filter((status) => status === "Planning").length;
	};

	if (
		ratings === undefined ||
		statuses === undefined ||
		userData === undefined
	) {
		return (
			<Box className="flex-1 flex items-center justify-center dark:bg-gray-700">
				<Loading />
			</Box>
		);
	}

	if (userData.private && !isUserSignedIn()) {
		return <Info text="This user has set their profile to private" />;
	}

	if (ratings.length === 0 || statuses.length === 0) {
		return (
			<Box className="flex-1 dark:bg-gray-700">
				<ProfileHeader user={userData} />
				<Info text="Not enough data to show statistics" />
			</Box>
		);
	}

	return (
		<Box className="flex-1 dark:bg-gray-700 text-black-900">
			<ProfileHeader user={userData} />
			<Box className="py-4 px-6 lg:px-32 2xl:px-72">
				<Box className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 mb-10 whitespace-nowrap">
					<StatCard
						icon={<LibraryBooksIcon fontSize="large" />}
						value={statuses.length}
						label="Total Books"
					/>
					<StatCard
						icon={<PercentIcon fontSize="large" />}
						value={getMeanRating()}
						label="Mean Rating"
					/>
					<StatCard
						icon={<WaterfallChartIcon fontSize="large" />}
						value={getStandardDeviation()}
						label="Standard Deviation"
					/>
					<StatCard
						icon={<AccessTimeIcon fontSize="large" />}
						value={getPlanningLength()}
						label="Books Planned"
					/>
				</Box>
			</Box>
			<ChartsSection
				name="Ratings"
				data={ratings}
				categories={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
			/>
			<ChartsSection
				name="Statuses"
				data={statuses}
				categories={["Reading", "Completed", "Paused", "Dropped", "Planning"]}
			/>
		</Box>
	);
};

export default Statistics;
