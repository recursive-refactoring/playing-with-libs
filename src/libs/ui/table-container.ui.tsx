import { TableContainer as TableContainerUi } from "@mui/material";

export const TableContainer = (props: any) => {
  const { children, component, customStyles } = props;

  return (
    <TableContainerUi sx={customStyles} component={component}>
      {children}
    </TableContainerUi>
  );
};
