import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, collection, getDoc } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyDA-tFchH_OJ8XgmpRERtbDKKlJI5jamSA",
	authDomain: "book-library-d3d78.firebaseapp.com",
	projectId: "book-library-d3d78",
	storageBucket: "book-library-d3d78.appspot.com",
	messagingSenderId: "988692225066",
	appId: "1:988692225066:web:db9cef15b26897641fb753",
};
// const firebaseConfig = {
// 	apiKey: "AIzaSyBSZukp9HUMdxJFn7ohumUGdiLrECPPjAg",
// 	authDomain: "library-bf484.firebaseapp.com",
// 	projectId: "library-bf484",
// 	storageBucket: "library-bf484.appspot.com",
// 	messagingSenderId: "756572754345",
// 	appId: "1:756572754345:web:0f7646f27405f481a674b8",
// 	measurementId: "G-YY0S46WXFL",
// };
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
