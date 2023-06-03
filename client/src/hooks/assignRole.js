import axios from "axios";
import { useEffect } from "react";

const assignRole = (user) => {
	const { email, name } = user;
	useEffect(() => {
		axios.put(`/users/${email}`);
	}, []);
};
