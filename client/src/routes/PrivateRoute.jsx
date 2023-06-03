import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <p>Loading.....</p>;
	}

	if (user) {
		return children;
	}
	return (
		<>
			{toast("You Have To Log In First")}
			<Navigate to="/login" state={{ from: location }} replace></Navigate>
		</>
	);
};

export default PrivateRoute;
