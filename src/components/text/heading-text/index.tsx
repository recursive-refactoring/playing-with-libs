import { Typography } from "@mui/material";
import { HeadingTextPropsI } from "../text.interface";

export const HeadingText = (props: HeadingTextPropsI) => {
  const {
    variant = "h3",
    color = "text.primary",
    fontWeight = "fontWeightBold",
    component = variant,
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
        wordBreak: "break-word",
      }}
      component={component}
    >
      {children}
    </Typography>
  );
};
