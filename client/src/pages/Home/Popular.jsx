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
					text={"lorem ipsum doler lorem5 sdfsdkjfhsdjkfhksdjfhkjdsfhjkdsfh sdjghfhjsdg skjdhfjsdhf kjsdhfjksdhf  ksdhfjksd f lorem10 sit amet"}
				/>
				<div className="grid gap-5 mx-auto md:grid-cols-2  lg:grid-cols-3">
					<PopularCard />
					<PopularCard />
					<PopularCard />
					<PopularCard />
					<PopularCard />
					<PopularCard />
				</div>
			</Container>
		</div>
	);
};

export default Popular;
