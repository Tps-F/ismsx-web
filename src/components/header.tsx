import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
interface HeaderProps {
	colors?: string[];
}

const Header: React.FC<HeaderProps> = ({ colors = [] }) => {
	const location: string = useLocation().pathname.replace(/\//g, "");
	return (
		<>
			<div className="px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
				<div
					className={`mb-4 tracking-widest ${
						colors[0] || "text-works"
					} text-right text-xl`}
				>
					<Link to={location === "" ? "works" : "/works"}>
						<div className="relative">
							<div
								className={`${
									location.includes("works") ? "bg-textbg" : ""
								} w-[57.5px] h-[14px] absolute top-[7px] left-[31px]`}
							/>
							<p className="relative">works</p>
						</div>
					</Link>
				</div>

				<div
					className={`mb-4 tracking-widest ${
						colors[1] || "text-about"
					} text-right text-xl`}
				>
					<Link
						to={location === "" ? "about" : "/about"}
						className={`${location.includes("about") ? "bg-textbg" : ""}`}
					>
						<div className="relative">
							<div
								className={`${
									location.includes("about") ? "bg-textbg" : ""
								} w-[65px] h-[15.8px] absolute top-[5.2px] left-[23.24px]`}
							/>
							<p className="relative">about</p>
						</div>
					</Link>
				</div>
				<div
					className={`mb-4 tracking-widest ${
						colors[2] || "text-primary"
					} text-right text-xl`}
				>
					<a>contact</a>
				</div>
			</div>
		</>
	);
};

export default Header;
