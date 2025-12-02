"use client";

import { Theme, useTheme } from "@mui/material";
import { useState } from "react";
import { SingleDropdownButtonCloseMenuType } from "../components/ui/buttons/buttons.interface";

export const useFlatDropdown = (props: any) => {
  const { onMenuClick } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open: boolean = Boolean(anchorEl);
  const theme: Theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
  };

  const handleClose: SingleDropdownButtonCloseMenuType = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };

  const handleMenuClick = (event: any) => {
    event?.stopPropagation();
    onMenuClick?.(handleClose);
  };

  return {
    anchorEl,
    open,
    theme,
    handleClick,
    handleClose,
    handleMenuClick,
  };
};
