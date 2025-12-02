import { DialogContent as DialogContentUi } from "@mui/material";

export const DialogContent = (props: any) => {
  const { children, customStyles, data, aria } = props;

  return (
    <DialogContentUi sx={customStyles} {...data} {...aria}>
      {children}
    </DialogContentUi>
  );
};
