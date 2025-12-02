import { Drawer as DrawerUi } from "@mui/material";

export const Drawer = (props: any) => {
  const {
    isDrawerOpen,
    onDrawerClose,
    anchor = "right",
    variant = "temporary",
    children,
    data,
    aria,
  } = props;

  return (
    <DrawerUi
      open={isDrawerOpen}
      onClose={onDrawerClose}
      anchor={anchor}
      variant={variant}
      {...data}
      {...aria}
    >
      {children}
    </DrawerUi>
  );
};
