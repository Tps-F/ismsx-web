import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import feather from "../utils/feather";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<div className="min-h-screen bg-primary pt-4 sm:pt-10 lg:pt-12 font-caviardreams flex flex-col justify-center items-center">
				<section className="">
					<div className="container max-w-screen-xl mx-auto px-4">
						<div className="text-center">
							<div className="flex justify-center w-50">
								<StaticImage
									src="../images/logo.png"
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
						<div className="mb-4 flex flex-wrap justify-center gap-x-10 gap-y-2 md:justify-start md:gap-20 text-secondary">
							<a href="https://twitter.com/ismsx">
								{feather({
									name: "twitter",
									sizeArray: [24, 24],
									fillColor: "#FCE9D7",
								})}
							</a>
							<a href="https://www.instagram.com/ismsx_/">
								{feather({
									name: "instagram",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="https://www.youtube.com/ismsx">
								{feather({
									name: "youtube",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="mailto:ismsx.jp@gmail.com">
								{feather({
									name: "mail",
									sizeArray: [24, 24],
									fillColor: null,
								})}
							</a>
							<a href="">
								<StaticImage
									src="../images/ae.png"
									alt="booth"
									className="w-6"
								/>
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
