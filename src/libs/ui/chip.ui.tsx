import { Chip as ChipUi } from "@mui/material";
import { CHIP_SHAPE, CHIP_VARIANTS } from "@/constants/ui.constant";

const mapBorderRadius = {
  [CHIP_SHAPE?.OVAL]: 4,
  [CHIP_SHAPE?.ROUNDED]: 2,
  [CHIP_SHAPE?.SQUARE]: 1,
};

export const Chip = (props: any) => {
  const {
    size = "small",
    label,
    color = "primary",
    variant = CHIP_VARIANTS?.FILLED,
    disabled = false,
    customStyles,
    shape = CHIP_SHAPE?.OVAL,
    borderRadius,
    icon,
    backgroundColor,
    textColor,
    hoverStyles,
    onClick,
    isCapital,
    fontWeight = 400,
    hoverBackgroundColor = backgroundColor,
    borderColor,
    data,
    aria,
  } = props;

  return (
    <ChipUi
      size={size}
      label={label}
      variant={variant as any}
      color={color}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      sx={{
        borderRadius: mapBorderRadius?.[shape] ?? borderRadius,
        backgroundColor,
        color: textColor,
        borderColor,
        fontWeight,
        textTransform: isCapital ? "capitalize" : "none",
        ...customStyles,
        "&.MuiChip-root": {
          "&:hover": {
            backgroundColor: hoverBackgroundColor,
            ...hoverStyles,
          },
        },
      }}
      {...data}
      {...aria}
    />
  );
};
