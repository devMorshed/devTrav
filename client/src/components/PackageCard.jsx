import React from "react";
import AbsoluteBG from "./shared/AbsoluteBG";
import { GiDuration } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";

const PackageCard = () => {
	return (
		<div
			data-aos="fade-up-right"
			className="grid shadow-lg hover:scale-[1.01] transistion duration-100 border-2 overflow-hidden rounded-xl items-center lg:grid-cols-3 gap-4">
			<div className="relative min-h-[200px] h-full">
				<AbsoluteBG
					style={"bg-no-repeat rounded-none bg-cover"}
					src={
						"https://codewithsadee.github.io/tourest/assets/images/popular-3.jpg"
					}
				/>
			</div>
			<div className="px-4  mx-auto">
				<h4 className="text-xl text-center">
					EXPERIENCE THE GREAT HOLIDAY ON BEACH
				</h4>
				<p className=" my-3 text-sm text-[#454545]">
					Laoreet, voluptatum nihil dolor esse quaerat mattis
					explicabo maiores, est aliquet porttitor! Eaque, cras,
					aspernatur.
				</p>
				<div className="rounded-full w-fit mx-auto my-4 gap-2 p-2 flex items-center border">
					<div className="flex items-center px-2 gap-2">
						<GiDuration size={20} /> <span>3days</span>
					</div>
					<div className="border-x-2 px-2 flex items-center gap-2">
						<FaUserFriends size={20} /> <span>5</span>
					</div>
					<div className="flex items-center px-2 gap-2">
						<MdLocationOn size={20} /> <span>Malaysiya</span>
					</div>
				</div>
			</div>
			<div className=" h-full space-y-4 p-10 bg-[#FFA559]">
				<div className="flex justify-center gap-4 items-center">
					<p>{"data.review_number"}</p>
					<Rating
						style={{ maxWidth: 90 }}
						value={5}
						// value={data.rating}
						readOnly
					/>
				</div>
				<p className="text-5xl text-center text-white font-bold">
					$600 <span className="text-xs">/per person</span>
				</p>
				<button className="mx-auto block my-10 px-6 py-3 border rounded-lg text-white font-bold tracking-tighter bg-[#FF6000]">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default PackageCard;
