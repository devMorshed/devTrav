import { BsFillCalendarCheckFill } from "react-icons/bs";
import placeholderImg from "../../assets/images/placeholder.jpg";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Menu = () => {
	const { user, logOut } = useContext(AuthContext);

	const [cart] = useCart();

	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const navItems = (
		<>
			<Link
				to="/flight"
				className="block rounded-full px-4 py-3 hover:bg-orange-100 transition ">
				Flight
			</Link>
			<Link
				to="/hotel"
				className="block rounded-full px-4 py-3 hover:bg-orange-100 transition ">
				Hotel
			</Link>
			<Link
				to="/allpackages"
				className="block rounded-full px-4 py-3 hover:bg-orange-100 transition ">
				Package
			</Link>
			<Link
				to="/blogs"
				className="block rounded-full  px-4 py-3 hover:bg-orange-100 transition ">
				Blogs
			</Link>
			<Link
				to="/dashboard/bookings"
				className="flex relative rounded-full gap-2 items-center   px-4 py-3 hover:bg-orange-100 transition ">
				Bookings <BsFillCalendarCheckFill />
				<div className="md:absolute rounded-full text-green-700  z-50 md:top-1 md:right-3">
					<p>{cart?.length}</p>
				</div>
			</Link>
		</>
	);

	return (
		<div className="relative">
			<div className="flex items-center gap-3">
				<div className="hidden md:flex items-center gap-2  py-3 px-4 transition">
					{navItems}
				</div>
				<div onClick={toggleOpen} className="p-4 cursor-pointer ">
					<div className="">
						<img
							className="rounded-full"
							src={
								user && user.photoURL
									? user.photoURL
									: placeholderImg
							}
							height={40}
							width={40}
							alt=""
						/>
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
									Dashboard
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
