"use client";
import { useFlatDropdown } from "@/hooks";
import { Menu, MenuItem, Typography } from "@/libs";
import { Fragment } from "react";

export const DropdownButton = (props: any) => {
  const {
    dropdownOptions,
    disabled,
    dropdownName = "Actions",
    hasEndIcon = true,
    btnVariant = "outlined",
    menuSxProps,
    endIcon,
    color,
    menuId = "demo-positioned-menu",
    menuLabel = "demo-positioned-button",
  } = props;

  const { anchorEl, open, handleClick, handleClose, handleMenuClick } =
    useFlatDropdown(props);

  return (
    <>
      <DropdownButton
        variant={btnVariant}
        onClick={handleClick}
        color={color}
        disabled={disabled}
        endIcon={hasEndIcon && endIcon}
        dropdownName={dropdownName}
        id={menuLabel}
        label={menuId}
      >
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
                onMenuItemClick={handleMenuClick}
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
