import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import PackageCard from "../../components/PackageCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Packages = () => {
	const [packages, setPackages] = useState();

	useEffect(() => {
		axios.get("/packages").then((data) => setPackages(data.data));
	}, []);


	return (
		<div className="my-60">
			<Container>
				<SectionHeading
					subHead={"UNCOVER PLACE"}
					mainHead={"CHECKOUT OUR PACKEGES"}
					text={
						"Travel to enchanting destinations around the globe and unlock a world of endless possibilities.t."
					}
				/>

				<div className="flex flex-col gap-10">
					{packages?.map((tourPack, index) => (
						<PackageCard key={tourPack._id} data={tourPack} />
					))}
				</div>
				<Link to={'/allpackages'}>
					<button className="mx-auto block my-10 px-6 py-3 border rounded-lg text-white font-bold tracking-tighter bg-[#FF6000]">
						More Packages
					</button>
				</Link>
			</Container>
		</div>
	);
};

export default Packages;
