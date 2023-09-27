import React from "react";

import { Img, Text } from "components";

const AlgorithmSelectionColumndescriptionTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start pb-[6.58px] w-full">
          <Text
            className="text-gray-700 text-xs w-auto"
            size="txtOutfitRegular12Gray700"
          >
            {props?.descriptionTwo}
          </Text>
        </div>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-start px-[9.87px] py-[3.29px] rounded-[1px] w-full">
          <div className="flex flex-1 flex-col items-center justify-start py-[0.82px] w-full">
            {!!props?.title ? (
              <Text
                className="text-[11.51px] text-black-900_d8 w-auto"
                size="txtOutfitMedium1151"
              >
                {props?.title}
              </Text>
            ) : null}
          </div>
          {!!props?.computerimage ? (
            <Img
              className="h-full max-h-5"
              alt="computer"
              src="props?.computerimage"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

AlgorithmSelectionColumndescriptionTwo.defaultProps = {
  descriptionTwo: "# of Interaction",
};

export default AlgorithmSelectionColumndescriptionTwo;
