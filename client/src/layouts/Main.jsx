import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "@smastrom/react-rating/style.css";
import Footer from "../components/Footer";
AOS.init();

const Main = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<NavBar />
			<div className="pt-24">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
