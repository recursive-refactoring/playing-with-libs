import { Box, Chip, Typography } from "@mui/material";
import { TooltipItemsCountChipPropsI } from "../chips.interface";
import { CommonTooltip } from "@/components/data-displays/common-tooltip";

export const TooltipItemsCountChip = (props: TooltipItemsCountChipPropsI) => {
  const { data = [] } = props;
  return (
    <CommonTooltip
      title={
        !!data?.length && (
          <Box maxHeight={"10vh"} overflow={"auto"}>
            {data?.map((item: any, index: number) => (
              <Typography key={item?._id} variant="body2">
                {`${index + 1} : ${item?.label}`}
              </Typography>
            ))}
          </Box>
        )
      }
    >
      <Chip
        size="small"
        label={data?.length}
        variant="filled"
        color={"primary"}
      />
    </CommonTooltip>
  );
};
