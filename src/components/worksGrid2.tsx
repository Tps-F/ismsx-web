import React, { useEffect, useState } from "react";
import { database } from "../utils/database";
import { sortByDate } from "../utils/sort";

const WorksGrid = () => {
	const [works, setWorks] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { getWorks } = database();
				const data = await getWorks();
				setWorks(data.sort(sortByDate));
			} catch (error) {
				console.error("Error fetching works:", (error as Error).message);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 ">
			{works.map((work) => (
				<div key={work.id}>
					<a
						href={work.url}
						className="group mb-2 block w-full overflow-hidden rounded-lg bg-gray-100"
					>
						<img
							src={`${process.env.BUILD_STAGE !== `develop` ?  "/ismsx-web" : ""} /${work.image[0]}.avif`}
							alt={work.name}
							className="h-full w-full object-cover object-center transition duration-200"
						/>
					</a>

					<div className="flex flex-col">
						<span className="text-gray-500">
							{work.date.split("-").slice(0, 2).join("-")}
						</span>
						<a
							href={work.url}
							className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
						>
							{work.name}
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default WorksGrid;
