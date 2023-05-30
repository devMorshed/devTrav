import React from "react";
import Container from "../Container";
import MenuDropdown from "./Menu";
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="fixed w-full max-w-7xl mx-auto bg-white z-10 shadow-sm">
			<div className="py-4 border-b-2">
				<Container>
					<div className="flex items-center justify-between gap-3 md:gap-0">
            <Link to={'/'} className="flex items-center gap-2">
              <FaPlaneDeparture color="orangered" size={35}/> <span className="text-2xl text-red-600 font-mono tracking-wider font-bold">devTrav</span>
            </Link>

						<div className="menu">
							<MenuDropdown />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NavBar;
