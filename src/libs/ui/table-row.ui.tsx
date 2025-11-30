import { TableRow as TableRowUi } from "@mui/material";

export const TableRow = (props: any) => {
  const {
    children,
    component,
    customStyles,
    hover = false,
    selected = false,
  } = props;

  return (
    <TableRowUi
      sx={customStyles}
      hover={hover}
      selected={selected}
      component={component}
    >
      {children}
    </TableRowUi>
  );
};
