import { Menu as MenuUi } from "@mui/material";

export const Menu = (props: any) => {
  const {
    menuId,
    menuLabel,
    anchorEl,
    isMenuOpen,
    onMenuClose,
    customStyles,
    children,
    data,
    aria,
  } = props;

  return (
    <MenuUi
      id={menuId}
      aria-labelledby={menuLabel}
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={onMenuClose}
      sx={customStyles}
      {...data}
      {...aria}
    >
      {children}
    </MenuUi>
  );
};
