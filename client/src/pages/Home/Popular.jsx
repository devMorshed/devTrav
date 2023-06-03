import React from "react";
import Container from "../../components/shared/Container";
import PopularCard from "../../components/PopularCard";
import SectionHeading from "../../components/shared/SectionHeading";

const Popular = () => {
	return (
		<div className="my-20">
			<Container>
				<SectionHeading
					subHead={"Popular Packages"}
					mainHead={"We are best"}
					text={
						"From the majestic wonders of nature to the bustling cityscapes filled with vibrant cultures, our general travel places offer a diverse range of experiences. "
					}
				/>
				<div className="grid gap-5 mx-auto md:grid-cols-2  lg:grid-cols-3">
					<PopularCard />
					<PopularCard />
					<PopularCard />
				
				</div>
				<button className="mx-auto block my-10 px-6 py-3 border rounded-lg text-white font-bold tracking-tighter bg-[#FF6000]">
					More Destinations
				</button>
			</Container>
		</div>
	);
};

export default Popular;
