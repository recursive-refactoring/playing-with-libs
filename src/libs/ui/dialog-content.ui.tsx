import { DialogContent as DialogContentUi } from "@mui/material";

export const DialogContent = (props: any) => {
  const { children, customStyles } = props;

  return <DialogContentUi sx={customStyles}>{children}</DialogContentUi>;
};
