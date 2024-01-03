import type { HeadFC, PageProps } from "gatsby";
import React from "react";


import WorksGrid from "../components/worksGrid";

const WorksPage: React.FC<PageProps> = () => {
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
				<WorksGrid />
			</div>
		</div>
	);
};

export default WorksPage;
export const Head: HeadFC = () => <title>isshin — Works</title>;
