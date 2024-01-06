import React from "react";

interface HeaderProps {
	colors?: string[];
}

const Header: React.FC<HeaderProps> = ({ colors = [] }) => {
	return (
		<>
			<div className="px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
				<div
					className={`mb-4 font-bold uppercase tracking-widest ${
						colors[0] || "text-works"
					} text-right`}
				>
					<a href="/works">works</a>
				</div>
				<div
					className={`mb-4 font-bold uppercase tracking-widest ${
						colors[1] || "text-about"
					} text-right`}
				>
					<a href="/about">about</a>
				</div>
				<div
					className={`mb-4 font-bold uppercase tracking-widest ${
						colors[2] || "text-about"
					} text-right`}
				>
					<a>contact</a>
				</div>
			</div>
		</>
	);
};

export default Header;
