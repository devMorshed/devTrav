import avaImg from "../../assets/images/placeholder.jpg";
import useAuth from "../../hooks/useAuth";

const Avatar = () => {
	const { user } = useAuth();

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
