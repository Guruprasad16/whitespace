import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Radio, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DashboardSixPage = () => {
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
            <Sidebar1 className="!sticky !w-56 bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs3 top-[0]" />
            <div className="flex flex-1 flex-col gap-2.5 items-center justify-start md:px-5 w-full">
              <div className="flex flex-col relative w-full">
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="bg-white-A700 flex flex-row gap-2 h-[146px] md:h-auto items-start justify-start max-w-[1216px] sm:px-5 px-6 py-4 w-full">
                    <div className="flex flex-col h-10 md:h-auto items-center justify-start py-1.5 w-[186px]">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-black-900_d8 text-xl w-auto"
                          size="txtOutfitMedium20"
                        >
                          MR Summary
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="border border-blue-500 border-solid cursor-pointer flex items-center justify-center min-w-[147px]"
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
                      <div className="text-base text-center">Upload MR</div>
                    </Button>
                  </div>
                </div>
                <div className="h-[133px] mt-[-59px] mx-auto w-full z-[1]">
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-end justify-between mb-[-51px] mx-auto w-auto z-[1]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[110px] items-start justify-start p-[17px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group1000001227.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[17px] items-center justify-start mb-0.5 ml-0.5 md:ml-[0] w-auto">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="circle"
                          color="red_200"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-[31px]"
                            src="images/img_question.svg"
                            alt="question"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                              size="txtOutfitBold40"
                            >
                              43
                            </Text>
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtOutfitMedium16Gray800"
                            >
                              No. of Questions
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient  flex flex-col items-center justify-start p-1 rounded w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between mb-1.5 w-[91%] md:w-full">
                        <div className="md:h-[72px] h-[78px] relative w-[82%]">
                          <div className="absolute bg-white-A700_75 h-[9px] right-[31%] rounded top-[0] w-[9px]"></div>
                          <div className="absolute bottom-[0] flex flex-row gap-[17px] inset-x-[0] items-center justify-between mx-auto w-auto">
                            <Img
                              className="h-12 w-12"
                              src="images/img_user.svg"
                              alt="user"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                                  size="txtOutfitBold40"
                                >
                                  1500
                                </Text>
                                <Text
                                  className="text-base text-gray-800 w-auto"
                                  size="txtOutfitMedium16Gray800"
                                >
                                  Total Respondents
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-16 justify-start w-[12%]">
                          <div className="bg-white-A700_6c h-[19px] ml-2.5 md:ml-[0] rounded-[9px] w-[19px]"></div>
                          <div className="bg-white-A700_75 h-[13px] mr-4 rounded-md w-[13px]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient1  sm:h-24 h-[110px] md:h-[78px] p-1 relative rounded w-full">
                      <div className="absolute flex flex-col items-center justify-start right-[5%] top-[4%] w-[42%]">
                        <div className="flex flex-col md:gap-10 gap-16 justify-start w-full">
                          <div className="flex flex-row items-end justify-between w-full">
                            <div className="bg-white-A700_75 h-[9px] mt-[9px] rounded w-[9px]"></div>
                            <div className="bg-white-A700_6c h-[19px] rounded-[9px] w-[19px]"></div>
                          </div>
                          <div className="bg-white-A700_75 h-[13px] md:ml-[0] ml-[85px] mr-4 rounded-md w-[13px]"></div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row gap-4 h-max inset-y-[0] items-center justify-between left-[6%] my-auto w-auto">
                        <Img
                          className="h-[78px] w-[78px]"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                              <Radio
                                value="Male70"
                                className="font-bold text-base text-gray-900_01 text-left"
                                inputClassName="bg-deep_purple-A200 border border-solid border-white-A700 h-2.5 mr-[5px] w-2.5"
                                checked={false}
                                name="maleSeventy"
                                label="Male         70"
                                id="Male70"
                              ></Radio>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                              <Radio
                                value="Female30"
                                className="font-bold text-base text-gray-900_01 text-left"
                                inputClassName="bg-amber-500 border border-solid border-white-A700 h-2.5 mr-[5px] w-2.5"
                                checked={false}
                                name="femaleThirty"
                                label="Female    30"
                                id="Female30"
                              ></Radio>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[110px] items-center justify-end p-[3px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group1000001227.png')",
                      }}
                    >
                      <div className="flex flex-col gap-[7px] justify-start w-[88%] md:w-full">
                        <Text
                          className="text-base text-gray-800"
                          size="txtOutfitMedium16Gray800"
                        >
                          Satisfaction Scores
                        </Text>
                        <div className="flex flex-row gap-[53px] items-start justify-start md:ml-[0] ml-[9px] w-auto">
                          <div className="flex flex-col gap-1.5 items-center justify-start w-[15%]">
                            <Img
                              className="h-[29px]"
                              src="images/img_group.svg"
                              alt="group"
                            />
                            <div className="flex flex-col items-end justify-start pb-0.5 pl-0.5 w-full">
                              <Text
                                className="text-base text-green-700"
                                size="txtOutfitBold16"
                              >
                                35%
                              </Text>
                              <Text
                                className="text-gray-800 text-xs"
                                size="txtOutfitMedium12"
                              >
                                Yes
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[14%]">
                            <Img
                              className="h-[29px] md:h-auto object-cover w-[29px]"
                              src="images/img_group_lime_900.png"
                              alt="group_One"
                            />
                            <div className="flex flex-col gap-[-4px] items-center justify-start ml-0.5 md:ml-[0] w-auto">
                              <Text
                                className="text-base text-red-600 w-auto"
                                size="txtOutfitBold16Red600"
                              >
                                25%
                              </Text>
                              <Text
                                className="text-gray-800 text-xs"
                                size="txtOutfitMedium12"
                              >
                                No
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[5px] items-center justify-start pl-0.5 w-[26%]">
                            <Img
                              className="h-[29px] w-[29px]"
                              src="images/img_dashboard_lime_900.svg"
                              alt="dashboard_Two"
                            />
                            <div className="flex flex-col gap-[-7px] items-center justify-start w-auto">
                              <Text
                                className="text-amber-A700 text-base w-auto"
                                size="txtOutfitBold16AmberA700"
                              >
                                45%
                              </Text>
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtOutfitBold16Gray90001"
                              >
                                <span className="text-gray-800 font-outfit text-left text-xs font-medium">
                                  Somewhat
                                </span>
                                <span className="text-gray-800 font-outfit text-left text-xl font-medium">
                                  {" "}
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[74px] mt-auto mx-auto"
                    src="images/img_group1000001266.svg"
                    alt="group1000001266"
                  />
                </div>
              </div>
              <div className="sm:h-[1722px] md:h-[1816px] h-[928px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-8 items-start justify-start p-3 rounded w-full">
                          <Text
                            className="mt-1.5 text-base text-gray-900_01"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Age Distribution of All Respondents{" "}
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-3 ml-1 md:ml-[0] w-[97%] md:w-full">
                            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                                <Text
                                  className="sm:mt-0 mt-2.5 rotate-[90deg] text-gray-700 text-sm"
                                  size="txtOutfitRegular14"
                                >
                                  No. of Respondents
                                </Text>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-between w-full">
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          1500
                                        </Text>
                                        <Text
                                          className="mt-[25px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          1000
                                        </Text>
                                        <Text
                                          className="ml-1.5 md:ml-[0] mt-[29px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          500
                                        </Text>
                                        <Text
                                          className="md:ml-[0] ml-[21px] mt-[27px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <div className="flex sm:flex-1 flex-col gap-[5px] items-center justify-start sm:mt-0 mt-2 w-[93%] sm:w-full">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start px-1.5 w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group19.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[129px] w-[451px]"
                                            src="images/img_bars.svg"
                                            alt="bars"
                                          />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            15-25
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            25-35
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            35-45
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            45-55
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            55-65
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            65 +
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="text-gray-700 text-sm"
                                size="txtOutfitRegular14"
                              >
                                Age Group
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-8 items-start justify-start p-3 rounded w-full">
                          <Text
                            className="mt-1.5 text-base text-gray-900_01"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Income Distribution of All Respondents{" "}
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-3 ml-1 md:ml-[0] w-[97%] md:w-full">
                            <div className="flex flex-col gap-3.5 justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                                <Text
                                  className="sm:mt-0 mt-2.5 rotate-[90deg] text-gray-700 text-sm"
                                  size="txtOutfitRegular14"
                                >
                                  No. of Respondents
                                </Text>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-between w-full">
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          1500
                                        </Text>
                                        <Text
                                          className="mt-[25px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          1000
                                        </Text>
                                        <Text
                                          className="ml-1.5 md:ml-[0] mt-[29px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          500
                                        </Text>
                                        <Text
                                          className="md:ml-[0] ml-[21px] mt-[27px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <div className="flex sm:flex-1 flex-col gap-[5px] items-center justify-start sm:mt-0 mt-2 w-[93%] sm:w-full">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start px-1.5 w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group19.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[129px] w-[451px]"
                                            src="images/img_bars.svg"
                                            alt="bars"
                                          />
                                        </div>
                                        <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            <>&lt; 25</>
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            25-50
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            50-75
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            75-100
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            100-125
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            125 +
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[217px] text-gray-700 text-sm"
                                size="txtOutfitRegular14"
                              >
                                Income Group(In Rs.1K)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-7 items-start justify-end p-3 rounded w-full">
                            <Text
                              className="mt-1.5 text-base text-gray-900_01"
                              size="txtOutfitMedium16Gray90001"
                            >
                              Household Composition
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start ml-1 md:ml-[0] w-auto sm:w-full">
                              <Img
                                className="h-44 w-44"
                                src="images/img_chartcontainer.svg"
                                alt="chartcontainer"
                              />
                              <div className="flex flex-col gap-0.5 items-start justify-start w-[366px]">
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[360px]">
                                  <div className="bg-blue-400_01 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Single Occupancy
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    30.5%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[360px]">
                                  <div className="bg-cyan-400 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="leading-[20.00px] max-w-[208px] md:max-w-full text-gray-700 text-xs"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Married/Cohabiting with no dependent
                                    Children
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    5.5%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-start justify-start px-2 py-1.5 w-[366px]">
                                  <div className="bg-yellow-600 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="leading-[20.00px] max-w-[212px] md:max-w-full text-gray-700 text-xs"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Married/Cohabiting with no dependent
                                    Children
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    24.2%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[360px]">
                                  <div className="bg-red-300_01 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Single parent Family
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    25.8%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[360px]">
                                  <div className="bg-deep_purple-300 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Other multi-person household
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    14%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-[33px] justify-start p-3 rounded w-full">
                          <Text
                            className="mt-1.5 text-base text-gray-900_01"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Average Spend Per Month
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-[11px] md:ml-[0] ml-[5px] mr-3 w-[97%] md:w-full">
                            <div className="flex flex-col gap-[13px] justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between w-full">
                                <Text
                                  className="rotate-[90deg] text-gray-700 text-sm"
                                  size="txtOutfitRegular14"
                                >
                                  Spend
                                </Text>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-between w-full">
                                      <div className="flex sm:flex-1 flex-col gap-[25px] items-end justify-start w-[7%] sm:w-full">
                                        <Text
                                          className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          100K +
                                        </Text>
                                        <div className="flex flex-col gap-[29px] items-start justify-start">
                                          <Text
                                            className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            50K
                                          </Text>
                                          <Text
                                            className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            25K
                                          </Text>
                                          <Text
                                            className="ml-0.5 md:ml-[0] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            10K
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="flex sm:flex-1 flex-col gap-[5px] items-center justify-start sm:mt-0 mt-2 w-[92%] sm:w-full">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start px-1.5 w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group19.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[129px] w-[451px]"
                                            src="images/img_bars_indigo_a100.svg"
                                            alt="bars"
                                          />
                                        </div>
                                        <div className="flex flex-row items-start justify-between w-[94%] md:w-full">
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Jan
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Fab
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Mar
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Apr
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            May
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Jun
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[216px] text-gray-700 text-sm"
                                size="txtOutfitRegular14"
                              >
                                Income Group(In Rs.1K)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-[30px] items-start justify-start p-3 rounded w-full">
                          <Text
                            className="text-base text-gray-900_01"
                            size="txtOutfitMedium16Gray90001"
                          >
                            Frequency of Shampooing
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-3 w-[98%] md:w-full">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-between w-full">
                                <Text
                                  className="sm:mt-0 mt-3.5 rotate-[90deg] text-gray-700 text-sm"
                                  size="txtOutfitRegular14"
                                >
                                  No. of Respondents
                                </Text>
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          600
                                        </Text>
                                        <Text
                                          className="mt-[23px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          400
                                        </Text>
                                        <Text
                                          className="mt-[27px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          200
                                        </Text>
                                        <Text
                                          className="ml-4 md:ml-[0] mt-[25px] text-gray-700_03 text-right text-xs tracking-[-0.20px]"
                                          size="txtOutfitRegular12Gray70003"
                                        >
                                          0
                                        </Text>
                                      </div>
                                      <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[9px] w-[95%] sm:w-full">
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start px-1.5 w-[99%] md:w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group19.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[129px] w-[451px]"
                                            src="images/img_bars_indigo_a100_129x451.svg"
                                            alt="bars"
                                          />
                                        </div>
                                        <div className="flex flex-row items-center justify-between mt-[5px] w-[98%] md:w-full">
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Once a Day
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Once a Week
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Once a Month
                                          </Text>
                                          <Text
                                            className="text-center text-gray-700_03 text-xs tracking-[-0.20px]"
                                            size="txtOutfitRegular12Gray70003"
                                          >
                                            Never
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="text-gray-700 text-sm"
                                size="txtOutfitRegular14"
                              >
                                Week-Month
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-white-A700 border border-black-900_0f border-solid flex flex-col gap-[26px] items-start justify-start p-1 rounded w-full">
                            <Text
                              className="ml-2 md:ml-[0] mt-2 text-base text-gray-900_01"
                              size="txtOutfitMedium16Gray90001"
                            >
                              Willingness to Switch
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-10 ml-3 md:ml-[0] w-auto sm:w-full">
                              <Img
                                className="h-44 w-44"
                                src="images/img_chartcontainer_blue_400_01.svg"
                                alt="chartcontainer"
                              />
                              <div className="flex flex-col gap-4 items-start justify-start w-[360px]">
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[207px]">
                                  <div className="bg-blue-400_01 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Very Likely
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    30.5%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[207px]">
                                  <div className="bg-red-300_01 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Wont Mind
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    25.8%
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start px-2 py-1.5 w-[207px]">
                                  <div className="bg-deep_purple-300 h-2 rounded-[50%] w-2"></div>
                                  <Text
                                    className="text-gray-700 text-xs w-auto"
                                    size="txtOutfitRegular12Gray700"
                                  >
                                    Not Likely
                                  </Text>
                                  <Text
                                    className="text-black-900_01 text-right text-sm w-auto"
                                    size="txtOutfitMedium14Black90001"
                                  >
                                    14%
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
                <footer className="absolute bg-white-A700 bottom-[33%] flex inset-x-[0] items-center justify-center mx-auto rounded-tr-[16px] shadow-bs5 w-full">
                  <Button
                    className="common-pointer border border-blue-500 border-solid cursor-pointer flex h-10 items-center justify-center ml-[1087px] mr-4 my-2.5 w-[113px]"
                    onClick={() => navigate("/algorithmselection")}
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

export default DashboardSixPage;
