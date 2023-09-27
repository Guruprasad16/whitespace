import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded",
};
const variants = {
  fill: {
    red_200: "bg-red-200",
    indigo_900: "bg-indigo-900 shadow-bs2 text-white-A700",
    blue_500: "bg-blue-500 shadow-bs text-white-A700",
    white_A700: "bg-white-A700",
    blue_A200_01: "bg-blue-A200_01 shadow-bs text-white-A700",
    light_blue_50: "bg-light_blue-50 shadow-bs1 text-blue-500",
    indigo_100_02: "bg-indigo-100_02 text-black-900_d8",
    gray_600_02: "bg-gray-600_02 text-black-900_d8",
    gray_200_04: "bg-gray-200_04 text-black-900_d8",
    gray_800_02: "bg-gray-800_02 text-white-A700_d8",
    gray_900_01: "bg-gray-900_01 text-white-A700_d8",
    blue_50: "bg-blue-50 shadow-bs text-blue-A200_01",
    gray_500_01: "bg-gray-500_01 text-black-900_d8",
    deep_purple_100: "bg-deep_purple-100 text-black-900_d8",
  },
  outline: {
    blue_500: "border border-blue-500 border-solid text-blue-A200_01",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[3px]",
  md: "p-[7px]",
  lg: "p-2.5",
  xl: "p-4",
  "2xl": "px-[19px] py-[21px]",
  "3xl": "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "red_200",
    "indigo_900",
    "blue_500",
    "white_A700",
    "blue_A200_01",
    "light_blue_50",
    "indigo_100_02",
    "gray_600_02",
    "gray_200_04",
    "gray_800_02",
    "gray_900_01",
    "blue_50",
    "gray_500_01",
    "deep_purple_100",
  ]),
};

export { Button };
