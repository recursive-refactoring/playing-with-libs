import { DialogActions as DialogActionsUi } from "@mui/material";

export const DialogActions = (props: any) => {
  const { children, customStyles, disableSpacing, data, aria } = props;

  return (
    <DialogActionsUi
      disableSpacing={disableSpacing}
      sx={customStyles}
      {...data}
      {...aria}
    >
      {children}
    </DialogActionsUi>
  );
};
