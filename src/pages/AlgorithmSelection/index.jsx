import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import AlgorithmSelectionColumndescriptionTwo from "components/AlgorithmSelectionColumndescriptionTwo";

const kMeansOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const agglomerativeHierarchicalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dbScanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AlgorithmSelectionPage = () => {
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
                <div className="bg-light_blue-50 flex flex-col items-start justify-start px-4 shadow-bs1 w-auto">
                  <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_algorithm11_blue_500.svg"
                        alt="algorithmEleven"
                      />
                      <Text
                        className="text-base text-blue-500 w-auto"
                        size="txtOutfitMedium16"
                      >
                        Algorithm Section
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
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
                        className="text-base text-gray-600 w-auto"
                        size="txtOutfitRegular16Gray600"
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
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] mr-[131px] mt-[340px] px-4 shadow-bs1 w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-5 w-full"></div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="pageheaderlegac"
                  placeholder="Algorithm Selection"
                  className="!placeholder:text-black-900_d8 !text-black-900_d8 font-medium md:h-auto p-0 sm:h-auto text-left text-xl w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[19px] w-[97%] md:w-full">
                <Text
                  className="ml-1 md:ml-[0] text-base text-gray-700"
                  size="txtOutfitRegular16Gray700"
                >
                  Please Select the Algorithm to run the Clustering
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
                      <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col items-center justify-center rounded w-full">
                        <div className="flex flex-col items-center justify-start mt-[11px] w-[94%] md:w-full">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto">
                            <div className="flex flex-row items-start justify-between w-full">
                              <SelectBox
                                className="sm:flex-1 font-medium font-outfit text-blue-A200_01 text-left text-sm w-[23%] sm:w-full"
                                placeholderClassName="text-blue-A200_01"
                                indicator={
                                  <Img
                                    className="h-[18px] w-[18px]"
                                    src="images/img_icon_caretdown.svg"
                                    alt="icon/CaretDown"
                                  />
                                }
                                isMulti={false}
                                name="frame1686560283"
                                options={kMeansOptionsList}
                                isSearchable={false}
                                placeholder="KMeans"
                                size="xs"
                              />
                              <Text
                                className="bg-indigo-A200_01 justify-center px-1.5 rounded-[1px] text-center text-shadow-ts text-sm text-white-A700 w-auto"
                                size="txtRobotoRegular14"
                              >
                                Run
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start w-auto">
                              <AlgorithmSelectionColumndescriptionTwo
                                className="flex flex-col items-start justify-start pb-[19.73px] w-[355px]"
                                descriptionTwo="Init Method"
                              />
                              <AlgorithmSelectionColumndescriptionTwo
                                className="flex flex-col items-start justify-start pb-[19.73px] w-[355px]"
                                descriptionTwo="Cluster Range"
                              />
                              <AlgorithmSelectionColumndescriptionTwo
                                className="flex flex-col items-start justify-start pb-[19.73px] w-[355px]"
                                title="10"
                                computerimage="images/img_computer.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-col items-center justify-start mb-[25px] mt-[3px] p-[11px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-end p-2.5 rounded-sm w-full">
                                  <div className="flex flex-col items-start justify-start mt-[5px] w-[98%] md:w-full">
                                    <Text
                                      className="text-gray-900_01 text-sm"
                                      size="txtOutfitMedium14Gray90001"
                                    >
                                      Elbow Graph
                                    </Text>
                                    <div className="flex flex-row gap-[13px] items-start justify-between mt-2.5 w-full">
                                      <Text
                                        className="mt-[46px] rotate-[90deg] text-gray-700_a2 text-xs"
                                        size="txtOutfitRegular12Gray700a2"
                                      >
                                        WCSS
                                      </Text>
                                      <div className="md:h-[140px] h-[145px] relative w-[93%]">
                                        <div className="md:h-[140px] h-[145px] m-auto w-full">
                                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                            <div className="flex flex-row items-center justify-evenly w-full">
                                              <div className="flex flex-col gap-[21px] items-end justify-start w-auto">
                                                <Text
                                                  className="text-[10px] text-gray-700_03 text-right tracking-[-0.11px] w-auto"
                                                  size="txtOutfitRegular10"
                                                >
                                                  250K
                                                </Text>
                                                <Text
                                                  className="text-[10px] text-gray-700_03 text-right tracking-[-0.11px] w-auto"
                                                  size="txtOutfitRegular10"
                                                >
                                                  200K
                                                </Text>
                                                <Text
                                                  className="text-[10px] text-gray-700_03 text-right tracking-[-0.11px] w-auto"
                                                  size="txtOutfitRegular10"
                                                >
                                                  150K
                                                </Text>
                                                <Text
                                                  className="text-[10px] text-gray-700_03 text-right tracking-[-0.11px] w-auto"
                                                  size="txtOutfitRegular10"
                                                >
                                                  100k
                                                </Text>
                                                <Text
                                                  className="text-[10px] text-gray-700_03 text-right tracking-[-0.11px] w-auto"
                                                  size="txtOutfitRegular10"
                                                >
                                                  50k
                                                </Text>
                                              </div>
                                              <Img
                                                className="h-32 w-[275px]"
                                                src="images/img_chartlines.svg"
                                                alt="chartlines"
                                              />
                                            </div>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[3%] w-[84%]">
                                            <Text
                                              className="text-[10px] text-center text-gray-700_03 tracking-[-0.11px]"
                                              size="txtOutfitRegular10"
                                            >
                                              3
                                            </Text>
                                            <Text
                                              className="text-[10px] text-center text-gray-700_03 tracking-[-0.11px]"
                                              size="txtOutfitRegular10"
                                            >
                                              4
                                            </Text>
                                            <Text
                                              className="text-[10px] text-center text-gray-700_03 tracking-[-0.11px]"
                                              size="txtOutfitRegular10"
                                            >
                                              6
                                            </Text>
                                            <Text
                                              className="text-[10px] text-center text-gray-700_03 tracking-[-0.11px]"
                                              size="txtOutfitRegular10"
                                            >
                                              8
                                            </Text>
                                            <Text
                                              className="text-[10px] text-center text-gray-700_03 tracking-[-0.11px]"
                                              size="txtOutfitRegular10"
                                            >
                                              10
                                            </Text>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-32 inset-y-[0] my-auto right-[1%]"
                                          src="images/img_line.svg"
                                          alt="line"
                                        />
                                      </div>
                                    </div>
                                    <Text
                                      className="md:ml-[0] ml-[152px] mt-5 text-gray-700_a2 text-xs"
                                      size="txtOutfitRegular12Gray700a2"
                                    >
                                      No of Cluster
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <AlgorithmSelectionColumndescriptionTwo
                              className="flex flex-col h-10 md:h-auto items-start justify-start pb-[13.52px] w-[131px]"
                              descriptionTwo="# of Cluster"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col md:gap-10 gap-[162px] items-center justify-start rounded w-full">
                        <div className="flex flex-col items-start justify-start mt-[11px] w-auto">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto">
                            <div className="flex flex-row items-center justify-between w-full">
                              <SelectBox
                                className="sm:flex-1 font-medium font-outfit text-blue-A200_01 text-left text-sm w-[57%] sm:w-full"
                                placeholderClassName="text-blue-A200_01"
                                indicator={
                                  <Img
                                    className="h-[18px] w-[18px]"
                                    src="images/img_icon_caretdown.svg"
                                    alt="icon/CaretDown"
                                  />
                                }
                                isMulti={false}
                                name="frame1686560283_One"
                                options={agglomerativeHierarchicalOptionsList}
                                isSearchable={false}
                                placeholder="Agglomerative Hierarchical"
                                size="xs"
                              />
                              <Text
                                className="bg-indigo-A200_01 justify-center px-1.5 rounded-[1px] text-center text-shadow-ts text-sm text-white-A700 w-auto"
                                size="txtRobotoRegular14"
                              >
                                Run
                              </Text>
                            </div>
                            <AlgorithmSelectionColumndescriptionTwo
                              className="flex flex-col items-start justify-start pb-[19.73px] w-[356px]"
                              descriptionTwo="Clustering Method"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-col items-center justify-start mb-[25px] p-[11px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col items-center justify-start p-3 rounded-sm w-full">
                                  <div className="flex flex-col gap-[15px] justify-start my-[3px] w-full">
                                    <Text
                                      className="text-gray-900_01 text-sm"
                                      size="txtOutfitMedium14Gray90001"
                                    >
                                      Dendrogram
                                    </Text>
                                    <div className="flex flex-row gap-2 items-start justify-end md:ml-[0] ml-[35px] w-[90%] md:w-full">
                                      <div className="flex flex-col gap-[15px] items-start justify-start">
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          25
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          20
                                        </Text>
                                        <Text
                                          className="md:ml-[0] ml-[3px] text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          15
                                        </Text>
                                        <Text
                                          className="ml-0.5 md:ml-[0] text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          10
                                        </Text>
                                        <Text
                                          className="ml-1.5 md:ml-[0] text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          5
                                        </Text>
                                        <Text
                                          className="md:ml-[0] ml-[5px] text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <div className="flex flex-col gap-3 items-center justify-start mt-[5px] w-[94%]">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[140px] items-center justify-start px-[7px] w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group6.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[140px]"
                                            src="images/img_group1000001271.svg"
                                            alt="group1000001271"
                                          />
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-[99%] md:w-full">
                                          <Text
                                            className="text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (7)
                                          </Text>
                                          <Text
                                            className="ml-[7px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (8)
                                          </Text>
                                          <Text
                                            className="ml-[7px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            41
                                          </Text>
                                          <Text
                                            className="ml-[9px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (5)
                                          </Text>
                                          <Text
                                            className="ml-[5px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (10)
                                          </Text>
                                          <Text
                                            className="ml-[5px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (7)
                                          </Text>
                                          <Text
                                            className="ml-1.5 text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (4)
                                          </Text>
                                          <Text
                                            className="ml-[7px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (8)
                                          </Text>
                                          <Text
                                            className="ml-[31px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (9)
                                          </Text>
                                          <Text
                                            className="ml-1.5 text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (15)
                                          </Text>
                                          <Text
                                            className="ml-1.5 text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (5)
                                          </Text>
                                          <Text
                                            className="ml-[7px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (7)
                                          </Text>
                                          <Text
                                            className="ml-[5px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (4)
                                          </Text>
                                          <Text
                                            className="ml-[3px] text-[8px] text-center text-gray-700_03 tracking-[-0.20px]"
                                            size="txtOutfitRegular8"
                                          >
                                            (22 x 15 x 23)
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <AlgorithmSelectionColumndescriptionTwo
                              className="flex flex-col h-10 md:h-auto items-start justify-start pb-[13.52px] w-[131px]"
                              descriptionTwo="# of Cluster"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-black-900_28 border-solid flex flex-col md:gap-10 gap-[162px] items-center justify-start rounded w-full">
                        <div className="flex flex-col items-start justify-start mt-[11px] w-auto">
                          <div className="flex flex-col gap-6 items-start justify-start w-auto">
                            <div className="flex flex-row items-start justify-between w-full">
                              <SelectBox
                                className="sm:flex-1 font-medium font-outfit text-blue-A200_01 text-left text-sm w-[24%] sm:w-full"
                                placeholderClassName="text-blue-A200_01"
                                indicator={
                                  <Img
                                    className="h-[18px] w-[18px]"
                                    src="images/img_icon_caretdown.svg"
                                    alt="icon/CaretDown"
                                  />
                                }
                                isMulti={false}
                                name="frame1686560283_Two"
                                options={dbScanOptionsList}
                                isSearchable={false}
                                placeholder="DB Scan"
                                size="xs"
                              />
                              <Text
                                className="bg-indigo-A200_01 justify-center px-1.5 rounded-[1px] text-center text-shadow-ts text-sm text-white-A700 w-auto"
                                size="txtRobotoRegular14"
                              >
                                Run
                              </Text>
                            </div>
                            <AlgorithmSelectionColumndescriptionTwo
                              className="flex flex-col items-start justify-start pb-[19.73px] w-[356px]"
                              descriptionTwo="Param 1"
                              title="8"
                              computerimage="images/img_computer.svg"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-100_01 flex flex-col items-center justify-start mb-[25px] p-[11px] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="bg-white-A700 border border-black-900_0f border-solid md:h-[169px] h-[236px] p-2.5 relative rounded-sm w-full">
                                    <div className="absolute bottom-[11%] h-[169px] right-[4%] w-[78%]">
                                      <Img
                                        className="absolute h-[168px] inset-[0] justify-center m-auto"
                                        src="images/img_group1000001231.svg"
                                        alt="group1000001231"
                                      />
                                      <Img
                                        className="absolute h-[169px] inset-[0] m-auto w-[260px]"
                                        src="images/img_chartlines_blue_500.svg"
                                        alt="chartlines_One"
                                      />
                                    </div>
                                    <div className="absolute md:h-[151px] h-[210px] inset-[0] justify-center m-auto w-[92%]">
                                      <div className="absolute bottom-[3%] flex flex-col gap-2.5 items-end justify-end left-[10%] w-auto">
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          7K
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          6K
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px] w-auto"
                                          size="txtOutfitRegular10"
                                        >
                                          5k
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px] w-auto"
                                          size="txtOutfitRegular10"
                                        >
                                          4k
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px] w-auto"
                                          size="txtOutfitRegular10"
                                        >
                                          3k
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px] w-auto"
                                          size="txtOutfitRegular10"
                                        >
                                          2k
                                        </Text>
                                        <Text
                                          className="text-[10px] text-gray-700_03 text-right tracking-[-0.20px] w-auto"
                                          size="txtOutfitRegular10"
                                        >
                                          1k
                                        </Text>
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-row items-center justify-between right-[0] w-[83%]">
                                        <Text
                                          className="text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          0
                                        </Text>
                                        <Text
                                          className="text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          1K
                                        </Text>
                                        <Text
                                          className="text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          2k
                                        </Text>
                                        <Text
                                          className="text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          3k
                                        </Text>
                                        <Text
                                          className="h-[13px] text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          4K
                                        </Text>
                                        <Text
                                          className="text-[10px] text-center text-gray-700_03 tracking-[-0.20px]"
                                          size="txtOutfitRegular10"
                                        >
                                          5K
                                        </Text>
                                      </div>
                                      <Text
                                        className="absolute left-[0] rotate-[90deg] text-gray-700_a2 text-xs top-[36%]"
                                        size="txtOutfitRegular12Gray700a2"
                                      >
                                        WCSS
                                      </Text>
                                      <Text
                                        className="absolute left-[0] text-gray-900_01 text-sm top-[0]"
                                        size="txtOutfitMedium14Gray90001"
                                      >
                                        EPS Curve
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-4 grid grid-cols-2 w-[79%]"
                                orientation="horizontal"
                              >
                                <AlgorithmSelectionColumndescriptionTwo
                                  className="flex flex-col h-10 md:h-auto items-start justify-start pb-[13.52px] w-[131px]"
                                  descriptionTwo="EPS Value"
                                />
                                <AlgorithmSelectionColumndescriptionTwo
                                  className="flex flex-col h-10 md:h-auto items-start justify-start pb-[13.52px] w-[131px]"
                                  descriptionTwo="Min Samples"
                                />
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="bg-white-A700 flex items-center justify-center mt-11 rounded-tr-[16px] shadow-bs5 w-full">
                <Button
                  className="common-pointer border border-blue-500 border-solid cursor-pointer flex h-10 items-center justify-center mb-2 ml-[1026px] mr-4 mt-3 w-[174px]"
                  onClick={() => navigate("/clusteranalysis")}
                  rightIcon={
                    <Img
                      className="h-6 mb-px ml-3"
                      src="images/img_icon_arrowright.svg"
                      alt="icon/ArrowRight"
                    />
                  }
                  shape="round"
                  color="blue_50"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-center">Cluster Analysis</div>
                </Button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgorithmSelectionPage;
