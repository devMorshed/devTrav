import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
axios.defaults.baseURL = "https://devtrav.vercel.app/";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Toaster />
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</AuthProvider>
);
