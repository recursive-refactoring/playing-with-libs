import { Typography as TypographyUi } from "@mui/material";

const Typography = (props: any) => {
  const {
    children,
    customStyles,
    variant,
    gutterBottom,
    noWrap,
    component,
    onClick,
  } = props;

  return (
    <TypographyUi
      gutterBottom={gutterBottom}
      variant={variant}
      component={component}
      sx={customStyles}
      noWrap={noWrap}
      onClick={onClick}
    >
      {children}
    </TypographyUi>
  );
};
