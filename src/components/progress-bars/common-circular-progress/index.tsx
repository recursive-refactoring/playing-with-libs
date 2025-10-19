import { CIRCULAR_PROGRESS_VARIANTS } from "@/constants/ui";
import { pxToRem } from "@/utils/styles";
import { CircularProgress } from "@mui/material";

export const CommonCircularProgress = (props: any) => {
  const {
    variant = CIRCULAR_PROGRESS_VARIANTS?.IN_DETERMINATE,
    thickness = 3.6,
    value = 0,
    size = pxToRem(20),
    progressBarColor = "primary.main",
    color = "primary",
    disableShrink = false,
    progressBarLabel = `circular-progress-bar-${variant}`,
  } = props;

  return (
    <CircularProgress
      aria-label={progressBarLabel}
      disableShrink={disableShrink}
      variant={variant}
      color={color}
      sx={{
        color: progressBarColor,
      }}
      size={size}
      thickness={thickness}
      value={value}
    />
  );
};
