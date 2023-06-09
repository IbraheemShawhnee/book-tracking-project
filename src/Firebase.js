// import { initializeApp } from "firebase/app";
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	signInWithPopup,
// 	signOut,
// 	onAuthStateChanged,
// } from "firebase/auth";
// import {
// 	getFirestore,
// 	collection,
// 	doc,
// 	setDoc,
// 	getDoc,
// 	deleteDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyBQ7H_RNjzUOk5JbnzUrwYuzjldProxYXU",
// 	authDomain: "library-2db48.firebaseapp.com",
// 	projectId: "library-2db48",
// 	storageBucket: "library-2db48.appspot.com",
// 	messagingSenderId: "848674686377",
// 	appId: "1:848674686377:web:c60227cc69f49f0b4d30b8",
// 	measurementId: "G-QCEGHSJ3B5",
// };

// const provider = new GoogleAuthProvider();
// const app = initializeApp(firebaseConfig);

// //auth logic
// export const auth = getAuth(app);
// export const signIn = async () => await signInWithPopup(auth, provider);
// export const signOutUser = () => signOut(auth);
// export const isUserSignedIn = () => Boolean(auth.currentUser);

// //firestore logic
// const db = getFirestore(app);
// export const usersRef = collection(db, "users");
// export let booksRef;

// onAuthStateChanged(auth, async (user) => {
// 	if (!user) {
// 		booksRef = undefined;
// 		return;
// 	}

// 	const userDoc = await getDoc(doc(usersRef, user.uid));
// 	if (!userDoc.exists()) {
// 		await setDoc(doc(usersRef, user.uid), {
// 			name: user.displayName,
// 			image: user.photoURL,
// 			private: false,
// 		});
// 	}

// 	booksRef = collection(usersRef, user.uid, "books");
// });

// export async function saveBook(id, book) {
// 	try {
// 		await setDoc(doc(booksRef, id), book);
// 	} catch (error) {
// 		alert("Error writing new message to Firebase Database", error);
// 	}
// }

// export async function getBookbyId(id) {
// 	const bookRef = doc(booksRef, id);
// 	const docSnap = await getDoc(bookRef);

// 	if (docSnap.exists()) {
// 		return docSnap.data();
// 	} else {
// 		return;
// 	}
// }

// export async function deleteBookById(id) {
// 	await deleteDoc(doc(booksRef, id));
// }
import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	doc,
	query,
	where,
	setDoc,
	getDoc,
	updateDoc,
	getDocs,
	deleteDoc,
} from "firebase/firestore";
import {
	ref,
	getStorage,
	uploadBytes,
	getDownloadURL,
	listAll,
	deleteObject,
} from "firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyBQ7H_RNjzUOk5JbnzUrwYuzjldProxYXU",
	authDomain: "library-2db48.firebaseapp.com",
	projectId: "library-2db48",
	storageBucket: "library-2db48.appspot.com",
	messagingSenderId: "848674686377",
	appId: "1:848674686377:web:c60227cc69f49f0b4d30b8",
	measurementId: "G-QCEGHSJ3B5",
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

// Auth logic
export const auth = getAuth(app);
export const signIn = async () => await signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export const isUserSignedIn = () => Boolean(auth.currentUser);

// Firestore logic
const db = getFirestore(app);
export const usersRef = collection(db, "users");
export let booksRef;

let booksRefCallback;

onAuthStateChanged(auth, async (user) => {
	if (!user) {
		booksRef = undefined;
		booksRefCallback = undefined;
		return;
	}

	const userDoc = await getDoc(doc(usersRef, user.uid));
	if (!userDoc.exists()) {
		await setDoc(doc(usersRef, user.uid), {
			name: user.displayName,
			image: user.photoURL,
			private: false,
		});
	}

	booksRef = collection(usersRef, user.uid, "books");

	if (booksRefCallback) {
		booksRefCallback();
		booksRefCallback = undefined;
	}
});

export function getBookbyId(id) {
	return new Promise((resolve, reject) => {
		if (!booksRef) {
			booksRefCallback = () => {
				fetchBookData(id, resolve, reject);
			};
		} else {
			fetchBookData(id, resolve, reject);
		}
	});
}

async function fetchBookData(id, resolve, reject) {
	try {
		const bookRef = doc(booksRef, id);
		const docSnap = await getDoc(bookRef);

		if (docSnap.exists()) {
			resolve(docSnap.data());
		} else {
			resolve(null);
		}
	} catch (error) {
		console.error("Error fetching book data:", error);
		reject(error);
	}
}

export async function saveBook(id, book) {
	try {
		await setDoc(doc(booksRef, id), book);
	} catch (error) {
		console.error("Error writing new message to Firebase Database:", error);
		throw error; // Rethrow the error to handle it in the calling code
	}
}

export async function deleteBookById(id) {
	try {
		if (!booksRef) {
			throw new Error("Books collection is not initialized");
		}

		await deleteDoc(doc(booksRef, id));
	} catch (error) {
		console.error("Error deleting book:", error);
		throw error; // Rethrow the error to handle it in the calling code
	}
}

export async function getUserDoc(username) {
	const q = query(usersRef, where("name", "==", username));
	const querySnapshot = await getDocs(q);
	const userDoc = querySnapshot.docs[0];

	return userDoc;
}

export async function updateUserDoc(key, value) {
	const userRef = doc(usersRef, auth.currentUser?.uid);

	if (!userRef) return new Error("Couldn't update. Unknown error occured");

	await updateDoc(userRef, {
		[key]: value,
	});
}

//storage logic
const storage = getStorage(app);
const usersStorageRef = ref(storage, "users");

async function uploadImage(file, folderRef) {
	//1 048 576 bytes === 1mb
	if (file.size > 1048576) {
		alert("File is too big!");
		return;
	}

	const imageRef = ref(folderRef, file.name);
	const img = await uploadBytes(imageRef, file);
	const url = await getDownloadURL(img.ref);
	return url;
}

function deleteFolderItems(folderRef) {
	listAll(folderRef).then((listResults) =>
		listResults.items.forEach((itemRef) => deleteObject(itemRef))
	);
}
export async function updateImageInFolder(file, folder) {
	const folderRef = ref(usersStorageRef, `${auth.currentUser.uid}/${folder}`);
	deleteFolderItems(folderRef);

	const url = await uploadImage(file, folderRef);
	return url;
}

export async function deleteAllBooks() {
	const querySnapshot = await getDocs(booksRef);
	querySnapshot.forEach(async (doc) => {
		await deleteDoc(doc.ref);
	});
}
