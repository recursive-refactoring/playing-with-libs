import { AccordionActions as AccordionActionsUi } from "@mui/material";

export const AccordionActions = (props: any) => {
  const { children, customStyles, disableSpacing, data, aria } = props;

  return (
    <AccordionActionsUi
      disableSpacing={disableSpacing}
      sx={customStyles}
      {...data}
      {...aria}
    >
      {children}
    </AccordionActionsUi>
  );
};
