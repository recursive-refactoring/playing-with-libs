import { TableBody as TableBodyUi } from "@mui/material";

export const TableBody = (props: any) => {
  const { children, component, customStyles, data, aria } = props;

  return (
    <TableBodyUi sx={customStyles} component={component} {...data} {...aria}>
      {children}
    </TableBodyUi>
  );
};
