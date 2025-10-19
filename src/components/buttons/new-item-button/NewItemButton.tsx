"use client";
import { AddBox, AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";

const mappedIcon: any = {
  circle: AddCircle,
  square: AddBox,
};

export const ACTION_TYPES: any = {
  CREATE: "create",
  ADD: "add",
};

export const NewItemButton = (props: any) => {
  const {
    disabled = false,
    variant = "contained",
    color = "primary",
    onClick,
    hasStartIcon = true,
    hasEndIcon = false,
    iconType = "circle",
    size = "medium",
    customStyles = {},
    actionType = "create",
    action = "issue",
    extraText,
  } = props;

  const MapIcon = mappedIcon?.[iconType];

  const hasText = !!actionType && !!action && !!extraText;

  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      disabled={disabled}
      size={size}
      startIcon={hasStartIcon && <MapIcon />}
      endIcon={hasEndIcon && <MapIcon />}
      onClick={onClick}
      sx={{
        "& .MuiButton-startIcon": {
          ...(!!hasText ? {} : { marginRight: 0, marginLeft: 0 }),
        },
        ...customStyles,
      }}
    >
      {ACTION_TYPES?.[actionType] ?? ""}
      {extraText && extraText}
      {action && action}
    </Button>
  );
};

export default NewItemButton;
