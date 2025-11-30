import { Dialog as DialogUi } from "@mui/material";

export const Dialog = (props: any) => {
  const {
    open,
    onClose,
    maxWidth,
    fullScreen,
    fullWidth,
    children,
    customStyles,
  } = props;

  return (
    <DialogUi
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      sx={customStyles}
    >
      {children}
    </DialogUi>
  );
};
