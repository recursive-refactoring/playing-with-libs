import { Typography } from "@mui/material";
import { SubHeadingTextPropsI } from "../text.interface";

export const SubHeadingText = (props: SubHeadingTextPropsI) => {
  const {
    variant = "subtitle1",
    color = "text.primary",
    fontWeight = "fontWeightBold",
    component = "div",
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
