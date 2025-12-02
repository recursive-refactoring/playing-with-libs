import { Table as TableUi } from "@mui/material";

export const Table = (props: any) => {
  const {
    children,
    component,
    customStyles,
    stickyHeader = false,
    size = "small",
    padding = "normal",
    data,
    aria,
  } = props;

  return (
    <TableUi
      sx={customStyles}
      stickyHeader={stickyHeader}
      component={component}
      size={size}
      padding={padding}
      {...data}
      {...aria}
    >
      {children}
    </TableUi>
  );
};
