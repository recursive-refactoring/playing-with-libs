"use client";
import {
  AddBox,
  AddCircle,
  FilterNone as FilterIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddNewItemButtonPropsI } from "../buttons.interface";

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
      startIcon={hasStartIcon && <FilterIcon fill={"common.white"} />}
      endIcon={hasEndIcon && <FilterIcon fill={"common.white"} />}
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

export default FilterButton;
