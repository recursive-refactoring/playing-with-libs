import { DialogTitle as DialogTitleUi } from "@mui/material";

export const DialogTitle = (props: any) => {
  const { children, customStyles, data, aria } = props;

  return (
    <DialogTitleUi sx={customStyles} {...data} {...aria}>
      {children}
    </DialogTitleUi>
  );
};
