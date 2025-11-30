import { TableBody as TableBodyUi } from "@mui/material";

export const TableBody = (props: any) => {
  const { children, component, customStyles } = props;

  return (
    <TableBodyUi sx={customStyles} component={component}>
      {children}
    </TableBodyUi>
  );
};
