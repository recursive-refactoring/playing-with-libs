import { TableFooter as TableFooterUi } from "@mui/material";

export const TableFooter = (props: any) => {
  const { children, component, customStyles, data, aria } = props;

  return (
    <TableFooterUi sx={customStyles} component={component} {...aria} {...data}>
      {children}
    </TableFooterUi>
  );
};
