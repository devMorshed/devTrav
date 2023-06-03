import React from "react";
import AbsoluteBG from "./shared/AbsoluteBG";
import { GiDuration } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const PackageCard = ({ data }) => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [_, refetch] = useCart();

	console.log(refetch);
	const {
		_id,
		title,
		price,
		image,
		country,
		ratings,
		spot,
		details,
		duration,
		people,
		totalReviews,
	} = data;

	const addToCart = (item) => {
		if (user) {
			const cartItem = {
				packageId: _id,
				title,
        image,
        duration,
        people,
				price : parseFloat(price),
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
			data-aos="fade-up-right"
			className="grid shadow-lg hover:scale-[1.01] transistion duration-100 border-2 overflow-hidden rounded-xl items-center lg:grid-cols-3 gap-4">
			<div className="relative min-h-[200px] h-full">
				<AbsoluteBG
					style={"bg-no-repeat rounded-none bg-cover bg-center"}
					src={image}
				/>
			</div>
			<div className="px-4  mx-auto">
				<h4 className="text-xl text-center">{title}</h4>
				<p className=" my-3 text-sm text-[#454545]">{details}</p>
				<div className="rounded-full w-fit mx-auto my-4 gap-2 p-2 flex items-center border">
					<div className="flex items-center px-2 gap-2">
						<GiDuration size={20} /> <span>{duration}</span>
					</div>
					<div className="border-x-2 px-2 flex items-center gap-2">
						<FaUserFriends size={20} /> <span>{people}</span>
					</div>
					<div className="flex items-center px-2 gap-2">
						<MdLocationOn size={20} /> <span>{country}</span>
					</div>
				</div>
			</div>
			<div className=" h-full space-y-4 p-10 bg-[#FFA55950]">
				<div className="z-10 flex justify-center gap-4 items-center">
					<p>{totalReviews} Reviews.</p>
					<Rating style={{ maxWidth: 90 }} value={ratings} readOnly />
				</div>
				<p className="text-5xl text-center text-[#FF6000] font-bold">
					${price} <span className="text-xs">/per person</span>
				</p>
				<button
					onClick={addToCart}
					className="mx-auto border-none hover:bg-orange-800 block my-10 px-6 py-3 border rounded-lg text-white font-bold tracking-tighter bg-[#FF6000]">
					Book Now
				</button>
			</div>
		</div>
	);
};

export default PackageCard;
