import { Box, Chip, Typography } from "@mui/material";
import { CHIP_SHAPE } from "@/constants/ui.constant";
import { Variant } from "@mui/material/styles/createTypography";

export const RecordCountChip = (props: any) => {
  const {
    isCountLoading = false,
    totalCount = 0,
    name,
    textColor = "text.primary",
    chipColor = "primary",
    chipBackgroundColor = "primary.main",
    nameVariant = "h6",
    isRight = true,
  } = props;

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
      flexWrap={"wrap"}
    >
      {isRight && (
        <Typography variant={nameVariant as Variant} color={textColor}>
          {name}
        </Typography>
      )}
      <Chip
        size="medium"
        shape={CHIP_SHAPE?.SQUARE}
        color={chipColor}
        backgroundColor={chipBackgroundColor}
        label={
          isCountLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CommonCircularProgress />
            </Box>
          ) : totalCount < SELECTED_ARRAY_LENGTH?.TEN ? (
            `0${totalCount}`
          ) : (
            totalCount
          )
        }
      />
      {!isRight && (
        <Typography variant={nameVariant as Variant} color={textColor}>
          {name}
        </Typography>
      )}
    </Box>
  );
};
