import React from "react";

const SectionHeading = ({ subHead, mainHead, text }) => {
	return (
		<div className="text-center my-10 space-y-4">
			<h5 className="text-[#FF6000] uppercase tracking-widest">
				{subHead}
			</h5>
			<h3 className="text-4xl font-light uppercase">{mainHead}</h3>
			<p className=" text-[#454545] px-6 md:px-10 mx-auto text-center">{text}</p>
		</div>
	);
};

export default SectionHeading;
