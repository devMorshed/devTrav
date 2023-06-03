import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/Signup";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../pages/Bookings/Bookings";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
			{
				path: "/bookings",
				element: (
					<PrivateRoute>
						<Bookings />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);
