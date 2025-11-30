"use client";

import { IconButton } from "@mui/material";
import { CommonIconButtonPropsI } from "../buttons.interface";

export const CommonIconButton = (props: CommonIconButtonPropsI) => {
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
    <IconButton
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
    </IconButton>
  );
};
