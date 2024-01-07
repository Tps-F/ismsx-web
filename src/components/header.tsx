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
					<Link
						to={location === "" ? "works" : "/works"}
						className="text-blue-500 hover:text-blue-700"
					>
						works
					</Link>
				</div>
				<div
					className={`mb-4 tracking-widest ${
						colors[1] || "text-about"
					} text-right text-xl`}
				>
					<Link
						to={location === "" ? "about" : "/about"}
						className="text-blue-500 hover:text-blue-700"
					>
						about
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
