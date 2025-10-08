"use client";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import { useSingleDropdownButton } from "./use-single-dropdown-button";
import { Fragment } from "react";
import {
  SingleDropdownButtonPropsI,
  SingleDropdownOptionI,
} from "../buttons.interface";

export const SingleDropdownButton = (props: SingleDropdownButtonPropsI) => {
  const {
    dropdownOptions,
    disabled,
    dropdownName = "Actions",
    hasEndIcon = true,
    btnVariant = "outlined",
    menuSxProps,
    buttonLabel = `action`,
  } = props;

  const { anchorEl, open, theme, handleClick, handleClose } =
    useSingleDropdownButton();

  return (
    <>
      <Button
        className="small"
        variant={btnVariant}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="secondary"
        disabled={disabled}
        aria-label={buttonLabel}
        sx={{ textTransform: "capitalize" }}
        endIcon={hasEndIcon && <ArrowDropDownIcon />}
      >
        {dropdownName}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ padding: 2, ...menuSxProps }}
      >
        {dropdownOptions?.map((singleOption: SingleDropdownOptionI) => (
          <Fragment key={singleOption?.id}>
            <MenuItem
              disabled={singleOption?.disabled}
              onClick={(event: any) => {
                event?.stopPropagation();
                singleOption?.handleClick?.(handleClose);
              }}
              sx={{
                cursor: "pointer",
                "&.MuiMenuItem-root": {
                  marginBottom: { md: 0.5 },
                  marginX: { md: 0.5 },
                },
              }}
            >
              <Typography
                variant="body2"
                color={theme?.palette?.grey?.[600]}
                fontWeight={"fontWeightMedium"}
                sx={singleOption?.titleSx}
              >
                {singleOption?.title}
              </Typography>
            </MenuItem>
          </Fragment>
        ))}
      </Menu>
    </>
  );
};
