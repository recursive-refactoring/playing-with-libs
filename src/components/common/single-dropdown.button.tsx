"use client";
import { Menu, MenuItem, Typography } from "@/libs";
import { Fragment } from "react";
import { useSingleDropdownButton } from "../ui/buttons/single-dropdown-button/use-single-dropdown-button";

export const DropdownButton = (props: any) => {
  const {
    dropdownOptions,
    disabled,
    dropdownName = "Actions",
    hasEndIcon = true,
    btnVariant = "outlined",
    menuSxProps,
    buttonLabel = `action`,
    endIcon,
    color,
    menuId = "demo-positioned-menu",
    menuLabel = "demo-positioned-button",
    handleClick,
  } = props;

  const { anchorEl, open, handleClose } = useSingleDropdownButton();

  return (
    <>
      <DropdownButton
        variant={btnVariant}
        onClick={handleClick}
        color={color}
        disabled={disabled}
        aria-label={buttonLabel}
        endIcon={hasEndIcon && endIcon}
        dropdownName={dropdownName}
      >
        {dropdownName}
        <Menu
          menuId={menuId}
          menuLabel={menuLabel}
          anchorEl={anchorEl}
          isMenuOpen={open}
          onMenuClose={handleClose}
          customStyles={{ padding: 2, ...menuSxProps }}
        >
          {dropdownOptions?.map((singleOption: any) => (
            <Fragment key={singleOption?.id}>
              <MenuItem
                disabled={singleOption?.disabled}
                onMenuItemClick={handleClick}
                customStyles={{
                  cursor: "pointer",
                  "&.MuiMenuItem-root": {
                    marginBottom: { md: 0.5 },
                    marginX: { md: 0.5 },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"fontWeightMedium"}
                  customStyles={singleOption?.titleSx}
                >
                  {singleOption?.title}
                </Typography>
              </MenuItem>
            </Fragment>
          ))}
        </Menu>
      </DropdownButton>
    </>
  );
};
