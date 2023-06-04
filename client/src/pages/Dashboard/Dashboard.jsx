import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	const isAdmin = true;

	return (
		<div className="flex min-h-[calc(100vh-266px-96px)]">
			<div className="sidebar  md:w-1/4 border">
				{isAdmin ? (
					<div>
						<NavLink
							to="/dashboard"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Profile
						</NavLink>
						<NavLink
							to="users"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Manage User
						</NavLink>
						<NavLink
							to="bookings"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Manage Bookings
						</NavLink>
						<NavLink
							to="addpackage"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Add Package
						</NavLink>
					</div>
				) : (
					<div>
						<NavLink
							to="/dashboard"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Profile
						</NavLink>
						<NavLink
							to="bookings"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							My Bookings
						</NavLink>
						<NavLink
							to="history"
							className="flex gap-2 items-center   px-4 py-3 hover:bg-neutral-100 transition">
							Booking History
						</NavLink>
					</div>
				)}
			</div>
			<div className="w-3/4">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
