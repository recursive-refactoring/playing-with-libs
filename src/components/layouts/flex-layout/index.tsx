import { Box } from "@mui/material";
import { FlexLayoutPropsI } from "../layouts.interface";

export const FlexLayout = (props: FlexLayoutPropsI) => {
  const {
    alignItems = "center",
    justifyContent = "flex-start",
    gap = 1,
    flexWrap = "wrap",
    flexDirection = "row",
    minHeight = "auto",
    mb = 0,
    children,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems,
        justifyContent,
        gap,
        flexWrap,
        flexDirection,
        minHeight,
        mb,
      }}
    >
      {children}
    </Box>
  );
};
