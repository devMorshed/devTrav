import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiAmericanShield, GiTrashCan } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Users = () => {
	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const handleAdmin = async (user) => {
		const updatedRole = {
			name: user.name,
			email: user.email,
			role: "admin",
		};

		Swal.fire({
			title: `Make ${user.name} Admin?`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await axiosSecure
					.put(`/makeadmin/${user.email}`, updatedRole)
					.then((data) => {
						if (data.data.modifiedCount === 1) {
							refetch();
							Swal.fire(`${user.name} is Admin Now`);
						}
					});
			}
		});
  };
  
	const handleDeleteUser = async (user) => {
	
		Swal.fire({
			title: `Delete ${user.name}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await axiosSecure
					.delete(`/user/${user._id}`)
					.then((data) => {
						if (data.data.deletedCount === 1) {
							refetch();
							Swal.fire(`${user.name} Deleted`);
						}
					}).catch(err => console.log(err))
			}
		});
	};

	return (
		<div className="my-20 text-center p-10">
			<p className="my-10">Total User : {users?.length}</p>
			{users?.map((user) => (
				<div
					className="flex gap-10 my-2 border p-3 hover:bg-gray-300 transition duration-100"
					key={user._id}>
					<p>Email : {user.email}</p>
					<p>Name : {user.name}</p>
					<p>Role : {user.role}</p>
					<div>
						<button
							onClick={() => {
								handleAdmin(user);
							}}>
							<GiAmericanShield size={20} />
						</button>
					</div>
					<div>
						<button
							onClick={() => {
								handleDeleteUser(user);
							}}>
							<GiTrashCan size={20} />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Users;
