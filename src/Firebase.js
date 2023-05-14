import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBSZukp9HUMdxJFn7ohumUGdiLrECPPjAg",
	authDomain: "library-bf484.firebaseapp.com",
	projectId: "library-bf484",
	storageBucket: "library-bf484.appspot.com",
	messagingSenderId: "756572754345",
	appId: "1:756572754345:web:0f7646f27405f481a674b8",
	measurementId: "G-YY0S46WXFL",
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
