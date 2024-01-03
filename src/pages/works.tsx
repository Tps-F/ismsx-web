import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import aboutImage from "../images/about/about_4k.png";

const CompetitiveAdvantage2 = () => {
	return (
		<div className="min-h-screen bg-secondary py-6 sm:py-8 lg:py-12 font-caviardreams">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<h1 className="mb-4 text-5xl font-bold sm:text-6xl md:mb-6 text-works">
					Works
				</h1>
				<div className="mb-6 flex items-end justify-between gap-4">
					<br />
					<a
						href="#"
						className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
					>
						Show more
					</a>
				</div>

				<div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
					<div>
						<a
							href="#"
							className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
						>
							<StaticImage
								src="../images/works/1/1.jpg"
								alt="work"
								className="h-full w-full object-cover object-center transition duration-200"
							/>
						</a>

						<div className="flex flex-col">
							<span className="text-gray-500">2023.12</span>
							<a
								href="#"
								className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
							>
								富士フィルム「クリスマスプレゼントにチェキ！ TVCM モーション他
							</a>
						</div>
					</div>
					<div>
						<a
							href="#"
							className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
						>
							<StaticImage
								src="../images/works/3.jpg"
								alt="work"
								className="h-full w-full object-cover object-center transition duration-200"
							/>
						</a>

						<div className="flex flex-col">
							<span className="text-gray-500">2023.12</span>
							<a
								href="#"
								className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
							>
								富士フィルム「クリスマスプレゼントにチェキ！ TVCM モーション他
							</a>
						</div>
					</div>
					<div>
						<a
							href="#"
							className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
						>
							<StaticImage
								src="../images/works/1/1.jpg"
								alt="work"
								className="h-full w-full object-cover object-center transition duration-200"
							/>
						</a>

						<div className="flex flex-col">
							<span className="text-gray-500">2023.12</span>
							<a
								href="#"
								className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
							>
								富士フィルム「クリスマスプレゼントにチェキ！ TVCM モーション他
							</a>
						</div>
					</div>
					<div>
						<a
							href="#"
							className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
						>
							<StaticImage
								src="../images/works/1/1.jpg"
								alt="work"
								className="h-full w-full object-cover object-center transition duration-200"
							/>
						</a>

						<div className="flex flex-col">
							<span className="text-gray-500">2023.12</span>
							<a
								href="#"
								className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
							>
								富士フィルム「クリスマスプレゼントにチェキ！ TVCM モーション他
							</a>
						</div>
					</div>
					<div>
						<a
							href="#"
							className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
						>
							<StaticImage
								src="../images/works/1/1.jpg"
								alt="work"
								className="h-full w-full object-cover object-center transition duration-200"
							/>
						</a>

						<div className="flex flex-col">
							<span className="text-gray-500">2023.12</span>
							<a
								href="#"
								className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
							>
								富士フィルム「クリスマスプレゼントにチェキ！ TVCM モーション他
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompetitiveAdvantage2;
