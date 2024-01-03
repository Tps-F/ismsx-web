import feather, { FeatherIcon as Icon, FeatherIconNames } from "feather-icons";
import React from "react";

interface FeatherIconProps {
	name: keyof { [key in FeatherIconNames]: Icon };
	sizeArray: number[];
	fillColor?: string | null;
}

const FeatherIcon = ({ name, sizeArray, fillColor }: FeatherIconProps) => {
	const featherString = feather.icons[name].toSvg({
		width: sizeArray[0],
		height: sizeArray[1],
		...(fillColor !== null && { fill: fillColor }),
	});
	return <div dangerouslySetInnerHTML={{ __html: featherString || "" }} />;
};

export default FeatherIcon;
