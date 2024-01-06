import { useScrollRestoration, type HeadFC, type PageProps } from "gatsby";

import React, { FormEventHandler, useState } from "react";
import { database } from "../utils/database";
import { useAuth } from "../utils/auth";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
	event.preventDefault();
	const form = new FormData(event.currentTarget);
	const workName = (form.get("workName") || "").toString();
	const date = (form.get("date") || "").toString();
	const url = (form.get("URL") || "").toString();
	const description = (form.get("description") || "").toString();
	const images = form.getAll("images") as File[];

	const { addWork } = database();
	addWork({ workName, date, url, description, images });
	console.log(images);
	alert(`work: ${images}`);
};

const PostPage: React.FC<PageProps> = () => {
	const { isLogin } = useAuth();

	isLogin();
	return (
		<>
			<div className="min-h-screen py-6 sm:py-8 lg:py-12 font-caviardreams">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="mb-10 md:mb-16">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							仕事の追加よー
						</h2>
					</div>

					<form
						className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
						onSubmit={handleSubmit}
					>
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								仕事名
							</label>
							<input
								name="workName"
								className="w-full rounded border px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						<div>
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								いつのか(日付順で並び替えてる)
							</label>
							<input
								name="date"
								type="datetime-local"
								className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div>
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								遷移先URL
							</label>
							<input
								name="URL"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>

						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								サムネ用(3枚までかなー)
							</label>
							<input
								name="images"
								type="file"
								multiple
								accept=".png,.jpg,.webp,.gif"
								className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						{/*
						<div className="sm:col-span-2">
							<label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
								仕事の説明(拡大したら出てくる)
							</label>
							<textarea
								name="description"
								className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
							/>
						</div>
						*/}

						<div className="flex items-center justify-between sm:col-span-2">
							<button
								type="submit"
								className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default PostPage;
export const Head: HeadFC = () => <title>isshin — Works</title>;
