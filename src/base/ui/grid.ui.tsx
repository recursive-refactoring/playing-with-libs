"use client";

import { Grid2 } from "@mui/material";

export const Grid = (props: any) => {
  const {
    spacing = 0,
    rowSpacing = spacing,
    columnSpacing = spacing,
    customStyles,
    children,
    size,
    offset,
  } = props;

  return (
    <Grid2
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      sx={customStyles}
      size={size}
      offset={offset}
    >
      {children}
    </Grid2>
  );
};
