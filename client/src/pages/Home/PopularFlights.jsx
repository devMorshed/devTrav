import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import PopularFlightCard from "../../components/PopularFlightCard";
import SectionHeading from "../../components/shared/SectionHeading";

const PopularFlights = () => {
	const {
		data: flights = [],
		isLoading,
		refetch,
	} = useQuery(["flights"], async () => {
		const res = await axios.get("/flights");
		return res.data;
	});

	console.log(flights);
	return (
		<div className="p-10">
			<SectionHeading subHead={'Popular Flights'} mainHead={'Fly With Us'} text={'Choose between most popular flights offer from us.'} />
			<div className="grid lg:grid-cols-3 gap-10">
				{flights?.map((flight) => (
					<PopularFlightCard key={flight._id} flight={flight} />
				))}
			</div>
		</div>
	);
};

export default PopularFlights;
