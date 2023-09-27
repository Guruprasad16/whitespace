import React from "react";

import { Button, Img, Text } from "components";

const ProjectLibraryPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto">
          <Text
            className="text-black-900_d8 text-center text-sm w-auto"
            size="txtOutfitRegular14Black900d8"
          >
            {props?.totalitems}
          </Text>
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
            <Button
              className="border border-blue_gray-100 border-solid flex h-8 items-center justify-center rounded-sm w-8"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img className="h-3" src="images/img_left.svg" alt="left" />
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.one}
            </Button>
            <Button
              className="bg-transparent cursor-pointer font-arial h-8 text-black-900_3f text-center text-sm tracking-[2.00px] w-8"
              size="md"
            >
              {props?.prop}
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.four}
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.five}
            </Button>
            <Button
              className="!text-blue-500 border border-blue-500 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.six}
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.seven}
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.eight}
            </Button>
            <Button
              className="bg-transparent cursor-pointer font-arial h-8 text-black-900_3f text-center text-sm tracking-[2.00px] w-8"
              size="md"
            >
              {props?.one}
            </Button>
            <Button
              className="!text-black-900_d8 border border-blue_gray-100 border-solid cursor-pointer font-outfit h-8 rounded-sm text-center text-sm w-8"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.fifty}
            </Button>
            <Button
              className="border border-blue_gray-100 border-solid flex h-8 items-center justify-center rounded-sm w-8"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-3"
                src="images/img_iconright.svg"
                alt="iconright"
              />
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start px-3 py-1 rounded-sm w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-black-900_d8 text-sm w-auto"
                  size="txtOutfitRegular14Black900d8"
                >
                  {props?.p10page}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectLibraryPagination.defaultProps = {
  totalitems: "1-10 of 100 items",
  one: "1",
  prop: "•••",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  one: "•••",
  fifty: "50",
  p10page: "10/page",
};

export default ProjectLibraryPagination;
