import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, usersRef } from "../Firebase";
import { onSnapshot, doc } from "firebase/firestore";

const useUserData = () => {
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const [privateStatus, setPrivateStatus] = useState("");
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			async () => {
				if (!user) {
					setName(undefined);
					setProfilePic(undefined);
					setPrivateStatus(undefined);
					return;
				}
				onSnapshot(doc(usersRef, user.id), (doc) => {
					const data = doc.data();
					setName(data.name);
					setProfilePic(data.image);
					setPrivateStatus(data.private);
				});
			};
		});
	}, []);
	return [name, profilePic, privateStatus];
};

export default useUserData;
