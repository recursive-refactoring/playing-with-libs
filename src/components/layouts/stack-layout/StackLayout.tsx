import { Stack } from "@mui/material";
import { StackLayoutPropsI } from "./StackLayout.interface";

export const StackLayout = (props: StackLayoutPropsI) => {
  const {
    customStyles,
    direction = "column",
    spacing = 0,
    useFlexGap = false,
    component,
    children,
  } = props;

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      component={component}
      useFlexGap={useFlexGap}
      sx={customStyles}
    >
      {children}
    </Stack>
  );
};
