import React, { useState } from "react";
import AbsoluteBG from "./shared/AbsoluteBG";
import { GiWindsock } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import Button from "./shared/Button";
import axios from "axios";
import toCart from "../hooks/useToCart";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

const PopularFlightCard = ({ flight }) => {
	// console.log(flight);

	const [_, refetch] = useCart();

	const { user } = useAuth();

	const {
		_id,
		image,
		departure,
		arrival,
		duration,
		availability,
		price,
		airline,
		rating,
		short_description,
	} = flight;

	const addToCart = () => {
		if (user) {
			const cartItem = {
				packageId: _id,
				title: airline,
				duration,
				people: 1,
				price: parseFloat(price),
				email: user.email,
			};
			axios.post("/cart", cartItem).then((data) => {
				console.log(data);
				if (data.data.acknowledged === true) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Package added to cart",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
		} else {
			Swal.fire({
				title: "You Have To Log In First",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Go to log in?",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		}
	};

	return (
		<div
			data-aos="fade-right"
			className="relative hover:shadow-lg shadow-orange-600 transition-shadow duration-200 h-[500px] rounded-lg">
			<AbsoluteBG
				style={
					"bg-no-repeat rounded-lg bg-cover bg-center group-hover:brightness-75"
				}
				src={image}
			/>

			<div className="">
				<div className="absolute px-10 py-6  text-[#454545] bottom-10 space-y-2 left-1/2 -translate-x-1/2 w-10/12 mx-auto bg-white rounded">
					<div className="flex gap-2 items-center">
						<GiWindsock /> <p className="font-light">{airline}</p>
					</div>

					<div className="flex items-center gap-2 justify-evenly">
						<p>{departure.city}</p>
						<div className="animate-pulse">
							<FaPlane />
						</div>
						<p>{arrival.city}</p>
					</div>

					<div className="flex justify-between items-center">
						<p className=" font-bold  tracking-tighter text-green-700 uppercase text-xl">
							${price}
						</p>

						<p className=" font-bold">
							{availability}
							<span className="text-gray-500 font-light  tracking-tighter">
								{" "}
								seats available
							</span>
						</p>
					</div>
					<p>{short_description}</p>
					<div className=" absolute -top-8 translate-y-1/2 right-5 w-32   rounded-md bg-blue-300">
						<Rating
							style={{ maxWidth: 180 }}
							value={rating}
							readOnly
						/>
					</div>
					<div onClick={addToCart} className="text-center py-2">
						<Button text={"Book Now"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularFlightCard;
