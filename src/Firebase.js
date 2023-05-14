import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDA-tFchH_OJ8XgmpRERtbDKKlJI5jamSA",
	authDomain: "book-library-d3d78.firebaseapp.com",
	projectId: "book-library-d3d78",
	storageBucket: "book-library-d3d78.appspot.com",
	messagingSenderId: "988692225066",
	appId: "1:988692225066:web:db9cef15b26897641fb753",
};
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);

//Auth. Logic
export const auth = getAuth(app);
export const signIn = async () => await signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export const isUserSignedIn = () => Boolean(auth.currentUser);

//Firestore logic
const db = getFirestore(app);
export const usersRef = collection(db, "users");
export let booksRef;
