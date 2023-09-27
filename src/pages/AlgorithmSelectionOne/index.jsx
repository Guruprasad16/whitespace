import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SeekBar,
  Text,
} from "components";

const AlgorithmSelectionOnePage = () => {
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
                <Button
                  className="cursor-pointer flex h-10 items-center justify-center min-w-[224px] w-[220px]"
                  leftIcon={
                    <Img
                      className="h-5 mb-0.5 mr-2"
                      src="images/img_targetaudience_1.svg"
                      alt="target-audience 1"
                    />
                  }
                  shape="square"
                  color="light_blue_50"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium text-[15px] text-left">
                    Segment Characteristics
                  </div>
                </Button>
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
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] mr-[131px] mt-[340px] px-4 shadow-bs1 w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-5 w-full"></div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-3 items-center justify-start md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-2 h-28 md:h-auto items-start justify-start max-w-[1216px] pt-4 sm:px-5 px-6 w-full">
                <div className="flex flex-col items-start justify-start pb-2.5 pr-2.5 w-[29%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-black-900_d8 text-xl w-auto"
                      size="txtOutfitMedium20"
                    >
                      Segment Characteristic Definition
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1176px] pt-2 w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-center justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-center py-2 w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_iconcheckcircle.svg"
                            alt="iconcheckcircle"
                          />
                          <Text
                            className="text-base text-blue-500 w-auto"
                            size="txtOutfitMedium16"
                          >
                            Segment 1
                          </Text>
                        </div>
                        <Line className="bg-blue-500 h-0.5 w-full" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="flex flex-row gap-2 items-center justify-center py-2 w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_iconcheckcircle.svg"
                            alt="iconcheckcircle_One"
                          />
                          <Text
                            className="text-base text-black-900_d8 w-auto"
                            size="txtOutfitRegular16Black900d8"
                          >
                            Segment 2
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto h-10 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2">
                        <Text
                          className="text-base text-black-900_d8 w-auto"
                          size="txtRobotoRegular16"
                        >
                          <span className="text-black-900_d8 font-outfit text-left font-normal">
                            Segment 3{" "}
                          </span>
                          <span className="text-indigo-A200_01 font-outfit text-left text-xs font-normal">
                            (In progress)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start w-auto">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2">
                        <Text
                          className="text-base text-black-900_d8 w-auto"
                          size="txtRobotoRegular16"
                        >
                          <span className="text-black-900_d8 font-outfit text-left font-normal">
                            Segment 4{" "}
                          </span>
                          <span className="text-indigo-A200_01 font-outfit text-left text-xs font-normal">
                            (In progress)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start w-auto">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2 w-auto">
                        <Text
                          className="text-base text-black-900_d8 w-auto"
                          size="txtRobotoRegular16"
                        >
                          <span className="text-black-900_d8 font-outfit text-left font-normal">
                            Segment 5{" "}
                          </span>
                          <span className="text-indigo-A200_01 font-outfit text-left text-xs font-normal">
                            (In progress)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start w-auto">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2">
                        <Text
                          className="text-base text-black-900_d8 w-auto"
                          size="txtRobotoRegular16"
                        >
                          <span className="text-black-900_d8 font-outfit text-left font-normal">
                            Segment 6{" "}
                          </span>
                          <span className="text-indigo-A200_01 font-outfit text-left text-xs font-normal">
                            (In progress)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start w-auto">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center py-2">
                        <Text
                          className="text-base text-black-900_d8 w-auto"
                          size="txtRobotoRegular16"
                        >
                          <span className="text-black-900_d8 font-outfit text-left font-normal">
                            Segment 7{" "}
                          </span>
                          <span className="text-indigo-A200_01 font-outfit text-left text-xs font-normal">
                            (In progress)
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-9">
                      <Img
                        className="h-9 w-9"
                        src="images/img_iconrightcircle.svg"
                        alt="iconrightcircle"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:h-[1432px] sm:h-[714px] h-[728px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
                  <div className="flex md:flex-col flex-row gap-[7px] items-center justify-between w-full">
                    <div className="bg-white-A700 border border-black-900_28 border-solid flex md:flex-1 flex-col gap-2 items-center justify-start pb-5 relative rounded top-[30px] w-[71%] md:w-full">
                      <div className="bg-gradient2  flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-1 rounded-tl rounded-tr w-full">
                        <div className="flex flex-row gap-[22px] items-center justify-start sm:ml-[0] ml-[13px] w-auto">
                          <Img
                            className="h-[82px] md:h-auto rounded-[50%] w-[82px]"
                            src="images/img_ellipse65.png"
                            alt="ellipseSixtyFive"
                          />
                          <Text
                            className="leading-[30.00px] max-w-[203px] md:max-w-full text-white-A700 text-xl"
                            size="txtOutfitBold20"
                          >
                            Self Obsessed Flamboyant
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center mb-[25px] min-w-[152px] mr-[21px] sm:mt-0 mt-[17px] rounded-[20px]"
                          leftIcon={
                            <Img
                              className="h-6 mb-px mr-1"
                              src="images/img_collagen_1.svg"
                              alt="collagen 1"
                            />
                          }
                          color="indigo_900"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-base text-center">
                            Regenerate
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-col gap-9 items-start justify-start w-auto md:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[815px] w-full">
                          <div className="flex flex-row sm:gap-10 items-start justify-between py-1 w-[95%] md:w-full">
                            <div className="flex flex-col items-center justify-start mt-2 pt-[3px]">
                              <Text
                                className="text-base text-gray-900_01"
                                size="txtOutfitSemiBold16"
                              >
                                Spend Characteristic
                              </Text>
                            </div>
                            <Radio
                              value="AddMore"
                              className="font-semibold mt-2 text-indigo-A200_01 text-left text-xs"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="textTwo"
                              label="Add More"
                              id="AddMore"
                            ></Radio>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                            <Input
                              name="input"
                              placeholder="Self-obsessed abut their looks"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_02 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="h-4 ml-[35px] my-px"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Input
                              name="input_One"
                              placeholder="Needs continuous validation of their good looks"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Input
                              name="input_Two"
                              placeholder="Highly affluent"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Input
                              name="input_Three"
                              placeholder="Moderate affinity towards trial of new products"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[815px] w-full">
                          <div className="flex flex-row sm:gap-10 items-start justify-between py-1 w-[95%] md:w-full">
                            <div className="flex flex-col items-start justify-end mt-2">
                              <Text
                                className="text-base text-gray-900_01"
                                size="txtOutfitSemiBold16"
                              >
                                Functional Need
                              </Text>
                            </div>
                            <Radio
                              value="AddMore"
                              className="font-semibold mt-2 text-indigo-A200_01 text-left text-xs"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="textFour"
                              label="Add More"
                              id="AddMore2"
                            ></Radio>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                            <Input
                              name="input_Four"
                              placeholder="Squeaky Clean"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Input
                              name="input_Five"
                              placeholder="Deposit removal"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start max-w-[815px] w-full">
                          <div className="flex flex-row sm:gap-10 items-start justify-between py-1 w-[95%] md:w-full">
                            <div className="flex flex-col items-start justify-end mt-2">
                              <Text
                                className="text-base text-gray-900_01"
                                size="txtOutfitSemiBold16"
                              >
                                Emotional Need
                              </Text>
                            </div>
                            <Radio
                              value="AddMore"
                              className="font-semibold mt-2 text-indigo-A200_01 text-left text-xs"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="textSix"
                              label="Add More"
                              id="AddMore3"
                            ></Radio>
                          </div>
                          <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                            <Input
                              name="input_Six"
                              placeholder="Likes being noticed"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                            <Input
                              name="input_Seven"
                              placeholder="Likes being talked-about"
                              className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                              wrapClassName="border border-gray-200_03 border-solid flex md:h-auto max-w-[770px] w-full"
                              suffix={
                                <Img
                                  className="mt-auto mb-0.5 h-4 ml-[35px]"
                                  src="images/img_icon_minuscircle.svg"
                                  alt="icon/MinusCircle"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[711px] h-[714px] relative w-[29%] md:w-full">
                      <div className="absolute bg-white-A700 border border-black-900_28 border-solid flex flex-col gap-2.5 h-full inset-[0] items-center justify-center m-auto py-[11px] rounded w-[98%]">
                        <div className="flex flex-row items-center justify-between w-[93%] md:w-full">
                          <Text
                            className="text-gray-900_01 text-sm"
                            size="txtOutfitSemiBold14"
                          >
                            Map to Product Attribute
                          </Text>
                          <Button
                            className="border border-blue-500 border-solid cursor-pointer font-medium h-7 text-base text-center w-[77px]"
                            shape="round"
                            color="blue_500"
                            size="sm"
                            variant="fill"
                          >
                            Done
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-[147px] w-full">
                          <Line className="bg-black-900_28 h-px w-full" />
                          <div className="h-[463px] md:h-[474px] mt-[13px] relative w-[91%]">
                            <List
                              className="absolute flex flex-col gap-6 inset-[0] items-start m-auto w-auto"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-700 text-sm w-auto"
                                    size="txtOutfitRegular14"
                                  >
                                    Aroma
                                  </Text>
                                  <SeekBar
                                    inputValue={[2.08]}
                                    trackColors={["#f1f1fd", "#3f7fff"]}
                                    thumbClassName="h-4 bg-blue-A200_01 w-4 flex justify-center items-center rounded-[50%] outline-none"
                                    className="flex h-[26px] rotate-[90deg] rounded-[3px] w-full"
                                    trackClassName="h-[7px] flex rounded-[3px] w-full"
                                  />{" "}
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="text-base text-gray-900_01 text-right w-auto"
                                  size="txtOutfitSemiBold16"
                                >
                                  85 %
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-700 text-sm w-auto"
                                    size="txtOutfitRegular14"
                                  >
                                    Clean Scalp
                                  </Text>
                                  <SeekBar
                                    inputValue={[46.67]}
                                    trackColors={["#3f7fff", "#f1f1fd"]}
                                    thumbClassName="h-[26px] bg-blue-A200_6c w-[26px] flex justify-center items-center rounded-[50%] outline-none"
                                    thumbChildren={
                                      <>
                                        <div className="h-4 bg-blue-A200_01 w-4 rounded-[50%]" />
                                      </>
                                    }
                                    className="flex h-[26px] rotate-[90deg] rounded-sm w-full"
                                    trackClassName="h-[7px] flex rounded-sm w-full"
                                  />{" "}
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="text-base text-gray-900_01 text-right w-auto"
                                  size="txtOutfitSemiBold16"
                                >
                                  52 %
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-700 text-sm w-auto"
                                    size="txtOutfitRegular14"
                                  >
                                    Long lasting hold
                                  </Text>
                                  <SeekBar
                                    inputValue={[27.08]}
                                    trackColors={["#3f7fff", "#f1f1fd"]}
                                    thumbClassName="h-[26px] bg-blue-A200_6c w-[26px] flex justify-center items-center rounded-[50%] outline-none"
                                    thumbChildren={
                                      <>
                                        <div className="h-4 bg-blue-A200_01 w-4 rounded-[50%]" />
                                      </>
                                    }
                                    className="flex h-[26px] rotate-[90deg] rounded-sm w-full"
                                    trackClassName="h-[7px] flex rounded-sm w-full"
                                  />{" "}
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="text-base text-gray-900_01 text-right w-auto"
                                  size="txtOutfitSemiBold16"
                                >
                                  28%
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-700 text-sm w-auto"
                                    size="txtOutfitRegular14"
                                  >
                                    Maintenance
                                  </Text>
                                  <SeekBar
                                    inputValue={[46.67]}
                                    trackColors={["#3f7fff", "#f1f1fd"]}
                                    thumbClassName="h-[26px] bg-blue-A200_6c w-[26px] flex justify-center items-center rounded-[50%] outline-none"
                                    thumbChildren={
                                      <>
                                        <div className="h-4 bg-blue-A200_01 w-4 rounded-[50%]" />
                                      </>
                                    }
                                    className="flex h-[26px] rotate-[90deg] rounded-sm w-full"
                                    trackClassName="h-[7px] flex rounded-sm w-full"
                                  />{" "}
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="text-base text-gray-900_01 text-right w-auto"
                                  size="txtOutfitSemiBold16"
                                >
                                  46 %
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                  <Text
                                    className="text-gray-700 text-sm w-auto"
                                    size="txtOutfitRegular14"
                                  >
                                    Volume & Bounce
                                  </Text>
                                  <SeekBar
                                    inputValue={[62.92]}
                                    trackColors={["#3f7fff", "#f1f1fd"]}
                                    thumbClassName="h-[26px] bg-blue-A200_6c w-[26px] flex justify-center items-center rounded-[50%] outline-none"
                                    thumbChildren={
                                      <>
                                        <div className="h-4 bg-blue-A200_01 w-4 rounded-[50%]" />
                                      </>
                                    }
                                    className="flex h-[26px] rotate-[90deg] rounded-sm w-full"
                                    trackClassName="h-[7px] flex rounded-sm w-full"
                                  />{" "}
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      0
                                    </Text>
                                    <Text
                                      className="text-gray-700_cc text-xs"
                                      size="txtOutfitRegular12Gray700cc"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="text-base text-gray-900_01 text-right w-auto"
                                  size="txtOutfitSemiBold16"
                                >
                                  70 %
                                </Text>
                              </div>
                            </List>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[29px] items-end justify-start p-0.5 right-[26%] top-[0]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group2600.svg')",
                              }}
                            >
                              <Text
                                className="mb-[7px] mr-[9px] text-black-900 text-xs"
                                size="txtOutfitRegular12Black900"
                              >
                                85%
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-black-900_28 h-px mt-7 w-full" />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[4%] h-[483px] inset-x-[0] mx-auto"
                        src="images/img_chatbot.svg"
                        alt="chatbot"
                      />
                    </div>
                  </div>
                </div>
                <footer className="bg-white-A700 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto relative rounded-tr-[16px] shadow-bs5 top-[750px] w-full">
                  <Button
                    className="border border-blue-500 border-solid cursor-pointer flex h-10 items-center justify-center ml-[1087px] mr-4 my-2.5 w-[113px]"
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
                    <div className="text-base text-center">Next</div>
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

export default AlgorithmSelectionOnePage;
