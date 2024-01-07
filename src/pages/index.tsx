import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import feather from "../utils/feather";
import Header from "../components/header";
import { useEffect } from "react";

import logo_beige from "../images/logo_beige.gif";
import logo_red from "../images/logo_red.gif";
import booth from "../images/ae.png";

const IndexPage: React.FC<PageProps> = () => {
	const colorTheme = Math.random() < 0.5;

	const callback = (event: Event) => {
		event.preventDefault();
	};

	useEffect(() => {
		document.addEventListener("touchmove", callback, { passive: false }); 

		return () => {
			document.removeEventListener("touchmove", callback, { capture: false });
		};
	}, [callback]);

	return (
		<>
			<div
				className={`min-h-screen ${
					colorTheme ? "bg-primary" : "bg-secondary"
				} pt-4 sm:pt-10 lg:pt-12 font-caviardreams flex flex-col justify-center items-center`}
			>
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8 fixed top-10 left-0 right-0 w-full z-50">
					<Header
						colors={
							colorTheme
								? ["text-secondary", "text-secondary", "text-secondary"]
								: ["text-primary", "text-primary", "text-primary"]
						}
					/>
				</div>
				<section>
					<div className="container max-w-screen-xl mx-auto lg:px-40 md:px-20 ">
						<div className="text-center">
							<div className="flex justify-center w-50">
								<img
									src={colorTheme ? logo_beige : logo_red}
									loading="eager"
									alt="logo"
									className="overflow-hidden"
								/>
							</div>
						</div>
					</div>
				</section>

				<footer className="mx-auto max-w-screen-2xl px-4 md:px-8 fixed bottom-0 left-0 right-0 w-full">
					<div className="flex flex-col items-center border-t border-dashed pt-6 text-secondary">
						<br />
						<div
							className={`mb-4 flex flex-wrap justify-center gap-x-10 gap-y-2 md:justify-start md:gap-20 ${
								colorTheme ? "text-secondary" : "text-primary"
							}`}
						>
							<a href="https://twitter.com/ismsx" target="blank">
								{feather({
									name: "twitter",
									sizeArray: [24, 24],
									fillColor: "#FCE9D7",
								})}
							</a>
							<a href="https://www.instagram.com/ismsx_/" target="blank">
								{feather({
									name: "instagram",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="https://www.youtube.com/ismsx" target="blank">
								{feather({
									name: "youtube",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="mailto:ismsx.jp@gmail.com" target="blank">
								{feather({
									name: "mail",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="https://ismsx.booth.pm/" target="blank">
								<img src={booth} alt="booth" className="w-6" />
							</a>
						</div>
					</div>

					<div className="py-8 text-center text-sm text-secondary">©Isshin</div>
				</footer>
			</div>
		</>
	);
};

export default IndexPage;
export const Head: HeadFC = () => <title>ismsx</title>;
