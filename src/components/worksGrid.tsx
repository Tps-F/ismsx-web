import React, { useEffect, useState } from "react";
import { database } from "../utils/database";
import { sortByDate } from "../utils/sort";

const WorksGrid = () => {
	const [works, setWorks] = useState<any[]>([]);
	const [selectedWork, setSelectedWork] = useState<any | null>(null);
	const [visibleWorks, setVisibleWorks] = useState<number>(12);

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

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight
			) {
				setVisibleWorks((prevVisibleWorks) => prevVisibleWorks + 12);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleImageClick = (work: any) => {
		setSelectedWork(work);
	};

	const closeOverlay = () => {
		setSelectedWork(null);
	};

	return (
		<div>
			<div
				className={`grid sm:grid-cols-2 lg:grid-cols-3 ${
					selectedWork ? "opacity-10 pointer-events-none" : ""
				}`}
			>
				{works.slice(0, visibleWorks).map((work) => (
					<div key={work.id} className="relative">
						<div
							onClick={() => handleImageClick(work)}
							className="group block w-full overflow-hidden bg-gray-100 relative aspect-video"
						>
							<img
								src={`${process.env.GATSBY_SUPABASE_PROJECT_URL}/storage/v1/object/public/${work.image[0]}`}
								alt={work.name}
								className="h-full w-full object-cover object-center transition duration-200"
							/>
							<span className="hover:backdrop-brightness-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col text-white opacity-0 transition-opacity duration-200 hover:opacity-100 p-4">
								<span className="text-secondary">
									{work.date.split("-").slice(0, 2).join("-")}
								</span>
								<a
									href={work.url}
									className="text-lg text-secondary transition duration-100 hover:text-gray-500 lg:text-xl"
								>
									{work.name}
								</a>
							</span>
						</div>
					</div>
				))}
			</div>
			{selectedWork && (
				<div
					onClick={closeOverlay}
					className="fixed top-8 left-0 w-full h-full bg-secondary py-2 lg:py-2 font-caviardreams"
				>
					<div className="mx-auto max-w-screen-lg px-4 md:px-8 ">
						<br />
						<div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 md:mb-8">
							<img
								src={`${process.env.GATSBY_SUPABASE_PROJECT_URL}/storage/v1/object/public/${selectedWork.image[0]}`}
								loading="lazy"
								className="h-full w-full object-cover object-center"
								alt="about"
							/>
						</div>
						<div className="md:py-8">
							<div className="mb-2 md:mb-3">
								<span className="mb-0.5 inline-block text-gray-500">
									{selectedWork.date}
								</span>
								<h2 className="text-xl font-bold text-gray-800 lg:text-2xl">
									<a href={selectedWork.url}>{selectedWork.name}</a>
								</h2>
							</div>

							{/**
							 * 後で考えるらしいから保留
							<div className="mt-10 md:mt-16 lg:mt-20">
								<div className="mb-3 text-lg font-semibold text-gray-800">
									Description
								</div>

								<p className="text-gray-500">
									一応用意した<br/><br/>あああああああああ
								</p>
							</div>
							 */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default WorksGrid;
