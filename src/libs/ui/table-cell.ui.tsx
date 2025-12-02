import { TableCell as TableCellUi } from "@mui/material";

export const TableCell = (props: any) => {
  const {
    children,
    component,
    customStyles,
    size = "small",
    padding = "normal",
    align = "inherit",
    data,
    aria,
  } = props;

  return (
    <TableCellUi
      sx={customStyles}
      component={component}
      size={size}
      padding={padding}
      align={align}
      {...data}
      {...aria}
    >
      {children}
    </TableCellUi>
  );
};
