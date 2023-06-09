import React from "react";
import Container from "../shared/Container";
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const NavBar = () => {
	return (
		<div className="fixed w-full max-w-7xl mx-auto bg-orange-50 z-10 shadow-sm">
			<div className="py-1 border-b-2">
				<Container>
          <div className="flex items-center justify-around md:justify-between gap-3 md:gap-0">
            
            {/* Logo */}
						<Link to={"/"} className="flex items-center gap-2">
							<FaPlaneDeparture color="orangered" size={35} />{" "}
							<span className="text-2xl text-red-600 font-mono tracking-wider font-bold">
								devTrav
							</span>
						</Link>

            {/* Navigation Menu */}
						<div className="menu">
							<Menu />
            </div>
            
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NavBar;
