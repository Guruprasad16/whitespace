import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start mt-7 w-auto md:w-full">
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconproject.svg"
                  alt="iconproject"
                />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtOutfitRegular16Gray600"
                >
                  Project Library
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-light_blue-50 cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_dashboard.svg"
                  alt="dashboard"
                />
                <Text
                  className="text-[15px] text-blue-500 w-auto"
                  size="txtOutfitMedium16"
                >
                  Dashboard
                </Text>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_algorithm11.svg"
                  alt="algorithmEleven"
                />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtOutfitRegular16Gray600"
                >
                  Algorithm Section
                </Text>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconpiechart.svg"
                  alt="iconpiechart"
                />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtOutfitRegular16Gray600"
                >
                  Cluster Analysis
                </Text>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-center justify-start py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="bottom-2.5 h-5 relative w-5"
                  src="images/img_targetaudience.svg"
                  alt="targetaudience"
                />
                <Text
                  className="block bottom-2.5 relative text-[15px] text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  Segment Characteristics
                </Text>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img className="h-5 w-5" src="images/img_menu.svg" alt="menu" />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtOutfitRegular16Gray600"
                >
                  Whitespace Analysis
                </Text>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
            <div className="flex flex-col items-center justify-start py-2 w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="bottom-2.5 h-5 relative w-5"
                  src="images/img_fi11181999.svg"
                  alt="fi11181999"
                />
                <Text
                  className="bottom-2.5 relative text-[15px] text-gray-600 w-auto"
                  size="txtOutfitRegular15"
                >
                  Product Recommendations
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="border-gray-300 border-solid border-t mt-8 pb-2.5 pl-[11px] sm:pr-5 pr-[35px] pt-[26px] text-gray-900_01 text-sm"
          size="txtOutfitSemiBold14"
        >
          Master Data
        </Text>
        <div className="flex flex-col items-start justify-start px-4 shadow-bs1 w-[220px] md:w-full">
          <div className="flex flex-col items-center justify-start py-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_map.svg" alt="map" />
              <Text
                className="text-[15px] text-gray-600 w-auto"
                size="txtOutfitRegular16Gray600"
              >
                Product Characteristics
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[329px] px-4 shadow-bs1 w-auto md:w-full">
          <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_iconlogout.svg"
                alt="iconlogout"
              />
              <Text
                className="text-base text-gray-900_01 w-auto"
                size="txtOutfitRegular16Gray90001"
              >
                Logout
              </Text>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
