import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const toCart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

	const addToCart = (item) => {
		if (user) {
			const cartItem = {
				itemID: _id,
				title,
				duration,
				people,
				price: parseFloat(price),
				email: user.email,
			};
			axios.post("/cart", cartItem).then((data) => {
				console.log(data);
				if (data.data.acknowledged === true) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Package added to cart",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
		} else {
			Swal.fire({
				title: "You Have To Log In First",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Go to log in?",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login");
				}
			});
		}
	};
};

export default toCart;
