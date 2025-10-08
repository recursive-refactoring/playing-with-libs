"use client";

import React from "react";
import { SvgIcon, useTheme } from "@mui/material";

const SquareCheckIcon = (props: any) => {
  const theme = useTheme();
  const {
    width = "20px",
    height = "20px",
    sx = {},
    fill = theme?.palette?.primary?.main,
    iconColor = fill,
    hoverColor,
  } = props;

  return (
    <SvgIcon
      sx={{
        width,
        height,
        color: iconColor,
        "&:hover": { color: hoverColor },
        ...sx,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9891 1.66797H7.00573C3.9724 1.66797 2.16406 3.4763 2.16406 6.50964V13.4846C2.16406 16.5263 3.9724 18.3346 7.00573 18.3346H13.9807C17.0141 18.3346 18.8224 16.5263 18.8224 13.493V6.50964C18.8307 3.4763 17.0224 1.66797 13.9891 1.66797ZM14.4807 8.08464L9.75573 12.8096C9.63906 12.9263 9.48073 12.993 9.31406 12.993C9.1474 12.993 8.98906 12.9263 8.8724 12.8096L6.51406 10.4513C6.2724 10.2096 6.2724 9.80964 6.51406 9.56797C6.75573 9.3263 7.15573 9.3263 7.3974 9.56797L9.31406 11.4846L13.5974 7.2013C13.8391 6.95964 14.2391 6.95964 14.4807 7.2013C14.7224 7.44297 14.7224 7.83464 14.4807 8.08464Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
};

export default SquareCheckIcon;
