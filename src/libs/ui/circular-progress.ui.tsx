import { CIRCULAR_PROGRESS_VARIANTS } from "@/constants/ui.constant";
import { pxToRem } from "@/utils/styles.util";
import { CircularProgress as CircularProgressUi } from "@mui/material";

export const CircularProgress = (props: any) => {
  const {
    variant = CIRCULAR_PROGRESS_VARIANTS?.IN_DETERMINATE,
    thickness = 3.6,
    value = 0,
    size = pxToRem(20),
    progressBarColor = "primary.main",
    color = "primary",
    disableShrink = false,
    progressBarLabel = `circular-progress-bar-${variant}`,
    customStyles,
    data,
    aria,
  } = props;

  return (
    <CircularProgressUi
      aria-label={progressBarLabel}
      disableShrink={disableShrink}
      variant={variant}
      color={color}
      sx={{
        color: progressBarColor,
        ...customStyles,
      }}
      size={size}
      thickness={thickness}
      value={value}
      {...data}
      {...aria}
    />
  );
};
