"use client";
import { LoadingButton } from "@mui/lab";
import { CommonLoadingButtonPropsI } from "../buttons.interface";

export const CommonLoadingButton = (props: CommonLoadingButtonPropsI) => {
  const {
    primary = true,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    type = "button",
    className = "small",
    loading = false,
    disabled = false,
    onClick,
    customStyles,
    children,
    startIcon = null,
    fullWidth = false,
    buttonLabel = `loading button ${color}`,
  } = props;

  return (
    <LoadingButton
      aria-label={buttonLabel}
      className={className}
      variant={variant}
      type={type}
      loading={loading}
      disabled={disabled}
      color={color}
      onClick={onClick}
      sx={customStyles}
      startIcon={!!startIcon && startIcon}
      fullWidth={fullWidth}
    >
      {children}
    </LoadingButton>
  );
};
