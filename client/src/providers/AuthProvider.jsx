import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [userBooking, setUserBooking] = useState({});

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);

			if (currentUser) {
				// Setting current user to database
				axios.post(`/user/${currentUser?.email}`, {
					name: currentUser.displayName,
					email: currentUser.email,
					role: "user",
				});
				// storing user JWT token
				axios
					.post("/jwt", {
						name: currentUser.displayName,
						email: currentUser.email,
					})
					.then((data) => {
						localStorage.setItem("access_token", data.data);
					});
			} else {
				localStorage.removeItem("access_token");
			}

			setLoading(false);
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		signIn,
		signInWithGoogle,
		resetPassword,
		logOut,
		updateUserProfile,
		userBooking,
		setUserBooking,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
