import { Box } from "@mui/material";

export const Card = (props: any) => {
  const {
    backgroundColor = "common.white",
    children,
    borderRadius = 2,
    paddingX = 2,
    paddingY = 2,
  } = props;

  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius,
        paddingX,
        paddingY,
        boxShadow: 25,
      }}
    >
      {children}
    </Box>
  );
};
