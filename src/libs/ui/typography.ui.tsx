import { Typography as TypographyUi } from "@mui/material";

export const Typography = (props: any) => {
  const {
    children,
    align = "inherit",
    customStyles,
    variant,
    color,
    fontWeight,
    gutterBottom,
    noWrap = false,
    letterSpacing = "normal",
    lineHeight = "normal",
    component = "p",
    isCapital = false,
    onClick = undefined,
    textTransform = isCapital ? "capitalize" : "none",
    data,
    aria,
  } = props;

  return (
    <TypographyUi
      gutterBottom={gutterBottom}
      variant={variant}
      component={component}
      sx={{
        textAlign: align,
        fontWeight,
        color,
        letterSpacing,
        lineHeight,
        textTransform,
        ...customStyles,
      }}
      noWrap={noWrap}
      onClick={onClick}
      {...data}
      {...aria}
    >
      {children}
    </TypographyUi>
  );
};
