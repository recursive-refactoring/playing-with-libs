import { SvgIcon as SvgIconUi } from "@mui/material";

export const SvgIcon = (props: any) => {
  const {
    children,
    customStyles,
    width,
    height,
    color,
    hoverColor,
    cursor,
    onClick,
  } = props;

  return (
    <SvgIconUi
      sx={{
        width,
        height,
        color,
        cursor: cursor,
        "&:hover": { color: hoverColor },
        ...customStyles,
      }}
      onClick={onClick}
    >
      {children}
    </SvgIconUi>
  );
};
