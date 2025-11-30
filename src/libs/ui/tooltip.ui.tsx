import { Tooltip as TooltipUi } from "@mui/material";

export const CTooltip = (props: any) => {
  const {
    title = "",
    children,
    placement = "top-start",
    isCapital,
    tooltipBgColor = "primary.main",
    tooltipTextColor = "common.white",
    ...others
  } = props;

  return (
    <TooltipUi
      title={title}
      placement={placement}
      arrow
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: tooltipBgColor,
            color: tooltipTextColor,
            borderRadius: 1,
            fontWeight: "fontWeightBold",
            textTransform: isCapital ? "capitalize" : "none",
            boxShadow: 1,
          },
        },
        arrow: {
          sx: {
            color: tooltipBgColor,
          },
        },
      }}
      {...others}
    >
      {children}
    </TooltipUi>
  );
};
