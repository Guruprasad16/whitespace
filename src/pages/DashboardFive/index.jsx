import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DashboardFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-900 flex flex-row h-12 md:h-auto items-center justify-between max-w-[1440px] px-4 shadow-bs4 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mx-auto md:px-5 w-full">
              <Img
                className="h-11 w-[178px]"
                src="images/img_jktechregisteredlogopositive.svg"
                alt="jktechregistere"
              />
              <div className="flex flex-row items-center justify-end w-auto">
                <List
                  className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[32%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center px-3">
                    <Img
                      className="h-5 w-5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center px-3">
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconquestioncircle.svg"
                      alt="iconquestioncir"
                    />
                  </div>
                </List>
                <div className="h-12 md:h-6 p-3 relative w-12">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto p-1 w-6">
                    <Img
                      className="h-4 w-4"
                      src="images/img_iconbell.svg"
                      alt="iconbell"
                    />
                  </div>
                  <div className="absolute flex flex-col items-center justify-start right-1/4 top-1/4">
                    <Text
                      className="bg-red-A200 justify-center pl-2 pr-[5px] rounded-[10px] text-center text-white-A700 text-xs w-auto"
                      size="txtOutfitRegular12"
                    >
                      11
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row h-12 md:h-auto items-center justify-start px-3">
                  <div className="flex flex-col items-center justify-center pr-2 w-8">
                    <Img
                      className="h-6 md:h-auto rounded-[50%] w-6"
                      src="images/img_iconsetting.png"
                      alt="iconsetting"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-[15px] text-white-A700 w-auto"
                      size="txtOutfitRegular16"
                    >
                      John Lee
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-56 bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs3 top-[0]" />
            <div className="bg-white-A700 border border-blue-A200 border-dashed flex flex-1 flex-col h-[609px] md:h-auto items-center justify-between max-w-[1176px] mb-[169px] md:mt-0 mt-[74px] md:px-10 sm:px-5 px-[263px] py-8 rounded-[16px] w-full">
              <div className="flex flex-col gap-10 h-[438px] md:h-auto inset-2.5 items-center justify-start relative w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start py-4 w-auto sm:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-[166px] w-[282px]"
                      src="images/img_image.svg"
                      alt="image_One"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
                        size="txtOutfitSemiBold36"
                      >
                        Upload Market Research Data
                      </Text>
                      <Text
                        className="text-gray-700 text-lg w-auto"
                        size="txtOutfitMedium18"
                      >
                        You Can upload CSV ot XLS files to import your inventory
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
                  <div
                    className="common-pointer flex flex-col gap-2 items-center justify-start w-auto"
                    onClick={() => navigate("/dashboardsix")}
                  >
                    <Button
                      className="border border-blue-500 border-solid cursor-pointer flex items-center justify-center min-w-[357px]"
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-3"
                          src="images/img_icon_cloudupload.svg"
                          alt="icon/CloudUpload"
                        />
                      }
                      shape="round"
                      color="blue_500"
                      size="md"
                      variant="fill"
                    >
                      <div className="text-base text-center">
                        Click Here to Upload
                      </div>
                    </Button>
                    <Text
                      className="text-lg text-red-A200_01 w-auto"
                      size="txtOutfitLight18"
                    >
                      <span className="text-red-A200_01 font-outfit text-left text-xs font-light">
                        Note
                      </span>
                      <span className="text-red-A200_01 font-outfit text-left text-[7px] font-light">
                        :{" "}
                      </span>
                      <span className="text-red-A200_01 font-outfit text-left text-xs font-light">
                        File not should be more than 500mb
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardFivePage;
