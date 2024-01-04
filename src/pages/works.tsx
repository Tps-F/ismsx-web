import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import WorksGrid from "../components/worksGrid";
import Header from "../components/header";

const WorksPage: React.FC<PageProps> = () => {
	return (
		<div className="min-h-screen bg-secondary py-6 sm:py-8 font-caviardreams">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="mb-4 text-5xl font-bold sm:text-6xl md:mb-6 text-works grid-cols-2 grid">
					<h1 className="mb-6 col-span-1 flex items-center">Works</h1>
					<div className="mb-6 flex items-end justify-between gap-4 col-span-1">
						<br />
						<Header />
					</div>
				</div>
				<WorksGrid />
			</div>
		</div>
	);
};

export default WorksPage;
export const Head: HeadFC = () => <title>isshin — Works</title>;
