import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FaPlaneDeparture } from "react-icons/fa";

const Login = () => {
	const { setLoading, signIn, signInWithGoogle, loading } =
		useAuth();

	const location = useLocation();
	const navigate = useNavigate();
	const destination = location.state?.from?.pathname || "/";

	const handleSign = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
		signIn(email, password).then((data) => {
			console.log(data);
			toast.success("Sign In Successfull");
			navigate(destination);
		});
	};

	const handleGoogle = (event) => {
		signInWithGoogle()
			.then(() => {
				navigate(destination);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};

	return (
		<div className="flex justify-center items-center min-h-screen p-6">
			<div className="flex flex-col w-11/12 max-w-2xl p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold">Log In</h1>
					<p className="text-sm text-gray-400">
						Sign in to access your account
					</p>
				</div>
				<form
					onSubmit={handleSign}
					noValidate=""
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className="space-y-4">
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
                defaultValue={'test@t.com'}
								// placeholder="Enter Your Email Here"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
                defaultValue={'testtest'}
								required
								placeholder="*******"
								className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
							/>
						</div>
					</div>

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
				<div className="space-y-1">
					<button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
						Forgot password?
					</button>
				</div>
				<div
					onClick={handleGoogle}
					className="flex justify-center items-center gap-2 border m-5 p-2 border-gray-300 border-rounded cursor-pointer">
					<FcGoogle size={32} />
					<p>Continue with Google</p>
				</div>

				<p className="px-6 text-sm text-center text-gray-400">
					Not have an account?
					<Link
						to="/signup"
						className="hover:underline ms-4 hover:text-rose-500 text-gray-600">
						Sign Up
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default Login;
