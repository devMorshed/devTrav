import React, { useContext } from "react";

import avaImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
	const { user } = useContext(AuthContext);

	return (
		<img
			className="rounded-full"
			src={user && user.photoURL ? user.photoURL : avaImg}
			height={30}
			width={30}
			alt=""
		/>
	);
};

export default Avatar;
