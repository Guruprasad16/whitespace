import React from "react";

import { Img, Text } from "components";

const ProjectLibraryColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-center justify-start py-[17px] w-full">
          <Text
            className="text-blue-500 text-sm w-auto"
            size="txtOutfitRegular14Blue500"
          >
            {props?.text}
          </Text>
          <Img
            className="h-full w-[78px]"
            src="images/img_linewrapper.svg"
            alt="linewrapper"
          />
        </div>
      </div>
    </>
  );
};

ProjectLibraryColumn.defaultProps = { text: "MR1472" };

export default ProjectLibraryColumn;
