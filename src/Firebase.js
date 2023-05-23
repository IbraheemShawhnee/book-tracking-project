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
	getDocs,
	deleteDoc,
} from "firebase/firestore";

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

//auth logic
export const auth = getAuth(app);
export const signIn = async () => await signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export const isUserSignedIn = () => Boolean(auth.currentUser);

//firestore logic
const db = getFirestore(app);
export const usersRef = collection(db, "users");
export let booksRef;

onAuthStateChanged(auth, async (user) => {
	if (!user) {
		booksRef = undefined;
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
});

export async function saveBook(id, book) {
	try {
		await setDoc(doc(booksRef, id), book);
	} catch (error) {
		alert("Error writing new message to Firebase Database", error);
	}
}

export async function getBookbyId(id) {
	const bookRef = doc(booksRef, id);
	const docSnap = await getDoc(bookRef);

	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		return;
	}
}

export async function deleteBookById(id) {
	await deleteDoc(doc(booksRef, id));
}

export async function getUserDoc(username) {
	const q = query(usersRef, where("name", "==", username));
	const querySnapshot = await getDocs(q);
	const userDoc = querySnapshot.docs[0];

	return userDoc;
}

// import { getUserDoc, isUserSignedIn, usersRef } from '../../Firebase';
