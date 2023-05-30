import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../components/shared/Container";
import cabin from "../../assets/images/cabin.svg";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const { register, handleSubmit } = useForm();
	const { user, userBooking, setUserBooking } = useAuth();
	const navigate = useNavigate();
	const onSubmit = (data) => {
		if (!user) {
			Swal.fire({
				title: "You Have To Log In First",
				icon: "info",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Go to Log In",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		} else {
			setUserBooking(data);
		}
	};

	console.log(userBooking);

	return (
		<Container>
			<div className="md:flex justify-around items-center gap-8 p-10 space-y-10">
				<div className="space-y-6 md:w-1/2">
					<h2 className="text-7xl font-black text-[#FF6000] tracking-wider">
						Take a Break!
					</h2>
					<h2 className="text-2xl text-[#454545]">
						Discover the world's hidden gems and create
						unforgettable memories with our immersive travel
						experiences.
					</h2>
				</div>
				<div className="md:w-96 mx-auto">
					<img className="md:animate-bounce" src={cabin} alt="" />
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 rounded-md bg-[#FFE6C7] p-10">
					<input
						className="w-full p-4 border border-gray-300 rounded-md"
						type="text"
						placeholder="Destination"
						{...register("destination")}
					/>
					<input
						className="w-full p-4 border border-gray-300 rounded-md"
						type="date"
						placeholder="Date"
						{...register("date")}
					/>
					<input
						className="w-full p-4 border border-gray-300 rounded-md"
						type="number"
						placeholder="Person"
						{...register("person")}
					/>
					<button
						className="w-full p-4 text-white tracking-tighter font-bold bg-[#FF6000] rounded-md"
						type="submit">
						Book Now
					</button>
				</div>
			</form>
		</Container>
	);
};

export default Banner;
