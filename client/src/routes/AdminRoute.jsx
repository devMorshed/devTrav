import React from "react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminRoute = ({ children }) => {
	const { loading } = useAuth();

	const [isAdmin, isAdminLoading] = useAdmin();

	if (loading || isAdminLoading) {
		return <div>aDMIN iSD LOADING</div>;
	}

	if (isAdmin) {
		return children;
	}
	return (
		<>
			{toast.error("Require Admin Access")}
			<Navigate to={"/dashboard"}></Navigate>{" "}
		</>
	);
};

export default AdminRoute;
