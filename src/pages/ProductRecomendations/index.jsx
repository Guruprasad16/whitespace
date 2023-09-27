import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const ProductRecomendationsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-outfit items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
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
                <Button
                  className="common-pointer cursor-pointer flex h-10 items-center justify-center min-w-[224px] w-[220px]"
                  onClick={() => navigate("/whitespaceanalysis")}
                  leftIcon={
                    <Img
                      className="h-5 mr-2"
                      src="images/img_fi11181999_blue_500.svg"
                      alt="fi_11181999"
                    />
                  }
                  shape="square"
                  color="light_blue_50"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-[15px] text-left">
                    Product Recommendations
                  </div>
                </Button>
              </div>
              <Text
                className="border-gray-300 border-solid border-t mt-8 pb-2.5 pl-[11px] sm:pr-5 pr-[35px] pt-[26px] text-gray-900_01 text-sm"
                size="txtOutfitSemiBold14"
              >
                Master Data
              </Text>
              <div
                className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-[220px]"
                onClick={() => navigate("/productcharacteristics")}
              >
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
            <div className="flex flex-1 flex-col gap-[18px] items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="pageheaderlegac"
                  placeholder="Product Recommendations"
                  className="!placeholder:text-black-900_d8 !text-black-900_d8 font-medium md:h-auto p-0 sm:h-auto text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
                    <div className="bg-white-A700 flex flex-col gap-[38px] items-center justify-start pb-[137px] rounded-bl rounded-br rounded-tl-[20px] rounded-tr-[20px] shadow-bs6 w-full">
                      <div className="bg-gradient2  flex flex-col items-center justify-end p-2.5 rounded-[20px] w-full">
                        <div className="flex flex-col items-center justify-start w-[53%] md:w-full">
                          <div className="flex flex-col gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-[106px] md:h-auto rounded-[50%] w-[106px]"
                              src="images/img_ellipse65_106x106.png"
                              alt="ellipseSixtyFive"
                            />
                            <Text
                              className="text-white-A700 text-xl w-auto"
                              size="txtOutfitSemiBold20WhiteA700"
                            >
                              Nurturing Optimist
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Segment Characteristic
                          </Text>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Self-obsessed abut their looks
                            </Text>
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Needs continuous validation of their good looks
                            </Text>
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Highly affluent
                            </Text>
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Moderate affinity towards trial of new products
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Functional Need
                          </Text>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Nourishing and gentle care
                            </Text>
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Deposit removal
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Emotional Need
                          </Text>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-gray-700_e5 text-sm w-auto"
                              size="txtOutfitRegular14Gray700e5"
                            >
                              Seeks emotional well-being
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[18px] rounded shadow-bs6 w-[70%] md:w-full">
                    <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-[65%] md:w-full">
                        <div className="flex flex-col items-center justify-start mb-0.5">
                          <Text
                            className="text-base text-black-900"
                            size="txtOutfitMedium16Black900"
                          >
                            Product Parameter
                          </Text>
                        </div>
                        <Text
                          className="mt-0.5 text-base text-black-900"
                          size="txtOutfitMedium16Black900"
                        >
                          Price Point
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start ml-1 md:ml-[0] w-auto md:w-full">
                        <div className="flex flex-col items-center justify-start w-[43%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <div className="md:h-[263px] h-[295px] relative w-full">
                              <div className="absolute md:h-[263px] h-[295px] inset-[0] justify-center m-auto w-[94%]">
                                <div className="absolute md:h-[263px] h-[290px] inset-[0] justify-center m-auto w-[290px]">
                                  <div className="bg-indigo-500_5e h-[263px] m-auto rounded-[131px] w-[263px]"></div>
                                  <div className="absolute bg-indigo-500_5e md:h-[233px] h-[290px] inset-[0] justify-center m-auto pb-[26px] sm:px-5 px-[26px] rounded-[50%] w-[290px]">
                                    <div className="absolute md:h-[233px] h-[259px] inset-x-[0] mx-auto top-[1%] w-[82%]">
                                      <div className="absolute bg-indigo-500_5e bottom-[0] flex flex-col h-[236px] inset-x-[0] items-center justify-end mx-auto p-2 rounded-[50%] w-[236px]">
                                        <div className="bg-indigo-500_5e flex flex-col h-[210px] items-center justify-end mt-[7px] p-[26px] sm:px-5 rounded-[50%] w-[210px]">
                                          <div className="bg-indigo-500_5f flex flex-col h-[158px] items-center justify-start p-6 sm:px-5 rounded-[50%] w-[158px]">
                                            <div className="bg-indigo-500_63 flex flex-col h-[110px] items-center justify-start p-[21px] sm:px-5 rounded-[50%] w-[110px]">
                                              <div className="bg-indigo-100_63 flex flex-col h-[68px] items-center justify-start p-[19px] rounded-[50%] w-[68px]">
                                                <div className="bg-indigo-200_63 h-[30px] rounded-[50%] w-[30px]"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[62px] h-[227px] justify-start left-[6%] p-2 top-[0] w-4/5"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group90.svg')",
                                        }}
                                      >
                                        <div className="bg-orange-600 h-2 md:ml-[0] ml-[152px] mr-[9px] mt-11 rounded-[50%] w-2"></div>
                                        <div className="bg-deep_orange-400 h-2 mb-[86px] md:ml-[0] ml-[161px] rounded-[50%] w-2"></div>
                                      </div>
                                    </div>
                                    <div className="absolute bg-indigo-A100_04 h-2 left-[44%] rounded-[50%] top-[0] w-2"></div>
                                    <div className="absolute bottom-[19%] flex flex-row items-start justify-between left-[12%] w-[68%]">
                                      <div className="flex flex-col md:gap-10 gap-[105px] justify-start">
                                        <div className="bg-indigo-500_01 h-2 mr-[109px] rounded-[50%] w-2"></div>
                                        <div className="flex flex-row items-center justify-between ml-2 md:ml-[0] w-[93%] md:w-full">
                                          <div className="bg-blue-200_02 h-2 rounded-[50%] w-2"></div>
                                          <div className="bg-lime-900_01 h-2 rounded-[50%] w-2"></div>
                                        </div>
                                      </div>
                                      <div className="bg-green-A400 h-2 mb-[19px] mt-[93px] rounded-[50%] w-2"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0]">
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    8
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    7
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    6
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    5
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    4
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    3
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    2
                                  </Text>
                                  <Text
                                    className="text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    1
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-gray-600_03 text-xs"
                                    size="txtOutfitLight12"
                                  >
                                    0
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                                <div className="flex flex-col justify-start w-full">
                                  <Text
                                    className="md:ml-[0] ml-[70px] text-gray-700_04 text-xs"
                                    size="txtOutfitMedium12Gray70004"
                                  >
                                    Aroma 7.9
                                  </Text>
                                  <Text
                                    className="md:ml-[0] ml-[230px] mt-[41px] text-gray-700_04 text-xs"
                                    size="txtOutfitMedium12Gray70004"
                                  >
                                    Bubble 5.1
                                  </Text>
                                  <div className="flex flex-row items-start justify-between mt-12 w-full">
                                    <Text
                                      className="mb-2 text-gray-700_04 text-xs"
                                      size="txtOutfitMedium12Gray70004"
                                    >
                                      Scalp 5.3
                                    </Text>
                                    <Text
                                      className="mt-2 text-gray-700_04 text-xs"
                                      size="txtOutfitMedium12Gray70004"
                                    >
                                      Viscosity 3.2
                                    </Text>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[247px] mt-[68px] text-gray-700_04 text-xs"
                                    size="txtOutfitMedium12Gray70004"
                                  >
                                    pH 6.0
                                  </Text>
                                  <div className="flex flex-row gap-[39px] items-start justify-start md:ml-[0] ml-[17px] mt-[11px] w-3/5 md:w-full">
                                    <Text
                                      className="mb-1 text-gray-700_04 text-xs"
                                      size="txtOutfitMedium12Gray70004"
                                    >
                                      Lather 6.8
                                    </Text>
                                    <Text
                                      className="mt-1 text-gray-700_04 text-xs"
                                      size="txtOutfitMedium12Gray70004"
                                    >
                                      Oil Removing 4.7
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gray-400 h-[324px] md:h-px md:w-full w-px" />
                        <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
                          <div className="flex flex-col gap-1.5 justify-start w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start md:ml-[0] ml-[126px] p-0.5"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1000001387.svg')",
                              }}
                            >
                              <Text
                                className="mb-[3px] mr-1 text-white-A700 text-xs"
                                size="txtOutfitRegular12"
                              >
                                $21.99
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="h-[33px] relative w-full">
                                <div className="absolute h-[5px] inset-x-[0] mx-auto top-[15%] w-full">
                                  <Line className="bg-blue_gray-100 h-[5px] m-auto rounded-sm w-full" />
                                  <Line className="absolute bg-indigo-A200 h-[5px] inset-[0] justify-center m-auto rounded-sm w-[74%]" />
                                </div>
                                <div className="absolute flex flex-row h-full inset-[0] items-start justify-between m-auto w-[77%]">
                                  <Text
                                    className="mt-[17px] text-black-900 text-xs"
                                    size="txtOutfitMedium12Black900"
                                  >
                                    $1
                                  </Text>
                                  <div className="bg-amber-600 flex flex-col h-[18px] items-center justify-start mb-[15px] p-[3px] rounded-[50%] w-[18px]">
                                    <div className="bg-white-A700 h-[11px] rounded-[5px] w-[11px]"></div>
                                  </div>
                                  <Text
                                    className="mt-[17px] text-black-900 text-xs"
                                    size="txtOutfitMedium12Black900"
                                  >
                                    $50
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between md:ml-[0] ml-[30px] mt-[3px] w-[83%] md:w-full">
                                <Text
                                  className="mt-1 text-gray-700_e5 text-xs"
                                  size="txtOutfitRegular12Gray700e5"
                                >
                                  Value
                                </Text>
                                <Text
                                  className="mb-1 text-gray-700_e5 text-xs"
                                  size="txtOutfitRegular12Gray700e5"
                                >
                                  Premium
                                </Text>
                              </div>
                              <Text
                                className="mt-12 text-gray-700_04 text-sm"
                                size="txtOutfitRegular14Gray70004"
                              >
                                <span className="text-gray-700_04 font-outfit text-left font-normal">
                                  Recommended Price Point:
                                </span>
                                <span className="text-gray-700_04 font-outfit text-left font-normal">
                                  {" "}
                                </span>
                                <span className="text-indigo-400 font-outfit text-left text-xl font-semibold">
                                  $21.99{" "}
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-full">
                        <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[99%] md:w-full">
                            <Text
                              className="md:mt-0 mt-2.5 text-base text-black-900"
                              size="txtOutfitMedium16Black900"
                            >
                              Generative AI Brand Images
                            </Text>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[145px] md:ml-[0] ml-[242px]"
                              leftIcon={
                                <Img
                                  className="h-5 mr-1 my-px"
                                  src="images/img_download.svg"
                                  alt="download"
                                />
                              }
                              shape="round"
                              color="blue_500"
                              size="sm"
                              variant="outline"
                            >
                              <div className="text-base text-center">
                                Download All
                              </div>
                            </Button>
                            <Button
                              className="border border-blue-500 border-solid cursor-pointer flex items-center justify-center min-w-[145px] md:ml-[0] ml-[17px]"
                              leftIcon={
                                <Img
                                  className="h-5 mb-0.5 mr-1"
                                  src="images/img_collagen_1.svg"
                                  alt="collagen 1"
                                />
                              }
                              shape="round"
                              color="blue_A200_01"
                              size="md"
                              variant="fill"
                            >
                              <div className="text-base text-center">
                                Regenerate
                              </div>
                            </Button>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_iconright_gray_700.svg"
                              alt="iconright"
                            />
                            <List
                              className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-[9px] items-end justify-start sm:ml-[0] w-auto">
                                <Img
                                  className="h-[175px] md:h-auto object-cover rounded-bl rounded-br w-[183px] sm:w-full"
                                  src="images/img_rectangle39525.png"
                                  alt="rectangle39525"
                                />
                                <div className="flex flex-row gap-4 items-end justify-start w-auto">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_download_gray_700.svg"
                                    alt="download"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_edit.svg"
                                    alt="edit"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_iconvidfullscreenonicon.svg"
                                    alt="iconvidfullscre"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start sm:ml-[0] w-auto">
                                <Img
                                  className="h-[175px] md:h-auto object-cover rounded-bl rounded-br w-[183px] sm:w-full"
                                  src="images/img_rectangle39525_175x183.png"
                                  alt="rectangle39525"
                                />
                                <div className="flex flex-row gap-4 items-end justify-start w-auto">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_download_gray_700.svg"
                                    alt="download"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_edit.svg"
                                    alt="edit"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_iconvidfullscreenonicon.svg"
                                    alt="iconvidfullscre"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-end justify-start sm:ml-[0] w-auto">
                                <Img
                                  className="h-[175px] md:h-auto object-cover rounded-bl rounded-br w-[183px] sm:w-full"
                                  src="images/img_rectangle39525_1.png"
                                  alt="rectangle39525"
                                />
                                <div className="flex flex-row gap-4 items-end justify-start w-auto">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_download_gray_700.svg"
                                    alt="download"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_edit.svg"
                                    alt="edit"
                                  />
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_iconvidfullscreenonicon.svg"
                                    alt="iconvidfullscre"
                                  />
                                </div>
                              </div>
                            </List>
                            <Img
                              className="h-6 w-6"
                              src="images/img_iconright_gray_700_24x24.svg"
                              alt="iconright_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[11px] rounded shadow-bs6 w-full">
                  <div className="flex flex-col gap-[15px] items-end justify-start mt-2 w-[96%] md:w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtOutfitMedium16Black900"
                      >
                        Report
                      </Text>
                      <Button
                        className="border border-blue-500 border-solid cursor-pointer flex items-center justify-center min-w-[134px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1 my-0.5"
                            src="images/img_icon_download.svg"
                            alt="icon/Download"
                          />
                        }
                        shape="round"
                        color="blue_500"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-center">
                          Download{" "}
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start p-3 rounded-[3px] w-full">
                          <div className="flex flex-col items-center justify-start mb-[49px] mt-[5px] w-full">
                            <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[19%] md:w-full">
                                <div className="bg-blue-100 flex flex-col gap-[19px] justify-start pb-[21px] rounded-[1px] w-full">
                                  <div className="bg-blue-100 border-b border-blue-200_01 border-solid flex flex-col items-start justify-start p-1.5 rounded-tl-[1px] rounded-tr-[1px] w-full">
                                    <div className="flex flex-row gap-[72.47px] items-center justify-start my-[21px] w-auto">
                                      <Text
                                        className="text-[17.26px] text-indigo-800 w-auto"
                                        size="txtOutfitSemiBold1726"
                                      >
                                        Products
                                      </Text>
                                      <Img
                                        className="h-[17px] w-[17px]"
                                        src="images/img_iconcaretright.svg"
                                        alt="iconcaretright"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-row gap-[6.9px] items-center justify-start ml-1.5 md:ml-[0] w-auto">
                                    <Text
                                      className="text-[15.53px] text-indigo-800 w-auto"
                                      size="txtOutfitSemiBold1553"
                                    >
                                      Customer Segment
                                    </Text>
                                    <Img
                                      className="h-[17px] w-[17px]"
                                      src="images/img_arrowdown.svg"
                                      alt="arrowdown"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[12.94px] items-start justify-start w-auto sm:w-full">
                                  <Input
                                    name="group1000001302"
                                    placeholder="Self Obsessed Flamboyant"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="group1000001303"
                                    placeholder="Nonchalant Socialite"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="group1000001304"
                                    placeholder="Out An Out Purist"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="group1000001305"
                                    placeholder="Focused Sensible"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="group1000001306"
                                    placeholder="Frugal Aspirant"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                  <Input
                                    name="group1000001307"
                                    placeholder="Perpetual Hoverer"
                                    className="font-medium p-0 placeholder:text-black-900_d8 text-[12.08px] text-left w-full"
                                    wrapClassName="rounded-[1px] w-full"
                                    shape="round"
                                    color="blue_50"
                                    size="sm"
                                    variant="fill"
                                  ></Input>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[81%] md:w-full">
                                <div className="flex md:flex-col flex-row gap-2 items-center justify-between w-full">
                                  <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start w-[86%] md:w-full">
                                    <div className="flex md:flex-col flex-row gap-[9.49px] items-start justify-start w-auto md:w-full">
                                      <List
                                        className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 w-[33%] md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[1px] w-full">
                                          <Text
                                            className="leading-[18.00px] text-[12.08px] text-black-900_d8 text-center"
                                            size="txtOutfitSemiBold1208"
                                          >
                                            <>
                                              Clarifying
                                              <br />
                                              Shampoo
                                            </>
                                          </Text>
                                        </div>
                                        <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[18px] rounded-[1px] w-full">
                                          <Text
                                            className="leading-[18.00px] my-[7px] text-[12.08px] text-black-900_d8 text-center"
                                            size="txtOutfitSemiBold1208"
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
                                        className="cursor-pointer font-semibold min-w-[105px] py-[30px] rounded-[1px] text-[12.08px] text-center"
                                        color="indigo_100_02"
                                        variant="fill"
                                      >
                                        Chelating
                                      </Button>
                                      <List
                                        className="sm:flex-col flex-row gap-[9px] grid grid-cols-3 w-1/2 md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[1px] w-full">
                                          <Text
                                            className="leading-[18.00px] text-[12.08px] text-black-900_d8 text-center"
                                            size="txtOutfitSemiBold1208"
                                          >
                                            <>
                                              Keratin
                                              <br />
                                              Shampoo
                                            </>
                                          </Text>
                                        </div>
                                        <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[1px] w-full">
                                          <Text
                                            className="leading-[18.00px] my-[3px] text-[12.08px] text-black-900_d8 text-center"
                                            size="txtOutfitSemiBold1208"
                                          >
                                            <>
                                              Volumizing
                                              <br />
                                              Shampoo
                                            </>
                                          </Text>
                                        </div>
                                        <div className="bg-indigo-100_02 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[1px] w-full">
                                          <Text
                                            className="leading-[18.00px] text-[12.08px] text-black-900_d8 text-center"
                                            size="txtOutfitSemiBold1208"
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
                                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                      <List
                                        className="md:flex-1 sm:flex-col flex-row gap-[9px] grid grid-cols-2 w-[33%] md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-row gap-[5.18px] items-start justify-start sm:ml-[0] w-auto">
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            LM
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            PREM
                                          </Button>
                                        </div>
                                        <div className="flex flex-row gap-[5.18px] items-start justify-start sm:ml-[0] w-auto">
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            LM
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            PREM
                                          </Button>
                                        </div>
                                      </List>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Button
                                          className="cursor-pointer font-medium min-w-[105px] rounded-[1px] text-[12.08px] text-center"
                                          color="deep_purple_100"
                                          size="xl"
                                          variant="fill"
                                        >
                                          PREM
                                        </Button>
                                      </div>
                                      <List
                                        className="md:flex-1 sm:flex-col flex-row gap-[9px] grid grid-cols-3 w-1/2 md:w-full"
                                        orientation="horizontal"
                                      >
                                        <div className="flex flex-row gap-[5.18px] items-start justify-start sm:ml-[0] w-auto">
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            LM{" "}
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            PREM
                                          </Button>
                                        </div>
                                        <div className="flex flex-row gap-[5.18px] items-start justify-start sm:ml-[0] w-auto">
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            LM
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            PREM
                                          </Button>
                                        </div>
                                        <div className="flex flex-row gap-[5.18px] items-start justify-start sm:ml-[0] w-auto">
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            LM
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium h-[51px] rounded-[1px] text-[12.08px] text-center w-[50px]"
                                            color="deep_purple_100"
                                            size="xl"
                                            variant="fill"
                                          >
                                            PREM
                                          </Button>
                                        </div>
                                      </List>
                                    </div>
                                  </div>
                                  <div className="bg-indigo-A100_03 flex flex-col items-center justify-center p-[37px] sm:px-5 rounded-[1px]">
                                    <Text
                                      className="my-7 text-[12.08px] text-center text-white-A700_d8"
                                      size="txtOutfitSemiBold1208WhiteA700d8"
                                    >
                                      Score
                                    </Text>
                                  </div>
                                </div>
                                <List
                                  className="flex flex-col gap-3 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560385.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_600_02"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      8.00
                                    </Button>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384_gray_200_04.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384_gray_200_04.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384_gray_200_04.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384_gray_200_04.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_200_04"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      2.00
                                    </Button>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560385.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_500_01"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      7.35
                                    </Button>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560385.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_800_02"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      8.40
                                    </Button>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560385.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_900_01"
                                      size="2xl"
                                      variant="fill"
                                    >
                                      9.65
                                    </Button>
                                  </div>
                                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560384.svg"
                                      alt="frame1686560384"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560385.svg"
                                      alt="frame1686560385"
                                    />
                                    <div className="bg-gray-200_04 h-[58px] rounded-[1px] w-[14%]"></div>
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560386"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560386.svg"
                                      alt="frame1686560387"
                                    />
                                    <Img
                                      className="h-[58px] w-[105px]"
                                      src="images/img_frame1686560388.svg"
                                      alt="frame1686560388"
                                    />
                                    <Button
                                      className="cursor-pointer font-bold min-w-[105px] rounded-[1px] text-[13.8px] text-center"
                                      color="gray_500_01"
                                      size="2xl"
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

export default ProductRecomendationsPage;
