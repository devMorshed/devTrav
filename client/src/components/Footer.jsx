import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaPlaneDeparture, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-orange-100 px-10 md:p-10 py-4">
			<div className="flex md:flex-row items-center justify-center flex-col">
				<div className="w-1/2">
					<Link
						to={"/"}
						className="flex max-w-[222px] items-center gap-2">
						<FaPlaneDeparture color="orangered" size={45} />{" "}
						<span className="text-3xl text-red-600 font-mono tracking-wider font-bold">
							devTrav
						</span>
					</Link>
					<p className="md:w-1/2 my-4">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Sit odit possimus asperiores officia molestias!
					</p>
				</div>
				<div className="">
					<div className="flex my-4 flex-col items-center">
						<span className="text-gray-500">Contact Us</span>
						<div className="flex gap-5 my-3 text-orange-600 ">
							<Link to={"facebook"}>
								<FaFacebook size={30} />
							</Link>
							<Link to={"facebook"}>
								<FaGoogle size={30} />
							</Link>
							<Link to={"facebook"}>
								<FaGithub size={30} />
							</Link>
							<Link to={"facebook"}>
								<FaTwitter size={30} />
							</Link>
						</div>
					</div>
					<div className="flex justify-center w-96">
						<input
							className="p-3 text-gray-900 outline-none rounded-s-lg"
							placeholder="Subscribe"
							type="text"
						/>
						<button className="py-3 px-4 border rounded-e-lg">
							<FaPlaneDeparture />
						</button>
					</div>
				</div>
			</div>

			<p className="text-center text-xs mt-3 ">@DevMorshed 2023 </p>
		</footer>
	);
};

export default Footer;
