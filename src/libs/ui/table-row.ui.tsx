import { TableRow as TableRowUi } from "@mui/material";

export const TableRow = (props: any) => {
  const {
    children,
    component,
    customStyles,
    hover = false,
    selected = false,
    data,
    aria,
  } = props;

  return (
    <TableRowUi
      sx={customStyles}
      hover={hover}
      selected={selected}
      component={component}
      {...data}
      {...aria}
    >
      {children}
    </TableRowUi>
  );
};
