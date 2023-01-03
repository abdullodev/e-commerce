import React, { FC } from "react";
import { ThreeDots } from "react-loader-spinner";

type Props = {
  height: string;
  width: string;
  radius: string;
};
const Loading: FC<Props> = ({ height, width, radius }) => {
  return (
    <div className="loading">
      <ThreeDots
        height={height}
        width={width}
        radius={radius}
        color="#144252"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loading;
