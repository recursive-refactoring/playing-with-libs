import { TableContainer as TableContainerUi } from "@mui/material";

export const TableContainer = (props: any) => {
  const { children, component, customStyles, data, aria } = props;

  return (
    <TableContainerUi
      sx={customStyles}
      component={component}
      {...data}
      {...aria}
    >
      {children}
    </TableContainerUi>
  );
};
