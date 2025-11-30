import { ItemGridPropsI } from "./grids.interface";
import { Grid } from "@/base";

export const ItemGridLayout = (props: ItemGridPropsI) => {
  const {
    xs = 12,
    sm,
    md,
    lg,
    xl,
    customStyles,
    children,
    gridSize = undefined,
    container = false,
    spacing = 0,
    offset,
  } = props;

  const gridSizes = !!gridSize
    ? gridSize
    : {
        xs,
        sm: sm ?? xs,
        md: md ?? sm ?? xs,
        lg: lg ?? md ?? sm ?? xs,
        xl: xl ?? lg ?? md ?? sm ?? xs,
      };

  return (
    <Grid
      size={gridSizes}
      sx={customStyles}
      container={container}
      spacing={spacing}
      offset={offset}
    >
      {children}
    </Grid>
  );
};
