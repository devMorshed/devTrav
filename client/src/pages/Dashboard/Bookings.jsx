import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Button from "../../components/shared/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
	const [cart, refetch] = useCart();

	const [axiosSecure] = useAxiosSecure();

	const totalPrice = cart?.reduce(
		(accumulator, current) => accumulator + current.price,
		0
	);

	console.log(cart);
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/cart/${id}`).then((data) => {
					console.log(data.data);
					refetch();
					if (data.data.deletedCount === 1) {
						Swal.fire(
							"Deleted!",
							"Your file has been deleted.",
							"success"
						);
					}
				});
			}
		});
	};

	if (cart?.length >= 1) {
		return (
			<div className="flex flex-col items-center min-h-[calc(100vh-266px-96px)]">
				<p className="text-center text-3xl my-10">
					Total Price: ${totalPrice}
				</p>

				<table className="min-w-full mb-10 relative divide-y divide-gray-400 border rounded shadow-xl">
					<thead className="bg-gray-50 p-4 sticky top-0">
						<tr>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								no
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Item
							</th>

							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Person
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Duration
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Price
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white text-center divide-y divide-gray-200">
						{cart.map(
							(
								{ _id, title, duration, price, people },
								index
							) => (
								<tr key={_id} className="hover:bg-gray-200">
									<td className="py-4">{index + 1}</td>
									<td className="py-4">{title}</td>
									<td className="py-4">{people}</td>
									<td className="py-4">{duration}</td>
									<td className="py-4">${price}</td>
									<td className="py-4 flex justify-center gap-2 sm:gap-6 items-center">
										<MdDeleteForever
											onClick={() => handleDelete(_id)}
											size={30}
											color="#EF3B4F"
										/>
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
				<Button cclass={"border"} text="Checkout" />
			</div>
		);
	} else {
		return (
			<div>
				<p className="text-5xl m-10 text-orange-400">
					You Have Nothing In cart
				</p>
				<Link to={"/allpackages"}>
					<Button cclass={"mx-auto block"} text={"Book Now"} />
				</Link>
			</div>
		);
	}
};

export default Bookings;
