import React from "react";

const sizeClasses = {
  txtOutfitMedium14: "font-medium font-outfit",
  txtOutfitBold16AmberA700: "font-bold font-outfit",
  txtOutfitMedium12: "font-medium font-outfit",
  txtOutfitMedium18: "font-medium font-outfit",
  txtOutfitMedium16: "font-medium font-outfit",
  txtOutfitRegular14Gray700e5: "font-normal font-outfit",
  txtOutfitSemiBold1208WhiteA700d8: "font-outfit font-semibold",
  txtOutfitRegular16Black900d8: "font-normal font-outfit",
  txtOutfitSemiBold20Indigo50001: "font-outfit font-semibold",
  txtOutfitRegular12Gray70003: "font-normal font-outfit",
  txtOutfitMedium16Gray800: "font-medium font-outfit",
  txtOutfitBold16: "font-bold font-outfit",
  txtOutfitSemiBold20: "font-outfit font-semibold",
  txtOutfitRegular14: "font-normal font-outfit",
  txtOutfitRegular15: "font-normal font-outfit",
  txtOutfitRegular16: "font-normal font-outfit",
  txtOutfitSemiBold14Black900d8: "font-outfit font-semibold",
  txtOutfitRegular12Gray700a2: "font-normal font-outfit",
  txtOutfitRegular10: "font-normal font-outfit",
  txtOutfitRegular12Gray700e5: "font-normal font-outfit",
  txtOutfitRegular12: "font-normal font-outfit",
  txtOutfitBold16Red600: "font-bold font-outfit",
  txtOutfitRegular16Gray90001: "font-normal font-outfit",
  txtOutfitMedium20: "font-medium font-outfit",
  txtOutfitSemiBold20WhiteA700: "font-outfit font-semibold",
  txtOutfitRegular16Gray600: "font-normal font-outfit",
  txtOutfitSemiBold36: "font-outfit font-semibold",
  txtOutfitMedium14Black90001: "font-medium font-outfit",
  txtOutfitMedium12Black900: "font-medium font-outfit",
  txtOutfitRegular12Gray700cc: "font-normal font-outfit",
  txtOutfitBold20: "font-bold font-outfit",
  txtOutfitRegular14Gray70004: "font-normal font-outfit",
  txtOutfitMedium14Black900: "font-medium font-outfit",
  txtOutfitMedium12Gray70004: "font-medium font-outfit",
  txtOutfitMedium16Black900: "font-medium font-outfit",
  txtOutfitRegular14Black900d8: "font-normal font-outfit",
  txtOutfitMedium14Gray90001: "font-medium font-outfit",
  txtOutfitRegular14Blue500: "font-normal font-outfit",
  txtOutfitRegular14LightgreenA700: "font-normal font-outfit",
  txtOutfitLight12: "font-light font-outfit",
  txtOutfitLight18: "font-light font-outfit",
  txtOutfitSemiBold14WhiteA700d8: "font-outfit font-semibold",
  txtOutfitSemiBold1553: "font-outfit font-semibold",
  txtOutfitMedium1151: "font-medium font-outfit",
  txtOutfitSemiBold1726: "font-outfit font-semibold",
  txtOutfitRegular14Yellow800: "font-normal font-outfit",
  txtOutfitRegular12Indigo50001: "font-normal font-outfit",
  txtOutfitRegular12Gray700: "font-normal font-outfit",
  txtOutfitRegular16Gray700: "font-normal font-outfit",
  txtOutfitMedium14Black900d8: "font-medium font-outfit",
  txtOutfitRegular12Black900: "font-normal font-outfit",
  txtOutfitSemiBold14: "font-outfit font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtOutfitSemiBold16: "font-outfit font-semibold",
  txtRobotoRegular16: "font-normal font-roboto",
  txtOutfitBold40: "font-bold font-outfit",
  txtOutfitSemiBold18: "font-outfit font-semibold",
  txtOutfitBold16Gray90001: "font-bold font-outfit",
  txtOutfitMedium16Gray90001: "font-medium font-outfit",
  txtRobotoRegular14Black9003f: "font-normal font-roboto",
  txtOutfitRegular14Black900: "font-normal font-outfit",
  txtOutfitRegular8: "font-normal font-outfit",
  txtOutfitSemiBold1208: "font-outfit font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
