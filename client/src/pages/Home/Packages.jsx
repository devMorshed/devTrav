import React from "react";
import Container from "../../components/shared/Container";
import SectionHeading from "../../components/shared/SectionHeading";
import PackageCard from "../../components/PackageCard";

const Packages = () => {
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
					<PackageCard />
					<PackageCard />
					<PackageCard />
					<PackageCard />
				</div>
				<button className="mx-auto block my-10 px-6 py-3 border rounded-lg text-white font-bold tracking-tighter bg-[#FF6000]">
					More Packages
				</button>
			</Container>
		</div>
	);
};

export default Packages;
