const AbsoluteBG = ({ src, style }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${src})`,
			}}
			className={`absolute bg-repeat top-0 right-0 left-0 bottom-0 -z-10 ${style}`}></div>
	);
};

export default AbsoluteBG;
