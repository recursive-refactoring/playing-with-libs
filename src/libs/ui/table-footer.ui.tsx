import { TableFooter as TableFooterUi } from "@mui/material";

export const TableFooter = (props: any) => {
  const { children, component, customStyles } = props;

  return (
    <TableFooterUi sx={customStyles} component={component}>
      {children}
    </TableFooterUi>
  );
};
