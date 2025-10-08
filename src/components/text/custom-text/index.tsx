import { Typography } from "@mui/material";
import { CustomTextPropsI } from "../text.interface";

export const CustomText = (props: CustomTextPropsI) => {
  const {
    variant = "pageTitled",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    isCapital = false,
    children,
  } = props;

  return (
    <Typography
      variant={variant}
      sx={{
        color,
        fontWeight,
        textTransform: isCapital ? "capitalize" : "none",
      }}
      component={component}
    >
      {children}
    </Typography>
  );
};
