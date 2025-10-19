import { Typography } from "@mui/material";
import { BodyTextPropsI } from "../text.interface";

export const BodyText = (props: BodyTextPropsI) => {
  const {
    variant = "body2",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    isCapital = true,
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
