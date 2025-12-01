"use client";
import { EditIcon } from "@/assets";
import { SingleDropdownButtonPropsI } from "./buttons.interface";
import { Button } from "@/libs";

export const DropdownButton = (props: SingleDropdownButtonPropsI) => {
  const {
    disabled,
    dropdownName = "Actions",
    hasEndIcon = true,
    btnVariant = "outlined",
    color = "secondary",
    buttonLabel = `action`,
    children,
    isDropdownOpen,
    onBtnClick,
  } = props;

  return (
    <>
      <Button
        className="small"
        variant={btnVariant}
        id="demo-positioned-button"
        aria-controls={isDropdownOpen ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? "true" : undefined}
        onClick={onBtnClick}
        color={color}
        disabled={disabled}
        aria-label={buttonLabel}
        isCapital
        endIcon={hasEndIcon && <EditIcon />}
      >
        {dropdownName}
      </Button>
      {children}
    </>
  );
};
