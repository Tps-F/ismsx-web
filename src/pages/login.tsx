import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import React, { FormEventHandler, useState } from "react";

import { useAuth } from "../utils/auth";

const loginPage: React.FC<PageProps> = () => {
	const { loginWithPassword } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await loginWithPassword(email, password);
			navigate("/post");
		} catch (error) {
			console.error("Login failed");
		}
	};
	return (
		<>
			<div className="min-h-screen py-6 sm:py-8 lg:py-12 font-caviardreams">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-sl font-bold text-gray-800 md:mb-8 lg:text-3xl">
						Login
					</h2>
					<form
						onSubmit={onSubmit}
						className="mx-auto max-w-lg rounded-lg border"
					>
						<div className="flex flex-col gap-4 p-4 md:p-8">
							<div className="">
								<label
									htmlFor="email"
									className="mb-2 inline-block text-sm text-blue-800 sm:text-base"
								>
									email
								</label>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									name="email"
									className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300"
								/>
							</div>
							<div className="">
								<label
									htmlFor="password"
									className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
								>
									password
								</label>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									name="password"
									className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300"
								/>
							</div>
							<button
								type="submit"
								className="block rounded-lg bg-gray-800 px-8 oy-3 text-center text-sm font-bold text-white outline-none ring-gray-300 "
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default loginPage;
