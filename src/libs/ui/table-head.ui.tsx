import { TableHead as TableHeadUi } from "@mui/material";

export const TableHead = (props: any) => {
  const { children, component, customStyles, data, aria } = props;

  return (
    <TableHeadUi sx={customStyles} component={component} {...data} {...aria}>
      {children}
    </TableHeadUi>
  );
};
