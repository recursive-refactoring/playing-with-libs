import { Grid2 } from "@mui/material";
import { ContainerGridLayoutPropsI } from "../layouts.interface";

export const ContainerGridLayout = (props: ContainerGridLayoutPropsI) => {
  const {
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    customStyles,
    children,
  } = props;

  return (
    <Grid2
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      sx={{ ...customStyles }}
    >
      {children}
    </Grid2>
  );
};
