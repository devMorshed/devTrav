import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FaPlaneDeparture } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const SignUp = () => {
	const {
		setLoading,
		createUser,
		updateUserProfile,
		signInWithGoogle,
		loading,
  } = useAuth();
  
	const [error, setError] = useState("");

	const location = useLocation();
	const navigate = useNavigate();
	const destination = location.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		createUser(email, password)
			.then((data) => {
				const img = event.target.image.files[0];
				const formData = new FormData();
				formData.append("image", img);

				const url = `https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_IMGBB_KEY
				}`;

				fetch(url, {
					method: "POST",
					body: formData,
				})
					.then((res) => res.json())
					.then((data) => {
						const photo = data.data.display_url;
						updateUserProfile(name, photo).then(() => {
							toast.success("Signup Successfull");
							navigate(destination);
							setLoading(false);
						});
					})
					.catch((err) => {
						setLoading(false);
						console.log(err);
					});
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};

	const handleGoogle = (event) => {
		signInWithGoogle()
			.then(() => {
				navigate(destination);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};
	return (
		<div className="flex justify-center items-center min-h-screen p-6">
			<div className="flex flex-col w-11/12 max-w-2xl  p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
					<p className="text-sm text-gray-400">Welcome to devTrav</p>
				</div>
				<form
					onSubmit={handleSubmit}
					noValidate=""
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter Your Name Here"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
								data-temp-mail-org="0"
							/>
						</div>
						<div>
							<label
								htmlFor="image"
								className="block mb-2 text-sm">
								Select Image:
							</label>
							<input
								required
								type="file"
								id="image"
								name="image"
								accept="image/*"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm">
								Email address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Enter Your Email Here"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
								data-temp-mail-org="0"
							/>
						</div>
						<div>
							<div className="flex justify-between">
								<label
									htmlFor="password"
									className="text-sm mb-2">
									Password
								</label>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								required
								placeholder="*******"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
							/>
						</div>
					</div>
					{error && (
						<div className="text-center text-red-500 font-bold">
							{error}
						</div>
					)}
					<div>
						<button
							type="submit"
							className="bg-orange-500 w-1/3 mx-auto block rounded-md py-3 text-white">
							{loading ? (
								<div className="flex animate-bounce justify-center">
									<FaPlaneDeparture size={24} />
								</div>
							) : (
								"Continue"
							)}
						</button>
					</div>
				</form>

				<div
					onClick={handleGoogle}
					className="flex justify-center items-center max-w-96 mx-auto gap-2 border m-5 p-2 border-gray-300 border-rounded cursor-pointer">
					<FcGoogle size={32} />
					<p>Continue with Google</p>
				</div>

				<p className="px-6 text-sm text-center text-gray-400">
					Already have an account?
					<Link
						to="/login"
						className="hover:underline ms-4 hover:text-rose-500 text-gray-600">
						Login
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default SignUp;
