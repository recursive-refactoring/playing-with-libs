import { Box as BoxUi } from "@mui/material";

export const Box = (props: any) => {
  const {
    children,
    customStyles,
    component = "div",
    onClick = undefined,
    ref = undefined,
    data = undefined,
  } = props;

  return (
    <BoxUi
      component={component}
      sx={customStyles}
      onClick={onClick}
      ref={ref}
      data-data={data}
    >
      {children}
    </BoxUi>
  );
};
