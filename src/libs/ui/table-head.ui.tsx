import { TableHead as TableHeadUi } from "@mui/material";

export const TableHead = (props: any) => {
  const { children, component, customStyles } = props;

  return (
    <TableHeadUi sx={customStyles} component={component}>
      {children}
    </TableHeadUi>
  );
};
