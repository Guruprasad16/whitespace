import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import ClusterAnalysisColumnalgorithmcounter from "components/ClusterAnalysisColumnalgorithmcounter";

const ClusterAnalysisPage = () => {
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
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Project Library
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Algorithm Section
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-light_blue-50 flex flex-col items-start justify-start px-4 shadow-bs1 w-auto">
                  <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconpiechart_blue_500.svg"
                        alt="iconpiechart"
                      />
                      <Text
                        className="text-base text-blue-500 w-auto"
                        size="txtOutfitMedium16"
                      >
                        Cluster Analysis
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
                  onClick={() => navigate("/algorithmselectionone")}
                >
                  <div className="flex flex-col items-center justify-start py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_targetaudience.svg"
                        alt="targetaudience"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Segment Characteristics
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
                      >
                        Whitespace Analysis
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-[15px] text-gray-600 w-auto"
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
              <div
                className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                      className="text-base text-gray-600 w-auto"
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
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-3.5 items-start justify-start pl-2.5 pt-2.5 w-full">
                <div className="flex flex-col items-start justify-end ml-3.5 md:ml-[0] pr-1 py-1 w-[16%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-0.5 w-auto">
                    <Text
                      className="text-black-900_d8 text-xl w-auto"
                      size="txtOutfitMedium20"
                    >
                      Cluster Analysis
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1192px] ml-3.5 md:ml-[0] pt-2 w-full">
                  <div className="flex md:flex-col flex-row gap-1 items-center justify-start w-auto md:w-full">
                    <ClusterAnalysisColumnalgorithmcounter className="flex flex-col items-center justify-start w-[135px]" />
                    <List
                      className="sm:flex-col flex-row gap-1 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[84%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-center w-[135px]">
                        <div className="flex flex-col h-[39px] md:h-auto items-center justify-center py-2">
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Algorithm 2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[135px]">
                        <div className="flex flex-col h-[39px] md:h-auto items-center justify-center py-2">
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Algorithm 3
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[135px]">
                        <div className="flex flex-col h-[39px] md:h-auto items-center justify-center py-2">
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Algorithm 4
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[135px]">
                        <div className="flex flex-col h-[39px] md:h-auto items-center justify-center py-2">
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Algorithm 5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[135px]">
                        <div className="flex flex-col h-[39px] md:h-auto items-center justify-center py-2">
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Algorithm 6
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="md:h-[1944px] h-[982px] sm:h-[983px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="bg-gray-100 flex md:flex-col flex-row gap-[25px] items-center justify-center p-1.5 shadow-bs5 w-full">
                      <Line className="bg-gray-400_01 h-[29px] md:h-px md:ml-[0] ml-[1016px] md:mt-0 my-1.5 md:w-full w-px" />
                      <Button
                        className="common-pointer border border-blue-500 border-solid cursor-pointer flex items-center justify-center mb-0.5 min-w-[142px] mr-5"
                        onClick={() => navigate("/algorithmselectionone")}
                        leftIcon={
                          <Img
                            className="h-5 mr-1 my-px"
                            src="images/img_personalization_1.svg"
                            alt="personalization 1"
                          />
                        }
                        shape="round"
                        color="blue_A200_01"
                        size="md"
                        variant="fill"
                      >
                        <div className="text-base text-center">Personalise</div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <List
                            className="flex flex-col gap-6 items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between my-0 w-full">
                              <div
                                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-72 items-start justify-start p-3 w-1/2 md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group1000001236.svg')",
                                }}
                              >
                                <div className="flex flex-col gap-[26px] items-start justify-start mb-[34px] mt-1.5 w-[92%] md:w-full">
                                  <Text
                                    className="text-base text-gray-900_01"
                                    size="txtOutfitMedium16Gray90001"
                                  >
                                    No. of Respondents{" "}
                                  </Text>
                                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-between ml-1 md:ml-[0] w-full">
                                    <div className="flex flex-col gap-3.5 items-center justify-start">
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 1
                                      </Text>
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 2
                                      </Text>
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 3
                                      </Text>
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 4
                                      </Text>
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 5
                                      </Text>
                                      <Text
                                        className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                        size="txtOutfitRegular12Gray70003"
                                      >
                                        Segment 6
                                      </Text>
                                    </div>
                                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[87%] sm:w-full">
                                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                                        <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                                          <div className="bg-indigo-A100_01 h-[21px] rounded-sm w-[93%]"></div>
                                          <Text
                                            className="text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            300
                                          </Text>
                                        </div>
                                        <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-between w-[98%] md:w-full">
                                          <div className="bg-orange-100 h-[21px] rounded-sm w-[92%]"></div>
                                          <Text
                                            className="sm:mt-0 mt-0.5 text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            250
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center justify-start w-[82%] md:w-full">
                                          <div className="bg-indigo-100_01 h-[21px] rounded-sm w-[91%]"></div>
                                          <Text
                                            className="text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            200
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[9px] items-start justify-start w-[62%] md:w-full">
                                          <div className="bg-teal-A100 h-[21px] rounded-sm w-[89%]"></div>
                                          <Text
                                            className="mt-0.5 text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            140
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[9px] items-start justify-start w-[39%] md:w-full">
                                          <div className="bg-amber-200_01 h-[21px] rounded-sm w-[85%]"></div>
                                          <Text
                                            className="h-[18px] mt-0.5 text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            90
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[9px] items-start justify-start w-[28%] md:w-full">
                                          <div className="bg-blue_gray-100_02 h-[21px] rounded-sm w-[79%]"></div>
                                          <Text
                                            className="mt-0.5 text-black-900_01 text-right text-sm"
                                            size="txtOutfitMedium14Black90001"
                                          >
                                            68
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-start justify-start p-3 rounded w-full">
                                  <div className="flex flex-col gap-[22px] items-start justify-start mb-[22px] mt-1.5 w-[91%] md:w-full">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtOutfitMedium16Gray90001"
                                    >
                                      Willingness to Switch
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-between ml-1 md:ml-[0] w-full">
                                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[13px] items-start justify-between w-4/5 sm:w-full">
                                        <Text
                                          className="sm:mt-0 mt-8 rotate-[90deg] text-gray-700 text-sm"
                                          size="txtOutfitRegular14"
                                        >
                                          % of Respondents
                                        </Text>
                                        <div className="flex flex-col items-center justify-start">
                                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                                            <div className="flex flex-col items-start justify-start">
                                              <Text
                                                className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                100
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-3.5 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                80
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                60
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-4 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                40
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[15px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                20
                                              </Text>
                                              <Text
                                                className="ml-3 md:ml-[0] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                0
                                              </Text>
                                            </div>
                                            <div className="h-[183px] md:h-[191px] mt-2 relative w-[92%]">
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-1.5 px-1.5 w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group1.svg')",
                                                }}
                                              >
                                                <div className="flex flex-col items-center justify-start mb-[17px] px-[5px] w-[96%] md:w-full">
                                                  <div className="flex flex-row gap-9 items-start justify-start w-auto">
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282.svg"
                                                      alt="group1000001282"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282.svg"
                                                      alt="group1000001281"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282.svg"
                                                      alt="group1000001283"
                                                    />
                                                    <div className="bg-blue-300 flex flex-col items-center justify-start pb-[121px] rounded-[1px] w-[7%]">
                                                      <div className="bg-blue-200_01 h-[19px] rounded-tl-[1px] rounded-tr-[1px] w-5"></div>
                                                      <div className="bg-blue-A100 h-5 w-5"></div>
                                                    </div>
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282.svg"
                                                      alt="group1000001285"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282.svg"
                                                      alt="group1000001286"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[93%]">
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 1
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 2
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 3
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 4
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 5
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 6
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-3 items-start justify-start sm:mt-0 mt-[39px] w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-400 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            Very likey
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-400_02 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            Not likely
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-light_blue-800 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            Won’t Mind
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row gap-4 items-center justify-between my-0 w-full">
                              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-start justify-start p-3 rounded w-full">
                                  <div className="flex flex-col gap-[11px] items-start justify-start mb-[22px] mt-1.5 w-[95%] md:w-full">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtOutfitMedium16Gray90001"
                                    >
                                      Spend Per month on Shampoo
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between ml-1 md:ml-[0] w-full">
                                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[13px] items-start justify-between sm:mt-0 mt-2.5 w-[76%] sm:w-full">
                                        <Text
                                          className="sm:mt-0 mt-8 rotate-[90deg] text-gray-700 text-sm"
                                          size="txtOutfitRegular14"
                                        >
                                          % of Respondents
                                        </Text>
                                        <div className="flex flex-col items-center justify-start">
                                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                                            <div className="flex flex-col items-start justify-start">
                                              <Text
                                                className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                100
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-3.5 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                80
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                60
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-4 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                40
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[15px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                20
                                              </Text>
                                              <Text
                                                className="ml-3 md:ml-[0] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                0
                                              </Text>
                                            </div>
                                            <div className="h-[183px] md:h-[191px] mt-2 relative w-[92%]">
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-1.5 px-1.5 w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group1.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-40 mb-[17px]"
                                                  src="images/img_bars_indigo_400.svg"
                                                  alt="bars"
                                                />
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[93%]">
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 1
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 2
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 3
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 4
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 5
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 6
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-400 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            {" "}
                                            More Than 500
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A200_01 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            400-500
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A100_03 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            300-400
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A100_02 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            200-300
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-100_02 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            100-200
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-deep_purple-100 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            less than 100
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-start justify-start p-3 rounded w-full">
                                  <div className="flex flex-col gap-[22px] items-start justify-start mb-[22px] mt-1.5 w-[85%] md:w-full">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtOutfitMedium16Gray90001"
                                    >
                                      Age Distribution
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between ml-1 md:ml-[0] w-[99%] md:w-full">
                                      <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-between w-[85%] sm:w-full">
                                        <Text
                                          className="sm:mt-0 mt-8 rotate-[90deg] text-gray-700 text-sm"
                                          size="txtOutfitRegular14"
                                        >
                                          % of Respondents
                                        </Text>
                                        <div className="flex flex-col items-center justify-start">
                                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                                            <div className="flex flex-col items-start justify-start">
                                              <Text
                                                className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                100
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-3.5 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                80
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                60
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-4 text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                40
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] mt-[15px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                20
                                              </Text>
                                              <Text
                                                className="ml-3 md:ml-[0] mt-[17px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                0
                                              </Text>
                                            </div>
                                            <div className="h-[183px] md:h-[191px] mt-2 relative w-[92%]">
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pb-1.5 px-1.5 w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group1.svg')",
                                                }}
                                              >
                                                <div className="flex flex-col items-center justify-start mb-[17px] px-[5px] w-[96%] md:w-full">
                                                  <div className="flex flex-row gap-9 items-start justify-start w-auto">
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_indigo_400.svg"
                                                      alt="group1000001282"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_indigo_400.svg"
                                                      alt="group1000001287"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_indigo_400.svg"
                                                      alt="group1000001288"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_indigo_400.svg"
                                                      alt="group1000001289"
                                                    />
                                                    <div className="bg-indigo-400 flex flex-col items-center justify-start pb-[95px] rounded-[1px] w-[7%]">
                                                      <div className="bg-indigo-100_02 h-[23px] rounded-tl-[1px] rounded-tr-[1px] w-full"></div>
                                                      <div className="bg-indigo-A100_02 h-[23px] w-full"></div>
                                                      <div className="bg-indigo-A100_03 h-2 w-full"></div>
                                                      <div className="bg-indigo-A200_01 h-[13px] w-full"></div>
                                                    </div>
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_indigo_400.svg"
                                                      alt="group1000001291"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[93%]">
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 1
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 2
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 3
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 4
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 5
                                                </Text>
                                                <Text
                                                  className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                  size="txtOutfitRegular12Gray70003"
                                                >
                                                  Seg 6
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-3.5 items-start justify-start sm:mt-0 mt-[7px] w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-400 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            500+
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A200_01 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            45-55
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A100_03 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            35-45
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-A100_02 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            25-35
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-indigo-100_02 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            15-25
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row gap-[15px] items-center justify-between my-0 w-full">
                              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-start justify-start p-3 rounded w-full">
                                  <div className="flex flex-col gap-[23px] items-start justify-start mb-[23px] mt-1 w-[87%] md:w-full">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtOutfitMedium16Gray90001"
                                    >
                                      Gender Distribution
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[31px] items-start justify-between w-full">
                                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[11px] items-start justify-between w-[83%] sm:w-full">
                                        <Text
                                          className="sm:mt-0 mt-9 rotate-[90deg] text-gray-700 text-sm"
                                          size="txtOutfitRegular14"
                                        >
                                          % of Respondents
                                        </Text>
                                        <div className="flex flex-col items-center justify-start">
                                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                                            <div className="flex flex-col gap-[13px] items-start justify-start">
                                              <Text
                                                className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                100
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                80
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                60
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                40
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                20
                                              </Text>
                                              <Text
                                                className="ml-3 md:ml-[0] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                0
                                              </Text>
                                            </div>
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[183px] items-center justify-start mt-[9px] px-1.5 w-[92%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group1.svg')",
                                              }}
                                            >
                                              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                                <Img
                                                  className="h-40"
                                                  src="images/img_bars_blue_300.svg"
                                                  alt="bars"
                                                />
                                                <div className="flex flex-row items-start justify-between mt-1 w-full">
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 1
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 2
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 3
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 4
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 5
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 6
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-3 items-start justify-start sm:mt-0 mt-10 w-[52px]">
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-300 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            Female
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-A100 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            Male
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-start justify-start p-3 rounded w-full">
                                  <div className="flex flex-col gap-[23px] items-start justify-start mb-[23px] mt-1 w-[90%] md:w-full">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtOutfitMedium16Gray90001"
                                    >
                                      Income Distribution
                                    </Text>
                                    <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between w-full">
                                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[11px] items-start justify-between w-4/5 sm:w-full">
                                        <Text
                                          className="sm:mt-0 mt-9 rotate-[90deg] text-gray-700 text-sm"
                                          size="txtOutfitRegular14"
                                        >
                                          % of Respondents
                                        </Text>
                                        <div className="flex flex-col items-center justify-start">
                                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                                            <div className="flex flex-col gap-[13px] items-start justify-start">
                                              <Text
                                                className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                100
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                80
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                60
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                40
                                              </Text>
                                              <Text
                                                className="md:ml-[0] ml-[5px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                20
                                              </Text>
                                              <Text
                                                className="ml-3 md:ml-[0] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                                size="txtOutfitRegular12Gray70003"
                                              >
                                                0
                                              </Text>
                                            </div>
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[183px] items-center justify-start mt-[9px] px-1.5 w-[92%]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group1.svg')",
                                              }}
                                            >
                                              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                                <div className="flex flex-col items-center justify-start px-[5px] w-full">
                                                  <div className="flex flex-row gap-9 items-start justify-start w-auto">
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_blue_a400.svg"
                                                      alt="group1000001282"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_blue_a400.svg"
                                                      alt="group1000001287"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_blue_a400.svg"
                                                      alt="group1000001288"
                                                    />
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_blue_a400.svg"
                                                      alt="group1000001289"
                                                    />
                                                    <div className="bg-blue-A400 flex flex-col items-center justify-start pb-[95px] rounded-[1px] w-[7%]">
                                                      <div className="bg-blue-100 h-[23px] rounded-tl-[1px] rounded-tr-[1px] w-full"></div>
                                                      <div className="bg-blue-200_01 h-[23px] w-full"></div>
                                                      <div className="bg-blue-300 h-2 w-full"></div>
                                                      <div className="bg-blue-A200_01 h-[13px] w-full"></div>
                                                    </div>
                                                    <Img
                                                      className="h-40 w-5"
                                                      src="images/img_group1000001282_blue_a400.svg"
                                                      alt="group1000001291"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex flex-row items-start justify-between mt-1 w-full">
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 1
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 2
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 3
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 4
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 5
                                                  </Text>
                                                  <Text
                                                    className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                                    size="txtOutfitRegular12Gray70003"
                                                  >
                                                    Seg 6
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-3.5 items-start justify-start sm:mt-0 mt-2 w-auto">
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-A400 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            100K +
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-A200_01 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            70K - 100K
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-300 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            50K - 70K
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-200_01 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs w-auto"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            25K - 50K
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                          <div className="bg-blue-100 h-2 rounded-[50%] w-2"></div>
                                          <Text
                                            className="text-gray-700 text-xs"
                                            size="txtOutfitRegular12Gray700"
                                          >
                                            25k
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[70px] right-[18%] top-[1%]"
                  src="images/img_detailsegmentview.svg"
                  alt="detailsegmentvi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClusterAnalysisPage;
