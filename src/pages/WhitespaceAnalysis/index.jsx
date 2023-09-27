import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const WhitespaceAnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-900 flex flex-row h-12 md:h-auto items-center justify-between max-w-[1440px] px-4 shadow-bs4 w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mx-auto md:px-5 w-full">
                <Img
                  className="h-11"
                  src="images/img_jktechregisteredlogopositive.svg"
                  alt="jktechregistere"
                />
                <div className="flex flex-row items-center justify-end w-auto">
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center px-3">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[16%]">
                    <div className="flex flex-col h-12 md:h-auto items-center justify-center px-3 w-auto">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_iconquestioncircle.svg"
                        alt="iconquestioncir"
                      />
                    </div>
                  </div>
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
                        className="text-base text-white-A700 w-auto"
                        size="txtOutfitRegular16"
                      >
                        John Lee
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-56 bg-white-A700 flex h-screen md:hidden justify-start md:mt-0 mt-7 overflow-auto md:px-5 shadow-bs3 top-[0]">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/projectlibrary")}
                >
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
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/dashboardsix")}
                >
                  <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_dashboard_gray_600.svg"
                        alt="dashboard"
                      />
                      <Text
                        className="text-[15px] text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/algorithmselection")}
                >
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
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/clusteranalysis")}
                >
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
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/algorithmselectionone")}
                >
                  <div className="flex flex-col items-center justify-start py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="bottom-2.5 h-5 relative w-5"
                        src="images/img_targetaudience.svg"
                        alt="targetaudience"
                      />
                      <Text
                        className="bottom-2.5 relative text-[15px] text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Segment Characteristics
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-light_blue-50 flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]">
                  <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu_blue_500.svg"
                        alt="menu"
                      />
                      <Text
                        className="text-[15px] text-blue-500 w-auto"
                        size="txtOutfitMedium16"
                      >
                        Whitespace Analysis
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/productrecomendations")}
                >
                  <div className="flex flex-col items-center justify-start py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
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
              <div className="flex flex-col items-start justify-start px-4 shadow-bs1 w-[220px]">
                <div className="flex flex-col items-center justify-start py-2 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_map.svg"
                      alt="map"
                    />
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtOutfitRegular16Gray600"
                    >
                      Product Characteristics
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] mr-[131px] mt-[340px] px-4 shadow-bs1 w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-5 w-full"></div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="pageheaderlegac"
                  placeholder="Whitespace Analysis"
                  className="!placeholder:text-black-900_d8 !text-black-900_d8 font-medium md:h-auto p-0 sm:h-auto text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="md:h-[5881px] sm:h-[760px] h-[776px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start p-3.5 rounded w-full">
                      <div className="flex flex-col items-center justify-start mb-[57px] mt-1.5 w-full">
                        <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[19%] md:w-full">
                            <div className="bg-blue-100 flex flex-col gap-[22px] justify-start pb-[25px] rounded-sm w-full">
                              <div className="bg-blue-100 border-b border-blue-200_01 border-solid flex flex-col items-start justify-start p-2 rounded-tl-sm rounded-tr-sm w-full">
                                <div className="flex flex-row gap-[84px] items-center justify-start my-[25px] w-auto">
                                  <Text
                                    className="text-indigo-800 text-xl w-auto"
                                    size="txtOutfitSemiBold20"
                                  >
                                    Products
                                  </Text>
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_iconcaretright.svg"
                                    alt="iconcaretright"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start ml-2 md:ml-[0] w-auto">
                                <Text
                                  className="text-indigo-800 text-lg w-auto"
                                  size="txtOutfitSemiBold18"
                                >
                                  Customer Segment
                                </Text>
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
                              <Input
                                name="group1000001302"
                                placeholder="Self Obsessed Flamboyant"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                              <Input
                                name="group1000001303"
                                placeholder="Nonchalant Socialite"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                              <Input
                                name="group1000001304"
                                placeholder="Out An Out Purist"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                              <Input
                                name="group1000001305"
                                placeholder="Focused Sensible"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                              <Input
                                name="group1000001306"
                                placeholder="Frugal Aspirant"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                              <Input
                                name="group1000001307"
                                placeholder="Perpetual Hoverer"
                                className="font-medium p-0 placeholder:text-black-900_d8 text-left text-sm w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="blue_50"
                                size="lg"
                                variant="fill"
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[81%] md:w-full">
                            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[86%] md:w-full">
                                <div className="flex md:flex-col flex-row gap-[11px] items-start justify-start w-auto md:w-full">
                                  <List
                                    className="sm:flex-col flex-row gap-[11px] grid grid-cols-2 w-[33%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-sm w-full">
                                      <Text
                                        className="leading-[21.00px] my-0.5 text-black-900_d8 text-center text-sm"
                                        size="txtOutfitSemiBold14Black900d8"
                                      >
                                        <>
                                          Clarifying
                                          <br />
                                          Shampoo
                                        </>
                                      </Text>
                                    </div>
                                    <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-sm w-full">
                                      <Text
                                        className="leading-[21.00px] my-2.5 text-black-900_d8 text-center text-sm"
                                        size="txtOutfitSemiBold14Black900d8"
                                      >
                                        <>
                                          Neutralising
                                          <br />
                                          Shampoo
                                        </>
                                      </Text>
                                    </div>
                                  </List>
                                  <Button
                                    className="cursor-pointer font-semibold min-w-[122px] py-[34px] rounded-sm text-center text-sm"
                                    shape="round"
                                    color="indigo_100_02"
                                    variant="fill"
                                  >
                                    Chelating
                                  </Button>
                                  <List
                                    className="sm:flex-col flex-row gap-[11px] grid grid-cols-3 w-1/2 md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-sm w-full">
                                      <Text
                                        className="leading-[21.00px] text-black-900_d8 text-center text-sm"
                                        size="txtOutfitSemiBold14Black900d8"
                                      >
                                        <>
                                          Keratin
                                          <br />
                                          Shampoo
                                        </>
                                      </Text>
                                    </div>
                                    <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-sm w-full">
                                      <Text
                                        className="leading-[21.00px] my-[5px] text-black-900_d8 text-center text-sm"
                                        size="txtOutfitSemiBold14Black900d8"
                                      >
                                        <>
                                          Volumizing
                                          <br />
                                          Shampoo
                                        </>
                                      </Text>
                                    </div>
                                    <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-sm w-full">
                                      <Text
                                        className="leading-[21.00px] text-black-900_d8 text-center text-sm"
                                        size="txtOutfitSemiBold14Black900d8"
                                      >
                                        <>
                                          Dry
                                          <br />
                                          Shampoo
                                        </>
                                      </Text>
                                    </div>
                                  </List>
                                </div>
                                <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row gap-[11px] grid grid-cols-2 w-[33%] md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] w-auto">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        LM
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        PREM
                                      </Button>
                                    </div>
                                    <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] w-auto">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        LM
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        PREM
                                      </Button>
                                    </div>
                                  </List>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Button
                                      className="cursor-pointer font-medium min-w-[122px] rounded-sm text-center text-sm"
                                      shape="round"
                                      color="deep_purple_100"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      PREM
                                    </Button>
                                  </div>
                                  <List
                                    className="md:flex-1 sm:flex-col flex-row gap-[11px] grid grid-cols-3 w-1/2 md:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] w-auto">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        LM{" "}
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        PREM
                                      </Button>
                                    </div>
                                    <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] w-auto">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        LM
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        PREM
                                      </Button>
                                    </div>
                                    <div className="flex flex-row gap-1.5 items-start justify-start sm:ml-[0] w-auto">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        LM
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[58px] rounded-sm text-center text-sm"
                                        shape="round"
                                        color="deep_purple_100"
                                        size="2xl"
                                        variant="fill"
                                      >
                                        PREM
                                      </Button>
                                    </div>
                                  </List>
                                </div>
                              </div>
                              <div className="bg-indigo-A100_03 flex flex-col items-center justify-center p-[43px] md:px-10 sm:px-5 rounded-sm">
                                <Text
                                  className="mb-[33px] mt-9 text-center text-sm text-white-A700_d8"
                                  size="txtOutfitSemiBold14WhiteA700d8"
                                >
                                  Score
                                </Text>
                              </div>
                            </div>
                            <List
                              className="flex flex-col gap-[15px] items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560385.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_600_02"
                                  size="3xl"
                                  variant="fill"
                                >
                                  8.00
                                </Button>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384_gray_200_04.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384_gray_200_04.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384_gray_200_04.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384_gray_200_04.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_200_04"
                                  size="3xl"
                                  variant="fill"
                                >
                                  2.00
                                </Button>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560385.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_500_01"
                                  size="3xl"
                                  variant="fill"
                                >
                                  7.35
                                </Button>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560385.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_800_02"
                                  size="3xl"
                                  variant="fill"
                                >
                                  8.40
                                </Button>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560385.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_900_01"
                                  size="3xl"
                                  variant="fill"
                                >
                                  9.65
                                </Button>
                              </div>
                              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560384.svg"
                                  alt="frame1686560384"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560385.svg"
                                  alt="frame1686560385"
                                />
                                <div className="bg-gray-200_04 h-[68px] rounded-sm w-[14%]"></div>
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560386"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560386.svg"
                                  alt="frame1686560387"
                                />
                                <Img
                                  className="h-[68px] w-[122px]"
                                  src="images/img_frame1686560388.svg"
                                  alt="frame1686560388"
                                />
                                <Button
                                  className="cursor-pointer font-bold min-w-[122px] rounded-sm text-base text-center"
                                  shape="round"
                                  color="gray_500_01"
                                  size="3xl"
                                  variant="fill"
                                >
                                  7.33
                                </Button>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="absolute bg-white-A700 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto rounded-tr-[17px] shadow-bs5 w-full">
                  <Button
                    className="common-pointer border border-blue-500 border-solid cursor-pointer flex h-10 items-center justify-center ml-[1087px] mr-4 my-2.5 w-[150px]"
                    onClick={() => navigate("/productrecomendations")}
                    rightIcon={
                      <Img
                        className="h-6 ml-3"
                        src="images/img_icon_arrowright.svg"
                        alt="icon/ArrowRight"
                      />
                    }
                    shape="round"
                    color="blue_50"
                    size="md"
                    variant="fill"
                  >
                    <div className="text-[15px] text-center">Next</div>
                  </Button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhitespaceAnalysisPage;
