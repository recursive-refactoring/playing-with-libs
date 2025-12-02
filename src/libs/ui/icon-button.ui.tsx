"use client";

import { IconButton as IconButtonUi } from "@mui/material";

export const IconButton = (props: any) => {
  const {
    onClick,
    children,
    disabled,
    type = "button",
    size = "small",
    customStyles,
    color,
    ariaLabel,
    data,
    aria,
  } = props;

  return (
    <IconButtonUi
      disableFocusRipple
      disableRipple
      disabled={disabled}
      color={color}
      sx={customStyles}
      onClick={onClick}
      type={type}
      size={size}
      aria-label={ariaLabel}
      {...data}
      {...aria}
    >
      {children}
    </IconButtonUi>
  );
};
