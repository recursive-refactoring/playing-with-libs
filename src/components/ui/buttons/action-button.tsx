"use client";

import { Button } from "@/libs";

export const ActionButton = (props: any) => {
  const {
    primary = true,
    variant,
    color,
    type = "button",
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
    <Button
      aria-label={buttonLabel}
      variant={variant}
      type={type}
      loading={loading}
      disabled={disabled}
      color={color}
      onClick={onClick}
      sx={customStyles}
      startIcon={!!startIcon && startIcon}
      fullWidth={fullWidth}
      primary={primary}
    >
      {children}
    </Button>
  );
};
