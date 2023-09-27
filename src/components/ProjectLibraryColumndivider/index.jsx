import React from "react";

import { Img, Text } from "components";

const ProjectLibraryColumndivider = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-50 flex flex-col items-start justify-start px-4 w-[94px] md:w-full">
          <div className="flex flex-col items-center justify-start py-[17px] w-[78px]">
            {!!props?.title ? (
              <Text
                className="text-black-900_d8 text-sm w-auto"
                size="txtOutfitMedium14Black900d8"
              >
                {props?.title}
              </Text>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-px w-[94px]"
            src="images/img_divider.svg"
            alt="divider"
          />
        </div>
      </div>
    </>
  );
};

ProjectLibraryColumndivider.defaultProps = {};

export default ProjectLibraryColumndivider;
