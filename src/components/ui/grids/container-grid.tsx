import { ContainerGridPropsI } from "./grids.interface";
import { Grid } from "@/libs";

export const ContainerGridLayout = (props: ContainerGridPropsI) => {
  const {
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    customStyles,
    children,
  } = props;

  return (
    <Grid
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      sx={customStyles}
    >
      {children}
    </Grid>
  );
};
