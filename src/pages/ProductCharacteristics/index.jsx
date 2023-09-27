import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Input, Text } from "components";

const ProductCharacteristicsPage = () => {
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
            <Sidebar className="!sticky !w-56 bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]">
              <div className="flex flex-col gap-2 items-start justify-start mt-7 w-auto">
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
                <div className="flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]">
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
                <div
                  className="common-pointer flex flex-col h-10 items-start justify-start px-4 shadow-bs1 w-[220px]"
                  onClick={() => navigate("/whitespaceanalysis")}
                >
                  <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_menu.svg"
                        alt="menu"
                      />
                      <Text
                        className="text-[15px] text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
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
              <div className="bg-light_blue-50 flex flex-col items-start justify-start px-4 shadow-bs1 w-[220px]">
                <div className="flex flex-col items-center justify-start py-2 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="text-base text-blue-500 w-auto"
                      size="txtOutfitMedium16"
                    >
                      Product Characteristics
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[329px] px-4 shadow-bs1 w-auto">
                <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconlogout.svg"
                      alt="iconlogout"
                    />
                    <a
                      href="javascript:"
                      className="text-base text-gray-900_01 w-auto"
                    >
                      <Text size="txtOutfitRegular16Gray90001">Logout</Text>
                    </a>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[27px] items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="pageheaderlegac"
                  placeholder="Product Characteristics"
                  className="!placeholder:text-black-900_d8 !text-black-900_d8 font-medium md:h-auto p-0 sm:h-auto text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <Img
                          className="h-[230px] md:h-auto object-cover w-[74px]"
                          src="images/img_bitaeskandari.png"
                          alt="bitaeskandari"
                        />
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Clarifying Shampoo
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-[17%]">
                          <Img
                            className="h-[211px] md:h-auto object-cover w-full"
                            src="images/img_screenshot2023.png"
                            alt="screenshot2023"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[37px] items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Neutralising Shampoo
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-[17%]">
                          <Img
                            className="h-[215px] md:h-auto object-cover w-full"
                            src="images/img_screenshot2023_215x57.png"
                            alt="screenshot2023"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Chelating
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-[17%]">
                          <Img
                            className="h-[211px] md:h-auto object-cover w-full"
                            src="images/img_screenshot2023.png"
                            alt="screenshot2023"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Keratin Shampoo
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-[17%]">
                          <Img
                            className="h-[215px] md:h-auto object-cover w-full"
                            src="images/img_screenshot2023_215x57.png"
                            alt="screenshot2023"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Volumizing Shampoo
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-1 flex-col h-[283px] md:h-auto items-center justify-start px-3 py-4 rounded-lg w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-row gap-6 items-center justify-start w-auto">
                        <Img
                          className="h-[230px] md:h-auto object-cover w-[74px]"
                          src="images/img_bitaeskandari.png"
                          alt="bitaeskandari"
                        />
                        <div className="flex flex-col gap-4 items-start justify-center w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-indigo-500_01 text-xl"
                                size="txtOutfitSemiBold20Indigo50001"
                              >
                                Dry Shampoo
                              </Text>
                              <Img
                                className="h-5 w-5"
                                src="images/img_iconedit.svg"
                                alt="iconedit"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Basic
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row gap-[25px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Aroma
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Scalp
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[22px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Volume
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Packsize
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Price
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-gray-100_03 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                              <Text
                                className="text-black-900 text-sm w-auto"
                                size="txtOutfitMedium14Black900"
                              >
                                Premium
                              </Text>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Dry
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Softness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Stickiness
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Oil
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-9 items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700 text-xs"
                                      size="txtOutfitRegular12Gray700"
                                    >
                                      Lather
                                    </Text>
                                    <div className="h-4 px-2 py-0.5 relative w-11">
                                      <div className="absolute bg-blue-100_01 h-[13px] inset-[0] m-auto rounded-md w-full"></div>
                                      <Text
                                        className="absolute h-full inset-[0] m-auto text-indigo-500_01 text-xs w-max"
                                        size="txtOutfitRegular12Indigo50001"
                                      >
                                        9.1
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ProductCharacteristicsPage;
