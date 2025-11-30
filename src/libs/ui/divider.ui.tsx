import { Divider as DividerUi } from "@mui/material";

export const Divider = (props: any) => {
  const { orientation, flexItem, variant, customStyles } = props;

  return (
    <DividerUi
      orientation={orientation}
      flexItem={flexItem}
      variant={variant}
      sx={customStyles}
    />
  );
};
