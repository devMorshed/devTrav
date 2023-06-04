import React from "react";

const Button = ({ text, cclass }) => {
	return <button className={` transition-colors px-3 py-2 rounded  font-semibold uppercase hover:bg-orange-700 text-white bg-orange-500 tracking-tighter ${cclass}`}>{text}</button>;
};

export default Button;
