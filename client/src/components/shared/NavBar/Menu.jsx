import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Avatar from "./Avatar";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Menu = () => {
	const { user, logOut } = useContext(AuthContext);

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const navItems = (
		<>
			<Link
				to="/destinations"
				className="block rounded-full px-4 py-3 hover:bg-neutral-100 transition ">
				Destinations
			</Link>
			<Link
				to="/popular"
				className="block rounded-full px-4 py-3 hover:bg-neutral-100 transition ">
				Popular
			</Link>
			<Link
				to="/blogs"
				className="block rounded-full  px-4 py-3 hover:bg-neutral-100 transition ">
				Blogs
			</Link>
			<Link
				to="/mybookings"
				className="flex rounded-full gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition ">
				Bookings <BsFillCalendarCheckFill />
			</Link>
		</>
	);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div className="hidden md:flex items-center gap-3  text-sm  py-3 px-4 transition">
					{navItems}
				</div>
				<div
					onClick={toggleOpen}
					className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
					{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-[40vw] md:w-44 bg-white overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						<div className="md:hidden">{navItems}</div>
						{user ? (
							<div>
								<Link
									to="/dashboard"
									className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
									Profile
								</Link>
								<div
									onClick={logOut}
									className="px-4 py-3 hover:bg-neutral-100 transition cursor-pointer">
									Logout
								</div>
							</div>
						) : (
							<>
								<Link
									to="/login"
									className="px-4 py-3 hover:bg-neutral-100 transition">
									Login
								</Link>
								<Link
									to="/signup"
									className="px-4 py-3 hover:bg-neutral-100 transition">
									Sign Up
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
