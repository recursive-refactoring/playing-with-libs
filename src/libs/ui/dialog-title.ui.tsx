import { DialogTitle as DialogTitleUi } from "@mui/material";

export const DialogTitle = (props: any) => {
  const { children, customStyles } = props;

  return <DialogTitleUi sx={customStyles}>{children}</DialogTitleUi>;
};
