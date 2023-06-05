import React from "react";
import Container from "../../components/shared/Container";
import Banner from "./Banner";
import Popular from "./Popular";
import Packages from "./Packages";
import PopularFlights from "./PopularFlights";

const Home = () => {
	return (
		<div className="md:pt-16">
			<Banner />
			<PopularFlights />
			<Popular />
			<Packages />
		</div>
	);
};

export default Home;
