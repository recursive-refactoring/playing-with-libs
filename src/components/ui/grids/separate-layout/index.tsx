import { pxToRem } from "@/utils/styles.util";
import { Box } from "@mui/material";
import { SeparateLayoutPropsI } from "../grids.interface";

export const SeparateLayout = (props: SeparateLayoutPropsI) => {
  const { size = 1, borderColor = "primary", py = 1 } = props;
  return (
    <Box
      sx={{
        borderTop: `${pxToRem(size)} solid`,
        borderColor,
        py,
      }}
    />
  );
};
