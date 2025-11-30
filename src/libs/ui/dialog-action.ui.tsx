import { DialogActions as DialogActionsUi } from "@mui/material";

export const DialogActions = (props: any) => {
  const { children, customStyles, disableSpacing } = props;

  return (
    <DialogActionsUi disableSpacing={disableSpacing} sx={customStyles}>
      {children}
    </DialogActionsUi>
  );
};
