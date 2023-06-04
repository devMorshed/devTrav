import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/Signup";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import Bookings from "../pages/Dashboard/Bookings";
import Users from "../pages/Dashboard/Users";
import AddPackage from "../pages/Dashboard/AddPackage";
import MyHistory from "../pages/Dashboard/MyHistory";
import Hotel from "../pages/Hotel/Hotel";
import Flight from "../pages/Flight/Flight";
import AllPackage from "../pages/AllPackage/AllPackage";

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
				path: "/hotel",
				element: <Hotel />,
			},
			{
				path: "/flight",
				element: <Flight />,
			},
			{
				path: "/allpackages",
				element: <AllPackage />,
			},

			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
				children: [
					{
						path: "/dashboard",
						element: <Profile />,
					},
					{
						path: "bookings",
						element: <Bookings />,
					},
					{
						path: "history",
						element: <MyHistory />,
					},
					{
						path: "users",
						element: <Users />,
					},
					{
						path: "addpackage",
						element: <AddPackage />,
					},
				],
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
