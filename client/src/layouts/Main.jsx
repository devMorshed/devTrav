import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";

const Main = () => {
	return (
		<div>
			<NavBar />
			<div className="pt-24">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
