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
    iconName,
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
      aria-label={iconName}
    >
      {children}
    </IconButtonUi>
  );
};
