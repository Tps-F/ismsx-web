import React from 'react';
import feather from 'feather-icons';

interface FeatherIconProps {
  name: string;
  sizeArray: [string, string];
}

const FeatherIcon = (name: string, sizeArray: number[]) => {
  const featherString = feather.icons[name].toSvg({
    width: sizeArray[0],
    height: sizeArray[1]
  });
  return (
    <div dangerouslySetInnerHTML={{ __html: featherString || '' }} />
  )
};

export default FeatherIcon