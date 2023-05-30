import React from "react";
import Container from "../../components/shared/Container";
import Banner from "./Banner";
import Popular from "./Popular";

const Home = () => {
	return (
		<div className="md:pt-16">
			<Banner />
			<Popular />
		</div>
	);
};

export default Home;
