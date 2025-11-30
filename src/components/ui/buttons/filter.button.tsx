"use client";

import { EditIcon } from "@/assets";
import { Button } from "@/libs";

export const FilterButton = (props: any) => {
  const {
    disabled = false,
    variant = "contained",
    color = "primary",
    onClick,
    hasStartIcon = true,
    hasEndIcon = false,
    size = "small",
    customStyles = {},
  } = props;

  return (
    <Button
      startIcon={hasStartIcon && <EditIcon color={"common.white"} />}
      endIcon={hasEndIcon && <EditIcon color={"common.white"} />}
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      sx={customStyles}
      disabled={disabled}
    >
      Filter
    </Button>
  );
};
