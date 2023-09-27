import React from "react";

import { Img, Text } from "components";

const ProjectLibrarySearchbox = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start px-3 py-1 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-black-900_3f text-sm w-auto"
              size="txtRobotoRegular14Black9003f"
            >
              {props?.placeholder}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-8 md:h-auto items-center justify-start outline outline-[1px] outline-blue_gray-100 p-[9px] w-8">
          <Img
            className="h-3.5 w-3.5"
            src="images/img_search_black_900.svg"
            alt="search"
          />
        </div>
      </div>
    </>
  );
};

ProjectLibrarySearchbox.defaultProps = { placeholder: "Search..." };

export default ProjectLibrarySearchbox;
