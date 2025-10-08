import { pxToRem } from "@/utils/styles";
import { alpha } from "@mui/material";

export const styles = {
  circleIconStyle: { ml: "auto", mt: 0.5, cursor: "pointer" },
  tabRoot: {
    minHeight: pxToRem(34),
    ".MuiTabScrollButton-root.Mui-disabled": { opacity: 1, color: "grey.0" },
    ".MuiTab-root": { marginRight: `1rem !important` },
    borderBottom: 1,
    borderColor: "primary.light",
  },
  tabIndicator: {
    sx: {
      background: "primary.main",
      color: "common.white",
      boxShadow: `0px 1px 2px 0px #0009912`,
      "&.selected": {
        color: "grey.900",
      },
      "&:hover": {
        background: "info.main",
      },
    },
  },
  tabsStyle: {
    paddingX: 2,
    borderRadius: ".5rem",
    minHeight: pxToRem(34),
    color: "grey.900",
    fontSize: "0.875rem",
    fontWeight: 500,
    "&.Mui-selected ": {
      fontWeight: 700,
      color: "primary.main",
      backgroundColor: "primary.light",
    },
  },
};
