import { MenuItem as MenuItemUi } from "@mui/material";

export const MenuItem = (props: any) => {
  const { disabled, onMenuItemClick, customStyles, children } = props;

  return (
    <MenuItemUi disabled={disabled} onClick={onMenuItemClick} sx={customStyles}>
      {children}
    </MenuItemUi>
  );
};
