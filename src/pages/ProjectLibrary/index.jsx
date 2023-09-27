import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import ProjectLibraryColumn from "components/ProjectLibraryColumn";
import ProjectLibraryColumndivider from "components/ProjectLibraryColumndivider";
import ProjectLibraryPagination from "components/ProjectLibraryPagination";
import ProjectLibrarySearchbox from "components/ProjectLibrarySearchbox";

const ProjectLibraryPage = () => {
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
                      className="h-3.5 w-3.5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col h-12 md:h-auto items-center justify-center px-3">
                    <Img
                      className="h-3.5 w-3.5"
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-56 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs1 top-[0]">
              <div className="flex flex-col items-start justify-start mt-[812px] px-4 shadow-bs1 w-auto">
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
              <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-7 shadow-bs3 w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="bg-light_blue-50 flex flex-col items-start justify-start px-4 shadow-bs1 w-auto">
                    <div className="flex flex-col items-start justify-start pr-2 py-2 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_iconproject_blue_500.svg"
                          alt="iconproject"
                        />
                        <Text
                          className="text-base text-blue-500 w-auto"
                          size="txtOutfitMedium16"
                        >
                          Project Library
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start px-4 shadow-bs1 w-auto"
                    onClick={() => navigate("/")}
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
                  className="border-gray-300 border-solid border-t pb-2.5 pl-[11px] sm:pr-5 pr-[35px] pt-[26px] text-gray-900_01 text-sm"
                  size="txtOutfitSemiBold14"
                >
                  Master Data
                </Text>
                <div
                  className="common-pointer flex flex-col items-start justify-start mb-[341px] px-4 shadow-bs1 w-auto"
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
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start mb-1 w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-end pr-1 py-1 w-[16%] md:w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-auto">
                      <Text
                        className="text-black-900_d8 text-xl w-auto"
                        size="txtOutfitMedium20"
                      >
                        Project Library
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <ProjectLibrarySearchbox className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-1 sm:flex-col flex-row font-roboto sm:gap-5 items-center justify-start sm:mt-0 my-1 rounded-sm w-[444px] sm:w-full" />
                    <Button
                      className="border border-blue-500 border-solid cursor-pointer font-outfit h-10 text-base text-center w-[147px]"
                      shape="round"
                      color="blue_500"
                      size="md"
                      variant="fill"
                    >
                      + Create New
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:h-[4389px] sm:h-[708px] h-[709px] relative w-[97%] md:w-full">
                <div className="flex flex-col gap-8 h-full items-center justify-start ml-auto mr-[27px] mt-[74px] w-[14%]">
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_One"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Two"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Three"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Four"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Five"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Six"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Seven"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Eight"
                  />
                  <Img
                    className="h-6"
                    src="images/img_menudropdown.svg"
                    alt="menudropdown_Nine"
                  />
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-3 items-center justify-start rounded w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start w-[94px]">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <ProjectLibraryColumndivider
                            className="flex flex-col items-start justify-start px-4 w-[94px]"
                            title="ID"
                          />
                          <ProjectLibraryColumn className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]" />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1468"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1345"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1311"
                          />
                          <ProjectLibraryColumn className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]" />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1345"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1471"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1399"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1340"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[94px]"
                            text="MR1455"
                          />
                        </List>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[262px]">
                        <ProjectLibraryColumndivider className="flex flex-col items-start justify-start px-4 w-[262px]" />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="SKINCARE-Handcream-OilFree"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="SKINCARE-EyeCream-Serum"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="SKINCARE-Sunscreen-SPF50+"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="SKINCARE-EyeCream-Serum"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                        <ProjectLibraryColumn
                          className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[262px]"
                          text="HAIRCARE-Shampoo-KER"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[164px]">
                        <ProjectLibraryColumndivider
                          className="bg-gray-50 flex flex-col items-start justify-start px-4 w-[148px]"
                          title="Created By"
                        />
                        <List
                          className="flex flex-col gap-px w-[91%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Julia Suzuki
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_24x24.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Nga Georgiou
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_1.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Sara Mizrahi
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_2.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Noam Tanaka
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_3.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Amelia Idowu
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_4.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Lucas Tanaka
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_5.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Yosef Park
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_6.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Bukola Oliveira
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_7.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Vikas Smith
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_ellipse178_8.png"
                                  alt="ellipse178"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtOutfitRegular14"
                                >
                                  Louis Rizzo
                                </Text>
                              </div>
                              <Img
                                className="h-full w-[116px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <ProjectLibraryColumndivider
                            className="bg-gray-50 flex flex-col items-start justify-start px-4 w-[131px]"
                            title="Created On"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="12-Aug-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="10-Aug-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="11-Aug-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="10-Aug-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="30-Jul-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="24-Jul-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="23-Jul-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="18-Jul-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="15-Jul-23"
                          />
                          <ProjectLibraryColumn
                            className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[131px]"
                            text="12-Jul-23"
                          />
                        </List>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[228px]">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <ProjectLibraryColumndivider
                            className="bg-gray-50 flex flex-col items-start justify-start px-4 w-[228px]"
                            title="Tags"
                          />
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[228px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Shampoo #FY24 # Keratin
                              </Text>
                              <Img
                                className="h-full w-[196px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[228px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Handcream #Oilfree
                              </Text>
                              <Img
                                className="h-full w-[196px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[228px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-[212px]">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Eyecream #Serum
                              </Text>
                              <Img
                                className="h-full w-[196px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[228px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-[209px]">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Suncream #SPF # Summer
                              </Text>
                              <Img
                                className="h-full w-[196px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Scalp #Hair Treatment
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Fragrance #EDT # EDP
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Shampoo #FY24 # Keratin
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Bodywash #Shower Gel
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Beauty #FY24 # Keratin
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[210px]">
                            <div className="flex flex-col gap-2.5 h-14 md:h-auto items-center justify-start py-[17px] w-full">
                              <Text
                                className="text-center text-gray-700 text-sm w-auto"
                                size="txtOutfitMedium14"
                              >
                                #Shampoo #FY24 # Keratin
                              </Text>
                              <Img
                                className="h-full w-[178px]"
                                src="images/img_linewrapper.svg"
                                alt="linewrapper"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="md:h-[603px] h-[616px] relative w-[26%] md:w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <List
                            className="sm:flex-col flex-row gap-px grid grid-cols-2 justify-center w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-start justify-start sm:ml-[0] w-[148px]">
                              <ProjectLibraryColumndivider
                                className="flex flex-col items-start justify-start px-4 w-[148px]"
                                title="Status"
                              />
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-orange-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-yellow-800 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-sm text-yellow-800 w-auto"
                                        size="txtOutfitRegular14Yellow800"
                                      >
                                        Validating
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-orange-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-yellow-800 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-sm text-yellow-800 w-auto"
                                        size="txtOutfitRegular14Yellow800"
                                      >
                                        Validating
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Two"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Three"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Four"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-orange-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-yellow-800 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-sm text-yellow-800 w-auto"
                                        size="txtOutfitRegular14Yellow800"
                                      >
                                        Validating
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Five"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Six"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Seven"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-orange-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-yellow-800 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-sm text-yellow-800 w-auto"
                                        size="txtOutfitRegular14Yellow800"
                                      >
                                        Validating
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Eight"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col h-14 md:h-auto items-start justify-start px-4 w-[148px]">
                                <div className="flex flex-col gap-4 items-start justify-end pt-4 w-full">
                                  <div className="bg-green-50 flex flex-col h-6 md:h-auto items-center justify-start px-4 py-0.5 rounded-[12px] w-[117px]">
                                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                                      <div className="bg-light_green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                                      <Text
                                        className="text-center text-light_green-A700 text-sm w-auto"
                                        size="txtOutfitRegular14LightgreenA700"
                                      >
                                        Completed
                                      </Text>
                                    </div>
                                  </div>
                                  <Img
                                    className="h-px w-full"
                                    src="images/img_linewrapper.svg"
                                    alt="linewrapper_Nine"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start sm:ml-[0] w-[148px]">
                              <ProjectLibraryColumndivider
                                className="flex flex-col items-start justify-start px-4 w-[148px]"
                                title="Actions"
                              />
                              <div className="flex flex-col items-start justify-start pb-[5px] pl-[5px] w-full">
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Button
                                        className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[57px]"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                        leftIcon={
                                          <Img
                                            className="h-5 mr-1.5"
                                            src="images/img_icon_eye.svg"
                                            alt="icon/Eye"
                                          />
                                        }
                                        size="xs"
                                      >
                                        <div className="text-black-900 text-left text-sm">
                                          View
                                        </div>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px md:ml-[0] ml-[11px] object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_One"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_One"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Two"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Two"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Three"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Three"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Four"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Four"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Five"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Five"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Six"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Six"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Seven"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-20">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Seven"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Eight"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pl-4 w-full">
                                <div className="flex flex-col items-center justify-start py-[17px] w-[70px]">
                                  <div className="flex flex-col items-center justify-start w-[63%]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div
                                        className="common-pointer flex flex-row gap-1.5 items-center justify-start w-auto"
                                        onClick={() =>
                                          navigate("/dashboardsix")
                                        }
                                      >
                                        <Img
                                          className="h-5 w-5"
                                          src="images/img_icon_eye.svg"
                                          alt="iconeye_Eight"
                                        />
                                        <Text
                                          className="text-black-900 text-sm w-auto"
                                          size="txtOutfitRegular14Black900"
                                        >
                                          View
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="md:h-auto h-px object-cover"
                                  src="images/img_linewrapper_black_900.png"
                                  alt="linewrapper_Nine"
                                />
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="absolute bottom-[2%] flex flex-col gap-8 items-center justify-start right-[9%] w-[54%]">
                          <Img
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Ten"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Eleven"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Twelve"
                          />
                          <Img
                            className="h-6 static"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Thirteen"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Fourteen"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Fifteen"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Sixteen"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Seventeen"
                          />
                          <Img
                            className="h-6"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Eighteen"
                          />
                          <Img
                            className="h-[25px]"
                            src="images/img_menudropdown.svg"
                            alt="menudropdown_Nineteen"
                          />
                        </div>
                      </div>
                    </div>
                    <ProjectLibraryPagination className="flex flex-col items-center justify-end max-w-[1136px] mb-4 py-4 w-full" />
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

export default ProjectLibraryPage;
