import React, { useState } from "react";
import AbsoluteBG from "./shared/AbsoluteBG";
import { Rating } from "@smastrom/react-rating";

const data = {
	photo: "https://codewithsadee.github.io/tourly/assets/images/popular-1.jpg",
	country: "Italy",
	place: "san miguel",
  short_description: " Lorem ipsum dolor Lorem ipsum dolor sit amet. ",
	rating: 3,
	isPopular: true,
};

const PopularCard = () => {
	const [rating, setRating] = useState(3);
	return (
		<div className="rounded-lg group hover:scale-[1.01] transition relative h-[500px]">
			<AbsoluteBG
				style={
					"bg-no-repeat bg-cover bg-center group-hover:brightness-75"
				}
				src={data.photo}
			/>

			<div className="absolute px-10 py-6  text-[#454545] bottom-10 space-y-2 left-1/2 -translate-x-1/2 w-10/12 mx-auto bg-white rounded">
				<p className="font-light">{data.country}</p>
				<p className="text-black uppercase text-xl">{data.place}</p>
				<p>{data.short_description}</p>

				<div className=" absolute -top-8 translate-y-1/2 right-5 w-32   rounded-md bg-blue-300">
					<Rating
						style={{ maxWidth: 180 }}
						value={data.rating}
						readOnly
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularCard;
