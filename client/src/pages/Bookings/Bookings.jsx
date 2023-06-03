import axios from "axios";
import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

const Bookings = () => {
	const [cart, refetch] = useCart();

	const totalPrice = cart?.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

  console.log(cart);

	return (
		<div className="p-20 my-32">
      
			
			<p className="text-center text-3xl my-10">
				{/* Total Price: {totalPrice} */}
			</p>
			<ul>
				{cart?.map((cartItem, index) => (
					<li className="flex justify-evenly my-4" key={cartItem._id}>
						<p>{index + 1}.</p>
						<p>Package Name : {cartItem.title} </p>
						<p>Package Price : {cartItem.price} </p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Bookings;
