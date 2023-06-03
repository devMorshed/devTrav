import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
	const { user } = useAuth();
	const { data: cart = [], refetch } = useQuery({
		queryKey: ["cart", user?.email],
		queryFn: async () => {
			const res = await axios.get(`/cart?email=${user?.email}`);
			return res.data;
		},
	});
	return [cart, refetch];
};

export default useCart;
