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
    data,
    aria,
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
      {...data}
      {...aria}
    >
      {children}
    </Grid2>
  );
};
