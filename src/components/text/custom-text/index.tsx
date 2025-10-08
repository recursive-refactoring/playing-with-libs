import { Typography } from "@mui/material";
import { CustomTextPropsI } from "../text.interface";
import { pxToRem } from "@/utils/styles";

const componentMap:any = {
  h1: "h1", h2: "h2" , h3: "h3" , h4: "h4" , h5:"h5", h6:"h6" , body1: "p" , body2: "p" , caption :"p", subtitle1:"h6", subtitle2:"h6"
}

export const CustomText = (props: CustomTextPropsI) => {
  const {
    variant = "pageTitled",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    isCapital = false,
    textTransform = "none",
    letterSpacing = "0%",
    lineHeight = 24,
    marginBottom,
    gutterBottom
    children,
  } = props;

  return (
    <Typography
      variant={variant}
      sx={{
        color,
        fontWeight,
        lineHeight: pxToRem(lineHeight),
        letterSpacing,
        textTransform: isCapital ? "capitalize" : textTransform,
        marginBottom: gutterBottom ? pxToRem(8) : marginBottom
      }}
      // noWrap={noWrap}
      component={componentMap?.[variant] ?? component}
    >
      {children}
    </Typography>
  );
};
