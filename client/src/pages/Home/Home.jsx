import React from "react";
import Container from "../../components/shared/Container";
import Banner from "./Banner";
import Popular from "./Popular";
import Packages from "./Packages";

const Home = () => {
	return (
		<div className="md:pt-16">
			<Banner />
			<Popular />
			<Packages />
		</div>
	);
};

export default Home;
