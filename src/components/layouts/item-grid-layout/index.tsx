import { Grid2 } from "@mui/material";
import { ItemGridLayoutPropsI } from "../layouts.interface";

export const ItemGridLayout = (props: ItemGridLayoutPropsI) => {
  const {
    xs = 12,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    customStyles,
    children,
  } = props;

  return (
    <Grid2 size={{ xs, sm, md, lg, xl }} sx={{ ...customStyles }}>
      {children}
    </Grid2>
  );
};
